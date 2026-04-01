import React, { useEffect, useState } from "react";
import "./index.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const wrapLetters = (text) =>
    text.replace(/^\s+/, "").split("").map((ch, i) => (
        <span key={i} className="letter" style={{ '--i': i }}>
            {ch === " " ? "\u00A0" : ch}
        </span>
    ));

const projects = [
    {
        title: "Credit Card Fraud Detection",
        description:
            "Machine learning pipeline for identifying fraudulent transactions with a focus on reducing false positives.",
        href: "https://github.com/EdrisAdel/CreditCardFraudDetection",
        repo: "CreditCardFraudDetection",
    },
    {
        title: "Bundesliga Match Predictor",
        description:
            "Predictive model for Bundesliga outcomes and table movement using historical statistics and form trends.",
        href: "https://github.com/EdrisAdel/BundesligaMatchPredictor",
        repo: "BundesligaMatchPredictor",
    },
    {
        title: "StockAI",
        description:
            "A machine learning application that analyzes stock market trends and delivers AI-driven insights and price predictions.",
        href: "https://github.com/EdrisAdel/StockAI",
        repo: "StockAI",
    },
    {
        title: "Football Vision Analysis",
        description:
            "A data-driven system that processes and visualizes football match statistics for in-depth performance analysis.",
        href: "https://github.com/EdrisAdel/FootballVisionAnalysis",
        repo: "FootballVisionAnalysis",
    },
    {
        title: "Portfolio Website",
        description:
            "Personal portfolio built to showcase projects, technical stack, and contact workflow in one focused interface.",
        href: "https://github.com/EdrisAdel/PortfolioWebsite",
        repo: "PortfolioWebsite",
    },
    {
        title: "Java OOP Maze Game",
        description:
            "Object-oriented Java game with maze traversal mechanics, entity logic, and reusable class architecture.",
        href: "https://github.com/EdrisAdel/JavaOOPMazeGame",
        repo: "JavaOOPMazeGame",
    },
    {
        title: "Client Server Network Test App",
        description:
            "Networking test application for validating client-server communication, request handling, and stability.",
        href: "https://github.com/EdrisAdel/ClientServerNetworkTestApplication",
        repo: "ClientServerNetworkTestApplication",
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

    return (
        <div className="projects-page">
            <div className={`hero-projects ${showMain ? "show" : ""}`}>

                {/* ── left column ── */}
                <div className="proj-left">
                    <div className="projects-header-row">
                        <div>
                            <h1 className="projects-title">{wrapLetters("Projects")}</h1>
                            <p className="proj-tagline">A collection of what I have built so far.</p>
                        </div>
                    </div>

                    <div className="projects-cards-row">
                        {projects.map((project, i) => (
                            <a
                                key={i}
                                className="project-card"
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="project-card-index">{String(i + 1).padStart(2, "0")}</span>
                                <h3 className="project-card-title">{project.title}</h3>
                                <p className="project-card-desc">{project.description}</p>
                                <span className="project-card-repo">
                                    {`github.com/EdrisAdel/${project.repo}`}
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="projects-actions">
                        <a
                            className="proj-github-btn"
                            href="https://github.com/EdrisAdel"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            View GitHub
                        </a>

                        <a
                            className="proj-github-btn"
                            href="/EdrisCS_Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;