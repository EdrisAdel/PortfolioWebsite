import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.css";
import IconRotator from "../IconRotator";

// icons (adjust as needed)
import { SiDocker, SiGithub, SiPostman, SiPytorch, SiOpencv, SiAmazon } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";


const TechList = () => {
    const [devs] = useState([
        { name: "Postman", progress: 75, className: "postman-progress", years: 2, icon: <SiPostman /> },
        { name: "Docker", progress: 75, className: "docker-progress", years: 2, icon: <SiDocker /> },
        { name: "PyTorch", progress: 50, className: "pytorch-progress", years: 1, icon: <SiPytorch /> },
        { name: "OpenCV", progress: 50, className: "opencv-progress", years: 1, icon: <SiOpencv /> },
        { name: "AWS", progress: 50, className: "aws-progress", years: 1, icon: <FaAws /> },
        { name: "Azure", progress: 50, className: "azure-progress", years: 1, icon: <VscAzure /> },
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
                <IconRotator techs={devs} interval={2800} size={88} />
            </aside>
        </div>
    );
};

export default TechList;