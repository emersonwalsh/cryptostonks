import twtr from './images/twtr.png';
import shop from './images/shop.png';
import amzn from './images/amzn.png';
import tsla from './images/tsla.png';
import nflx from './images/nflx.png';
import fb from './images/fb.png';
import msft from './images/msft.png';


const nfts = [
    {
        name: 'Twitter',
        ticker: 'TWTR',
        status: 'available',
        price: 64,
        image: twtr,
    },
    {
        name: 'Shopify',
        ticker: 'SHOP',
        status: 'available',
        price: 1539,
        image: shop,
    },
    {
        name: 'Tesla',
        ticker: 'TSLA',
        status: 'available',
        price: 708,
        image: tsla,
    },
    {
        name: 'Amazon',
        ticker: 'AMZN',
        status: 'available',
        price: 3306,
        image: amzn,
    },
    {
        name: 'Netflix',
        ticker: 'NFLX',
        status: 'available',
        price: 10,
        image: nflx,
    },
    {
        name: 'Facebook',
        ticker: 'FB',
        status: 'available',
        price: 10,
        image: fb,
    },
    {
        name: 'Microsoft',
        ticker: 'MSFT',
        status: 'available',
        price: 10,
        image: msft,
    },
];

export default nfts;