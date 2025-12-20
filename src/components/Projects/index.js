import React, { useEffect, useState } from "react";
import "./index.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const wrapLetters = (text) =>
    text.split("").map((ch, i) => (
        <span key={i} className="letter">
            {ch === " " ? "\u00A0" : ch}
        </span>
    ));

const Projects = () => {
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
        const startDelay = 0;
        const moveDuration = 300;
        const revealDelay = 60;

        const tReveal = setTimeout(
            () => setShowMain(true),
            startDelay + moveDuration + revealDelay
        );

        return () => clearTimeout(tReveal);
    }, []);

    const handleDownload = () => {
        const link = document.getElementById("hidden-resume-download");
        if (link) {
            link.click();
        }
    };

    return (
        <div className="projects-page">
            <div className={`hero-projects ${showMain ? "show" : ""}`}>
                <h1 className="projects-title">{wrapLetters("Portfolio")}</h1>
                <div className="projects-description">
                    Feel free to download and look at my resume! <br /><br />If you are interested in what I've been building, please visit my Github below!
                    I'm always building something new and updating my projects regularly. Thank you for your interest!
                </div>
                <div className="projects-resume-wrapper">
                    <img
                        src="/Resume.jpg"
                        alt="Edris Adel Resume"
                        className="projects-resume-frame"
                    />

                    <div className="projects-resume-overlay">
                        <button className="projects-download-btn" onClick={handleDownload}>
                            Download Resume (PDF)
                        </button>

                    </div>
                </div>

                {/* hidden actual download link (used by the button) */}
                <a
                    href="/EdrisCS_Resume.pdf"
                    download
                    id="hidden-resume-download"
                    style={{ display: "none" }}
                /><a className="giticon" target="_blank" rel="noreferrer" href="https://github.com/EdrisAdel">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>

        </div >
    );
};

export default Projects;