import React, {useState} from 'react'

import styles from './UnpackedItems.module.css';

function UnpackedItems({items, togglePacked, deleteItem}) {

    let [searchKeyword, setSearchKeyword] = useState('');

    return (
        <div className={styles.unpacked__container}>

            <h1 className={styles.unpacked__title}>Unpacked Items ({items.filter((item) => item.packed != true).length})</h1>

            <input 
                className={styles.unpacked__search} 
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                type="text" 
                placeholder="Filter inside the unpacked items" 
            />

            <div className={styles.unpacked__list}>

                {
                    items.map((item, index) => (
                        item.packed != true && item.product.toLowerCase().includes(searchKeyword.toLowerCase()) &&
                            <div key={index} className={styles.unpacked__lis__item}>

                                <input 
                                    className={styles.unpacked__checkbox} 
                                    type="checkbox" 
                                    name="checkbox" 
                                    id="checkbox" 
                                    onChange={() => { togglePacked(index)}}
                                />

                                <p className={styles.unpacked__product}>{ item.product }</p>
                                <p className={styles.unpacked__price}>{ item.price }$</p>

                                <span 
                                    className={styles.unpacked__delete} 
                                    onClick={() => { deleteItem(index) }}
                                >+</span>
                            </div>
                    ))
                }
            </div>

        </div>
    )
}

export default UnpackedItems