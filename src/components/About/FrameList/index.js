import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.css";
import IconRotator from "../IconRotator";

// icons
import { SiNodedotjs, SiTailwindcss, SiMongodb, SiFirebase, SiDjango, SiReact } from "react-icons/si";

const TechList = () => {
    const [techs] = useState([
        { name: "ReactJS", progress: 100, className: "react-progress", years: 3, icon: <SiReact /> },
        { name: "Express / NodeJS", progress: 100, className: "node-progress", years: 3, icon: <SiNodedotjs /> },
        { name: "Tailwind", progress: 75, className: "tailwind-progress", years: 2.5, icon: <SiTailwindcss /> },
        { name: "MongoDB", progress: 50, className: "mongodb-progress", years: 1, icon: <SiMongodb /> },
        { name: "Firebase", progress: 37.5, className: "firebase-progress", years: 0.5, icon: <SiFirebase /> },
        { name: "Django", progress: 37.5, className: "django-progress", years: 0.5, icon: <SiDjango /> },
    ]);

    return (
        <div className="frame-list-grid">
            <div className="frame-left">
                <ul>
                    {techs.map((tech, index) => (
                        <li key={index} className="tech-row">
                            <span className="frame-info">{tech.name}: {`${tech.years} years`}</span>
                            <ProgressBar progress={tech.progress} className={tech.className} />
                        </li>
                    ))}
                </ul>
            </div>

            <aside className="frame-right">
                <IconRotator techs={techs} interval={2800} size={88} />
            </aside>
        </div>
    );
};

export default TechList;