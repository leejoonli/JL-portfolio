import React from 'react';
import styles from './About.module.css';
import profile from './img/profile.jpg';

function About() {
    return (
        <div className={styles.aboutContainer} id='about'>
            <img src={profile} alt='Portrait of Jeremiah' className={styles.portrait} />
            <h1 className={styles.aboutHeader}>ABOUT ME</h1>
            <p className={styles.aboutDesc}>After years of working in the Film Industry, I am making a major career shift into what I am most passionate about. I enjoy the idea that I can create anything from the tips of my fingers. Continuously learning in-demand skills and overcoming unique challenges will help me reach my goal of reinventing what could be possible in Tech.</p>
        </div>
    );
}

export default About;