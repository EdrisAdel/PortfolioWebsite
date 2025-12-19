import React, { useEffect, useState } from 'react';
import LanguageList from '../About/LanguageList';
import FrameList from '../About/FrameList';
import DevList from '../About/DevList';
import './index.css';

const About = () => {
    const [moved, setMoved] = useState(false);
    const [showMain, setShowMain] = useState(false);
    const [active, setActive] = useState('languages');
    const [panelKey, setPanelKey] = useState(0);

    const wrapLetters = (text) =>
        text.split('').map((ch, i) => (
            <span key={i} className="letter" style={{ ['--i']: i }}>
                {ch === ' ' ? '\u00A0' : ch}
            </span>
        ));

    useEffect(() => {
        const startDelay = 0;
        const moveDuration = 300;
        const revealDelay = 60;
        const tStart = setTimeout(() => setMoved(true), startDelay);
        const tReveal = setTimeout(() => setShowMain(true), startDelay + moveDuration + revealDelay);
        return () => {
            clearTimeout(tStart);
            clearTimeout(tReveal);
        };
    }, []);

    const contents = {
        languages: (
            <>
                {/* <h3 className="about-subtitle">Languages</h3> */}
                <div className="language-list">
                    <LanguageList />
                </div>
            </>
        ),
        frameworks: (
            <>
                {/* <h3 className="about-subtitle">Frameworks & Databases</h3> */}
                <div className="framework-list">
                    <FrameList />
                </div>
            </>
        ),
        devtools: (
            <>
                {/* <h3 className="about-subtitle">Dev Tools</h3> */}
                <div className="dev-list">
                    <DevList />
                </div>
            </>
        )
    };

    function handleTabClick(key) {
        setActive(key);
        setPanelKey(k => k + 1); // force remount so CSS animation runs
    }

    return (
        <div className="about">
            <div className={`hero-about ${showMain ? 'show' : ''}`}>
                <h1 className="About-Me">{wrapLetters('About Me')}</h1>

                <div className="about-description">
                    My unique background gives me leverage in both technical and interpersonal skills, allowing me to adapt to various team dynamics and project requirements.
                    My interests helped me build a wide range of technical knowledge, including fullstack development, data science, and machine learning.
                </div>

                <div className="about-controls" role="tablist" aria-label="About tabs">
                    <div className="btn-group" role="group">
                        <button className={`btn ${active === 'languages' ? 'active' : ''}`} onClick={() => handleTabClick('languages')}>
                            Languages
                        </button>
                        <button className={`btn ${active === 'frameworks' ? 'active' : ''}`} onClick={() => handleTabClick('frameworks')}>
                            Frameworks & DBs
                        </button>
                        <button className={`btn ${active === 'devtools' ? 'active' : ''}`} onClick={() => handleTabClick('devtools')}>
                            Dev Tools
                        </button>
                    </div>

                    <div className="about-panel" key={panelKey} role="tabpanel" aria-live="polite">
                        {contents[active]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
