import React, { useState } from 'react';
import styles from './NftContainer.module.css';
import nfts from './../nft/nfts';
import TextField from '@material-ui/core/TextField';

export default function NftContainer(props) {
    console.log(nfts)
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className={styles.fullPage}>
            <div className={styles.searchContainer}>
                <TextField 
                    id="search" 
                    label="Search..." 
                    variant="outlined" 
                    size="small"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>
            <div className={styles.container}>
            {nfts.map((nft, idx) => (
                <div key={`crypto-stonks-image-${idx}`}
                    className={styles.nft}
                >
                    <img src={nft.image} atl="todo" />
                </div>
            ))}
            </div>
        </div>
       
    )
}