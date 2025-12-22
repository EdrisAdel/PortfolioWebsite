import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import IconRotator from "../IconRotator";
import "./index.css"
import { FaJava, FaUnity } from "react-icons/fa";
import { SiPython, SiHtml5, SiMysql, SiC } from "react-icons/si";

const LanguageList = () => {
    const [languages] = useState([
        { name: "HTML/CSS/JS", progress: 100, className: "web-progress", years: 3, icon: <SiHtml5 /> },
        { name: "Python", progress: 100, className: "python-progress", years: 3, icon: <SiPython /> },
        { name: "Java", progress: 75, className: "java-progress", years: 2.5, icon: <FaJava /> },
        { name: "C#", progress: 37.5, className: "csharp-progress", years: 1, icon: <FaUnity /> },
        { name: "SQL", progress: 25, className: "sql-progress", years: 0.5, icon: <SiMysql /> },
        { name: "C/C++", progress: 25, className: "c-progress", years: 0.5, icon: <SiC /> },
    ]);

    return (
        <div>
            <ul>
                {languages.map((language, index) => (
                    <li key={index}>
                        <span className="language-info">{language.name}: {`${language.years} years`}</span>
                        <ProgressBar progress={language.progress} className={language.className} />
                    </li>
                ))}
            </ul>

            <aside className="frame-right">
                <IconRotator techs={languages} interval={2800} size={88} />
            </aside>
        </div>
    );
};

export default LanguageList;