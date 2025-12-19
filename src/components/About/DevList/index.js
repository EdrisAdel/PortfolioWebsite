import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.css";
import IconRotator from "../FrameList/IconRotator";

// icons (adjust as needed)
import { SiDocker, SiGithub, SiPostman, SiPytorch, SiOpencv } from "react-icons/si";

const TechList = () => {
    const [devs] = useState([
        { name: "Git", progress: 100, className: "github-progress", years: 3, icon: <SiGithub /> },
        { name: "Postman", progress: 75, className: "postman-progress", years: 2, icon: <SiPostman /> },
        { name: "Docker", progress: 50, className: "docker-progress", years: 1, icon: <SiDocker /> },
        { name: "PyTorch", progress: 50, className: "pytorch-progress", years: 1, icon: <SiPytorch /> },
        { name: "OpenCV", progress: 50, className: "opencv-progress", years: 1, icon: <SiOpencv /> },
    ]);

    return (
        <div>
            <ul>
                {devs.map((dev, index) => (
                    <li key={index}>
                        <span className="dev-info">{dev.name}: {`${dev.years} years`}</span>
                        <ProgressBar progress={dev.progress} className={dev.className} />
                    </li>
                ))}
            </ul>

            <aside className="frame-right">
                <IconRotator techs={devs} size={96} speed={8} visible={4} />
            </aside>
        </div>
    );
};

export default TechList;