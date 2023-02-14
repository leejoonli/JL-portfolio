import React from 'react';
import styles from './Projects.module.css';
import felp from './img/felp.png';
import calculator from './img/calculator.png';
import tax from './img/tax_estimator.png';
import hospital from './img/hospital.png';

function Projects() {
    return (
        <div className={styles.projectComponentContainer} id='projects'>
            <h1 className={styles.headerOne}>PROJECTS</h1>
            {/*<div className={`${styles.projectContainer} ${styles.project4}`} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}><img src={expense} alt='Expense tracker application state' className={styles.projectImg} /></div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Expense Tracker</h2>
                    <p className={`${styles.projectDesc} ${styles.projectFourDesc}`}>This application is a basic expense tracker to keep tabs on your spending.  You can create, read, update, and delete any post that you input.  The backend database is hosted on Heroku and uses Django, Python, and the Django Rest Framework.  The frontend is created using React Native and Typescript.  Follow the viewing instructions on GitHub to view and use the application.</p>
                    <div className={styles.projectLinkContainer3}>
                        <a href='https://expo.dev/@leejoonli/expense-tracker' target='_blank' rel='noreferrer' className={styles.projectLink}>Application</a>
                        <a href='https://github.com/leejoonli/expense-tracker' target='_blank' rel='noreferrer' className={styles.projectLink}>Frontend</a>
                        <a href='https://github.com/leejoonli/expense-tracker-backend' target='_blank' rel='noreferrer' className={styles.projectLink}>Backend</a>
                    </div>
                </div>
            </div>*/}
            <div className={styles.projectContainer} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.projectImgContainer}>
                    <img src={felp} alt='Application State' className={styles.projectImg} />
                </div>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>FELP</h2>
                    <p className={`${styles.projectDesc} ${styles.projectThreeDesc}`}>FELP is a blog style food review application to document the hottest spots to go to eat.  The application has full CRUD functionaliy for registered users.  Frontend created using React, Javascript, CSS, with requests handled using Axios.  Backend created with MongoDB, Mongoose, Express, with user authentication being handled by Passport.</p>
                    <div className={styles.projectLinkContainer3}>
                        {/*<a href='https://felp-official.netlify.app/' target='_blank' rel='noreferrer' className={styles.projectLink}>Application</a>*/}
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
                        {/*<a href='https://radiant-headland-38660.herokuapp.com/employees/' target='_blank' rel='noreferrer' className={styles.projectLink}>Application</a>*/}
                        <a href='https://github.com/leejoonli/Hospital-Database-ER' target='_blank' rel='noreferrer' className={styles.projectLink}>Repository</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer} data-aos='flip-left' data-aos-once='true'>
                <div className={styles.project}>
                    <h2 className={styles.projectHeader}>Calculator</h2>
                    <p className={styles.projectDesc}>Calculator application create using C#, Microsoft Visual Studio's Windows Form Template as a base, and deployed on GitHub with an executable file that can be installed on any computer.</p>
                    <div className={styles.projectLinkContainer}>
                        <a href='https://github.com/leejoonli/calculator' target='_blank' rel='noreferrer' className={styles.projectLink}>Repository</a>
                    </div>
                </div>
                <div className={styles.projectImgContainer}>
                    <img src={calculator} alt='Application State' className={styles.projectImg} />
                </div>
            </div>
        </div>
    );
}

export default Projects;