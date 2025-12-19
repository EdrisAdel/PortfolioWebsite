import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './index.css';
import logo from '../../images/logo.png';
import { BiSolidHome, BiSolidHomeCircle, BiFolder, BiFolderOpen, BiSolidBriefcaseAlt, BiSolidBriefcaseAlt2, BiLogoGmail, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <aside className={`sidenav ${open ? 'open' : ''}`} aria-hidden={false}>
            <button
                className="sidenav-toggle"
                onClick={() => setOpen(prev => !prev)}
                aria-expanded={open}
                aria-label="Toggle navigation"
            >
                <span className="hamburger" />
            </button>

            <div className="sidenav-inner">
                <div className="sidenav-brand">
                    <NavLink to="/" onClick={() => setOpen(false)}>
                        <img className="logo" src={logo} alt="Logo" />
                    </NavLink>
                </div>

                <nav className="sidenav-nav" role="navigation" aria-label="Main">
                    <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
                        <span className="icon icon-default"><BiSolidHome /></span>
                        <span className="icon icon-hover"><BiSolidHomeCircle /></span>
                    </NavLink>

                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
                        <span className="icon icon-default"><BiSolidBriefcaseAlt2 /></span>
                        <span className="icon icon-hover">< BiSolidBriefcaseAlt /></span>
                    </NavLink>

                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
                        <span className="icon icon-default"><BiFolder /></span>
                        <span className="icon icon-hover"><BiFolderOpen /></span>
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
                        <span className="icon icon-default"><BiLogoGmail /></span>
                        <span className="icon icon-hover"><BiLogoGmail /></span>
                    </NavLink>
                </nav>
            </div>

            <div className={`sidenav-overlay ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/EdrisAdel/">
                        <BiLogoLinkedin />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/EdrisAdel">
                        <BiLogoGithub />
                    </a>
                </li>
            </ul>
        </aside >

    );
};

export default Navbar;