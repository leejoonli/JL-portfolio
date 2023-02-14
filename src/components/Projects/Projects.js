import React from 'react';
import styles from './Projects.module.css';
import felp from './img/felp.png';
import tax from './img/tax_estimator.png';
import hospital from './img/hospital.png';
import maya from './img/maya.png';
import 'aos/dist/aos.css';

function Projects() {
    return (
        <div className={styles.projectComponentContainer} id='projects'>
            <h1 className={styles.headerOne}>PROJECTS</h1>
            <div className={styles.projectContainer} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}>
                    <img src={felp} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>FELP</h2>
                    <p className={`${styles.projectDesc} ${styles.projectThreeDesc}`}>FELP is a blog style food review application to document the hottest spots to go to eat.  The application has full CRUD functionaliy for registered users.  Frontend created using React, Javascript, CSS, with requests handled using Axios.  Backend created with MongoDB, Mongoose, Express, with user authentication being handled by Passport.</p>
                    <div className={styles.projectLinkContainer3}>
                        <a href='https://github.com/leejoonli/felp-frontend' target='_blank' rel='noreferrer' className={styles.projectLink}>Frontend</a>
                        <a href='https://github.com/leejoonli/felp-backend' target='_blank' rel='noreferrer' className={styles.projectLink}>Backend</a>
                    </div>
                </div>
            </div>
            <div className={`${styles.projectContainer} ${styles.projectTwo}`} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}>
                    <img src={tax} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Tax Estimator</h2>
                    <p className={styles.projectDesc}>A tax estimator application for the 2023 tax year based off the tax estimator on the IRS website. Made using C++, Dear ImGui, and Microsoft Visual Studio. Aimed for a streamlined approach to calculating an estimate of taxes owed for the year.</p>
                    <div className={styles.projectLinkContainer}>
                        <a href='https://github.com/leejoonli/Tax-Estimator' target='_blank' rel='noreferrer' className={styles.projectLink}>Repository</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}>
                    <img src={hospital} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Hospital Database</h2>
                    <p className={styles.projectDesc}>MVC application of a hospital database created using Python, PostgreSQL, and Django.  Capable of full CRUD functionality and implemented Django Rest Framework.</p>
                    <div className={styles.projectLinkContainer}>
                        <a href='https://github.com/leejoonli/Hospital-Database-ER' target='_blank' rel='noreferrer' className={styles.projectLink}>Repository</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Maya Pizza Plugin</h2>
                    <p className={styles.projectDesc}>Maya Plugin that opens up Domino's website.  Created using CMake, Maya API, and C++.</p>
                    <div className={styles.projectLinkContainer}>
                        <a href='https://github.com/leejoonli/pizza-api-cpp' target='_blank' rel='noreferrer' className={styles.projectLink}>Repository</a>
                    </div>
                </div>
                <div className={styles.projectImgContainer}>
                    <img src={maya} alt='Application State' className={styles.projectImg} />
                </div>
            </div>
        </div>
    );
}

export default Projects;