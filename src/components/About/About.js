import React from 'react';
import styles from './About.module.css';
import profile from './img/profile.jpg';

function About() {
    return (
        <div className={styles.aboutContainer} id='about'>
            <img src={profile} alt='Portrait of Jeremiah' className={styles.portrait} />
            <h1 className={styles.aboutHeader}>ABOUT ME</h1>
            <p className={styles.aboutDesc}>Technology is ever-growing and advancing in our world. Striving to incorporate: accessibility, reliable applications, and improved user experience.</p>
        </div>
    );
}

export default About;