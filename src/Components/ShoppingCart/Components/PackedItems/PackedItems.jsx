import React, {useState} from 'react'

import styles from './PackedItems.module.css';

function PackedItems({items, togglePacked, deleteItem, markAllUnpacked}) {

    let [searchKeyword, setSearchKeyword] = useState('');

    return (
        <div className={styles.packed__container}>

            <h1 className={styles.packed__title}>Unpacked Items ({items.filter((item) => item.packed == true).length})</h1>

            <input 
                className={styles.packed__search} 
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                type="text" 
                placeholder="Filter inside the packed items" 
            />

            <div className={styles.packed__list}>

                {
                    items.map((item, index) => (
                        item.packed == true && item.product.toLowerCase().includes(searchKeyword.toLowerCase()) &&
                            <div key={index} className={styles.packed__lis__item}>

                                <input 
                                    className={styles.packed__checkbox} 
                                    type="checkbox" 
                                    name="checkbox" 
                                    id="checkbox" 
                                    checked
                                    onChange={() => { togglePacked(index)}}
                                />

                                <p className={styles.packed__product}>{ item.product }</p>
                                <p className={styles.packed__price}>{ item.price }$</p>

                                <span 
                                    className={styles.packed__delete} 
                                    onClick={() => { deleteItem(index) }}
                                >+</span>
                            </div>
                    ))
                }
            </div>

            {
                items.filter((item) => item.packed).length > 0 ?
                    (
                        <>
                            <button className={styles.packed__markAll} onClick={() => { markAllUnpacked() }}>
                                Mark All is Unpacked
                            </button>
                            <p className={styles.packed__total}>
                                Total: {items.filter(item => item.packed == true).reduce((total, item) => total + item.price, 0)}$
                            </p>
                        </>
                    ):
                    ('')
            }

        </div>
    )
}

export default PackedItems