import styles from './Content.module.css';
import NftCard from './NftCard';
import Footer from './Footer';
import nfts from './../nft/nfts';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import Ticker from 'react-ticker';

export default function Content(props) {
    const handleClick = () => {
        window.open('https://twitter.com/GetCryptoStonks', '_blank')
    };

    // Sort nfts by their mint number
    nfts.sort((a, b) => (a.number > b.number) ? 1 : -1);

    return (
        <div className={styles.fullPage}>

            <div className={styles.ticker}>
                <Ticker speed={2}>
                    {({ index }) => (<h3 className={styles.tickerItem}>${nfts[index % nfts.length].ticker}</h3>)}
                </Ticker>
            </div>

            <div className={styles.nav}>
                <IconButton aria-label="twitter" onClick={handleClick}>
                    <TwitterIcon />
                </IconButton>
            </div>

            <div className={styles.grid}>
                {nfts.map((nft, idx) => (
                    <div key={`crypto-stonks-image-${idx}`}>
                        <NftCard nft={nft} />
                    </div>
                ))}
            </div> 

            

            <Footer />       
        </div>
    );
}