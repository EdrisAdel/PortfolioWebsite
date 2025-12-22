import React, { useEffect, useState } from 'react';
import './index.css';

const Home = () => {
    const [moved, setMoved] = useState(false);
    const [showMain, setShowMain] = useState(false);

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

    const wrapLetters = (text) =>
        text.split('').map((ch, i) => (
            <span key={i} className="letter" style={{ ['--i']: i }}>
                {ch === ' ' ? '\u00A0' : ch}
            </span>
        ));

    return (
        <>
            <div className="home">
                {/* hero-stack: left-aligned column for Hi / I'm Edris / subtitle */}
                <div className={`hero-home fade-transition ${showMain ? 'show' : ''}`}>
                    <h1 className="hi">{wrapLetters('Hi,')}</h1>
                    <h1 className={`main-heading ${moved ? 'move-left' : ''}`}>{wrapLetters("I'm Edris")}</h1>
                    <p className="Subtitle">Computer Science + Minor in Fin. Math Wilfrid Laurier University 2027</p>
                    <a href="https://git.io/typing-svg"><img className="typing-svg" src="https://readme-typing-svg.demolab.com?font=Segoe+UI&size=32&duration=3000&pause=750&color=FFFFFF&width=625&height=60&lines=%3E+Software+Engineer;%3E+Co-Founder+of+Dribbl;%3E+Learning+about+AWS%2C+PostgreSQL;%3E+Interested+in+AI%2C+ML%2C+and+Data+Science" alt="Typing SVG" /></a>
                </div>
                <div className={`myface-container ${showMain ? 'show' : ''}`}>
                    <img src={require('../../images/myface.jpeg')} alt="Edris Adel" />
                </div >
                {/* slideshow
                <div className="slideshow-container">
                    <Slideshow images={slides} interval={3500} transition={1000} />
                </div> */}
            </div>
        </>

    );
};

export default Home;