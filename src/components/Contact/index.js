import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [submitting, setSubmitting] = useState(false);
    const [showMain, setShowMain] = useState(false); // NEW
    const [moved, setMoved] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: '', message: '' });
        setSubmitting(true);

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'edd8eab8-952a-4d83-9a6a-75bbadb9bdfe',
                    ...formData,
                }),
            });

            const data = await res.json();
            if (data.success) {
                setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Network error. Please try again later.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="contact-page">

            <div className={`contact-hero fade-transition ${showMain ? 'show' : ''}`}>
                <h1 className="contact-title">{wrapLetters('Contact Me')}</h1>
                <p className='thankyou'>
                    Thank you for your interest to reach out!<br /><br />
                    It may not be much but I deeply appreciate every inquiry, message, or connection opportunity.<br />
                    Please don't hesitate to reach out to me by filling out the contact form! <br />
                    <a className="mailicon" target="_blank" rel="noreferrer" href="mailto:edrisadel64@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a className="linkedinicon" target="_blank" rel="noreferrer" href="https://linkedin.com/in/edrisadel">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </p>
            </div>


            <form
                className={`contact-form fade-transition ${showMain ? 'show' : ''}`}
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <div className="field-row">
                    <div className="field-name field">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="new-name"
                            required
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="field-email field">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="new-email"
                            required
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field-subject field">
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>

                <div className="field-message field">
                    <textarea
                        id="message"
                        name="message"
                        type="text"
                        rows="4"
                        required
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <button className="contact-submit" type="submit" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send Message'}
                </button>

                {status.message && (
                    <p className={`contact-status ${status.type}`}>{status.message}</p>
                )}
            </form>
        </div>
    );
};

export default Contact;