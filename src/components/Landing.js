import React, { useRef } from 'react';
import logo from './../logo-black.png';
import styles from './Landing.module.css';
import Button from '@material-ui/core/Button';

const moveForce = 40; // max popup movement in pixels
const rotateForce = 30; // max popup rotation in deg

export default function Landing() {
    const containerEle = useRef(null);
    const popupEle = useRef(null);

    const handleMouseMove = (e) => {
        const docX = containerEle.current.offsetWidth;
        const docY = containerEle.current.offsetHeight;
        const moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
        const moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
        const rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
        const rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
        popupEle.current.style.left = `${moveX}px`;
        popupEle.current.style.top = `${moveY}px`;
        popupEle.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const scroll = () => {
        window.scrollTo({
            top: containerEle.current.offsetHeight,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div ref={containerEle} className={styles.landing} onMouseMove={(e) => handleMouseMove(e)}>
                <div className={styles.movingZone}>
                    <div ref={popupEle} className={styles.popup}>
                        <img src={logo} className={styles.logo} alt="logo" />
                    </div>
                </div>
            </div>
            <div className={styles.scrollButton}>
                <Button variant="contained" onClick={scroll}
                    style={{
                    backgroundColor: '#5e72e4',
                    color: 'white',
                    }}>
                    Explore
                </Button>
            </div>
        </>
    );
}