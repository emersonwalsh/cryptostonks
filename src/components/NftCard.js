import styles from './NftCard.module.css';
import Button from '@material-ui/core/Button';

export default function NftCard(props) {
    const handleClick = () => {
        window.open(props.nft.link, '_blank')
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                    <img src={props.nft.image} alt={props.nft.name} />
                </div>
                <div className={styles.cardBack}>
                    <p className={styles.name} >{props.nft.name}</p>
                    {props.nft.link && 
                        <Button variant="contained" onClick={handleClick}
                          style={{
                            // backgroundColor: props.nft.color || '#000000',
                            backgroundColor: '#5e72e4',
                            color: 'white',
                            }}>
                            Buy
                        </Button>
                    }
                    {!props.nft.link && 
                        <p className={styles.comingSoon} >Coming soon</p>
                    }
                </div>
            </div>
        </div>
    );
}