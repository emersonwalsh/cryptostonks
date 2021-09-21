import aapl from '/images/AAPL.png';
import amzn from '/images/AMZN.png';
import baba from '/images/BABA.png';
import brk from '/images/BRK.A.png';
import cmcs from '/images/CMCS.A.png';
import dis from '/images/DIS.png';
import fb from '/images/FB.png';
import goog from '/images/GOOG.png';
import hd from '/images/HD.png';
import jnj from '/images/JNJ.png';
import msft from '/images/MSFT.png';
import nvda from '/images/NVDA.png';
import pg from '/images/PG.png';
import t from '/images/T.png';
import tsla from '/images/TSLA.png';
import twtr from '/images/TWTR.png';
import unh from '/images/UNH.png';
import v from '/images/V.png';
import vz from '/images/VZ.png';
import wmt from '/images/WMT.png';

const nfts = [
    {
        name: 'Apple',
        ticker: 'AAPL',
        number: 2,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: aapl,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837571771430600705',
    },
    {
        name: 'Amazon',
        ticker: 'AMZN',
        number: 5,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: amzn,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837575069965484033',
    },
    {
        name: 'Alibaba',
        ticker: 'BABA',
        number: 16,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: baba,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837587164593389569',
    },
    {
        name: 'Berkshire Hathaway',
        ticker: 'BRK.A',
        number: 8,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: brk,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837578368500367361',
    },
    {
        name: 'Comcast Corporation',
        ticker: 'CMCS.A',
        number: 20,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: cmcs,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837591562639900673',
    },
    {
        name: 'Disney',
        ticker: 'DIS',
        number: 19,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: dis,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837590463128272897',
    },
    {
        name: 'Facebook',
        ticker: 'FB',
        number: 6,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: fb,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837576169477111809',
    },
    {
        name: 'Google',
        ticker: 'GOOG',
        number: 4,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: goog,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837573970453856257',
    },
    {
        name: 'Home Depot',
        ticker: 'HD',
        number: 17,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: hd,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837588264105017345',
    },
    {
        name: 'Johnson & Johnson',
        ticker: 'JNJ',
        number: 11,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: jnj,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837581667035250689',
    },
    {
        name: 'Microsoft',
        ticker: 'MSFT',
        number: 3,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: msft,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837572870942228481',
    },
    {
        name: 'Nvidia',
        ticker: 'NVDA',
        number: 9,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: nvda,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837579468011995137',
    },
    {
        name: 'Procter & Gamble',
        ticker: 'PG',
        number: 18,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: pg,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837589363616645121',
    },
    {
        name: 'AT&T',
        ticker: 'T',
        number: 15,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: t,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837586065081761793',
    },
    {
        name: 'Tesla',
        ticker: 'TSLA',
        number: 7,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: tsla,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837577268988739585',
    },
    {
        name: 'Twitter',
        ticker: 'TWTR',
        number: 1,
        status: 'available',
        color: '#02a2f5',
        price: 64,
        image: twtr,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837570671918972929',
    },
    {
        name: 'UnitedHealth Group',
        ticker: 'UNH',
        number: 13,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: unh,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837583866058506241',
    },
    {
        name: 'Visa',
        ticker: 'V',
        number: 10,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: v,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837580567523622913',
    },
    {
        name: 'Verizon Communications',
        ticker: 'VZ',
        number: 14,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: vz,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837584965570134017',
    },
    {
        name: 'Walmart',
        ticker: 'WMT',
        number: 12,
        status: 'available',
        color: '#02a2f5',
        price: 100,
        image: wmt,
        link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101462779711471559355842706816510431388383555282882010510359837582766546878465',
    },
];

export default nfts;