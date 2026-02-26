import React, { useEffect, useState } from "react";
import "./index.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const wrapLetters = (text) =>
    text.split("").map((ch, i) => (
        <span key={i} className="letter">
            {ch === " " ? "\u00A0" : ch}
        </span>
    ));

const projects = [
    {
        title: "StockAI",
        description:
            "A machine learning application that analyzes stock market trends and delivers AI-driven insights and price predictions.",
        href: "https://github.com/EdrisAdel/StockAI",
    },
    {
        title: "Football Match Analytics System",
        description:
            "A data-driven system that processes and visualizes football match statistics for in-depth performance analysis.",
        href: "https://github.com/EdrisAdel/FootballVisionAnalysis",
    },
    {
        title: "Bundesliga Table Predictor",
        description:
            "A predictive model that forecasts Bundesliga standings using historical match data and statistical modelling.",
        href: "https://github.com/EdrisAdel/BundesligaMatchPredictor",
    },
];

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

                {/* ── left column ── */}
                <div className="proj-left">
                    <h1 className="projects-title">{wrapLetters("Portfolio")}</h1>
                    <p className="proj-tagline">Here's what I've been working on.</p>

                    <div className="projects-cards-row">
                        {projects.map((project, i) => (
                            <a
                                key={i}
                                className="project-card"
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <h3 className="project-card-title">{project.title}</h3>
                                <p className="project-card-desc">{project.description}</p>
                            </a>
                        ))}
                    </div>

                    <a
                        className="proj-github-btn"
                        href="https://github.com/EdrisAdel"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                        View on GitHub
                    </a>

                    {/* mobile-only download button */}
                    <button
                        className="proj-mobile-download-btn"
                        onClick={handleDownload}
                        aria-label="Download Resume (PDF)"
                    >
                        <FontAwesomeIcon icon={faDownload} />
                        Download
                    </button>
                </div>

                {/* ── right column — resume ── */}
                <div className="proj-right">
                    <span className="proj-resume-label">Resume</span>
                    <div className="projects-resume-wrapper">
                        <img
                            src="/EdrisCS_Resume.webp"
                            alt="Edris Adel Resume"
                            className="projects-resume-frame"
                        />
                        <div className="projects-resume-overlay">
                            <button
                                className="projects-download-btn"
                                onClick={handleDownload}
                                aria-label="Download Resume (PDF)"
                            >
                                <FontAwesomeIcon icon={faDownload} />
                                <span>Download</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* hidden download anchor */}
            <a
                href="/EdrisCS_Resume.pdf"
                download
                id="hidden-resume-download"
                style={{ display: "none" }}
            >
                Download resume
            </a>
        </div>
    );
};

export default Projects;