import styles from './NftContainer.module.css';
import nfts from './../nft/nfts';

export default function NftContainer(props) {
    const handleClick = (nft) => {
        console.log(nft)
        window.open(nft.link, '_blank')
    };
    return (
        <div className={styles.fullPage}>
            <div className={styles.container}>
            {nfts.map((nft, idx) => (
                <div key={`crypto-stonks-image-${idx}`}
                    className={styles.nft}
                    onClick={() => handleClick(nft)}
                >
                    <img src={nft.image} alt={nft.name} />
                    <div className={styles.overlay}>
                        <div className={styles.overlayText}>I want</div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}