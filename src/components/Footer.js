import styles from './Footer.module.css';

export default function Footer() {

    return (
        <>
            <div className={styles.footer}>
                    &copy; 2021 <span className={styles.name}> CryptoStonks</span>
                <div className={styles.links}>
                    <a href="https://opensea.io/collection/cryptostonkexchange" target="_blank" rel="noreferrer">Open Sea</a>
                    
                </div>
            </div>
        </>
    );
}