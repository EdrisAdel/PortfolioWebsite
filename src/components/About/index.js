import React, { useEffect, useState } from 'react';
import LanguageList from '../About/LanguageList';
import FrameList from '../About/FrameList';
import DevList from '../About/DevList';
import { FaJava, FaUnity, FaAws } from 'react-icons/fa';
import {
    SiPython,
    SiHtml5,
    SiMysql,
    SiC,
    SiNodedotjs,
    SiTailwindcss,
    SiMongodb,
    SiFirebase,
    SiDjango,
    SiReact,
    SiDocker,
    SiPostman,
    SiPytorch,
    SiOpencv,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import './index.css';

const About = () => {
    const [showMain, setShowMain] = useState(false);
    const [active, setActive] = useState('languages');
    const [panelKey, setPanelKey] = useState(0);

    const iconGroups = {
        languages: [<SiHtml5 />, <SiPython />, <FaJava />, <FaUnity />, <SiMysql />, <SiC />],
        frameworks: [<SiReact />, <SiNodedotjs />, <SiTailwindcss />, <SiMongodb />, <SiFirebase />, <SiDjango />],
        devtools: [<SiPostman />, <SiDocker />, <SiPytorch />, <SiOpencv />, <FaAws />, <VscAzure />],
    };

    const positionMap = {
        languages: { languages: 'front', frameworks: 'right', devtools: 'left' },
        frameworks: { frameworks: 'front', devtools: 'right', languages: 'left' },
        devtools: { devtools: 'front', languages: 'right', frameworks: 'left' },
    };

    const wrapLetters = (text) =>
        text.split('').map((ch, i) => (
            <span key={i} className="letter" style={{ '--i': i }}>
                {ch === ' ' ? '\u00A0' : ch}
            </span>
        ));

    useEffect(() => {
        const startDelay = 0;
        const moveDuration = 300;
        const revealDelay = 60;
        const tReveal = setTimeout(() => setShowMain(true), startDelay + moveDuration + revealDelay);
        return () => {
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

                <div className="about-content-split">
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

                    <aside className="icon-pillar" aria-hidden="true">
                        <div className="pillar-axis" />
                        {Object.keys(iconGroups).map((groupKey) => (
                            <div
                                key={groupKey}
                                className={`pillar-column pillar-${positionMap[active][groupKey]}`}
                            >
                                <div className="pillar-track">
                                    <div className="pillar-segment">
                                        {[...iconGroups[groupKey], ...iconGroups[groupKey]].map((iconEl, i) => (
                                            <div className="pillar-icon-cell" key={`${groupKey}-${i}`}>
                                                {iconEl}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pillar-segment" aria-hidden="true">
                                        {[...iconGroups[groupKey], ...iconGroups[groupKey]].map((iconEl, i) => (
                                            <div className="pillar-icon-cell" key={`${groupKey}-dup-${i}`}>
                                                {iconEl}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default About;
