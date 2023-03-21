import React, { useState } from 'react'

import styles from './ShoppingCart.module.css';

import UnpackedItems from './Components/UnpackedItems/UnpackedItems';
import PackedItems from './Components/PackedItems/PackedItems';

function ShoppingCart() {

    let [list, setList] = useState([
        { product: "item1", price: 100, packed: false },
        { product: "item2", price: 200, packed: true },
        { product: "item3", price: 300, packed: false },
        { product: "item4", price: 400, packed: true },
        { product: "item5", price: 500, packed: false },
    ]);
    let [newItem, setNewItem] = useState({ product: '', price: 0, packed: false });

    function submitNewItem(e) {

        e.preventDefault();

        if (newItem.product.trim != "" && newItem.price > 0) {
            setList([...list, newItem]);
            setNewItem({ product: '', price: 0 });
            console.log(list);
        }
    }

    let togglePacked = (index) => { 
        const newItems = [...list]; 
        newItems[index].packed = !newItems[index].packed; 
        setList(newItems); 
    };

    let deleteItem = (index) => {
        const newItems = [...list]; 
        newItems.splice(index, 1); 
        setList(newItems);
        console.log(newItems)
    }

    let markAllUnpacked = () => {
        const newItems = [...list]; 
        newItems.forEach(item => {
            item.packed = false;
        });
        setList(newItems);
    }

    return (
        <div className={styles.shopping__cart__container}>

            <div className={styles.shopping__cart__body}>

                <form className={styles.shopping__cart__form} onSubmit={(e) => { submitNewItem(e) }}>

                    <input
                        className={styles.shopping__cart__form__product}
                        type="text"
                        placeholder="Product"
                        value={newItem.product}
                        onChange={(e) => { setNewItem({ ...newItem, product: e.target.value }) }}
                    />

                    <input
                        className={styles.shopping__cart__form__price}
                        type="number"
                        placeholder="Price"
                        value={newItem.price}
                        onChange={(e) => { setNewItem({ ...newItem, price: e.target.value }) }}
                    />

                    <input
                        className={styles.shopping__cart__form__submit}
                        type="submit"
                        value="Add"
                    />

                </form>

                <UnpackedItems items={list} togglePacked={togglePacked} deleteItem={deleteItem}/>
                <PackedItems items={list} togglePacked={togglePacked} deleteItem={deleteItem} markAllUnpacked={markAllUnpacked}/>

            </div>

        </div>
    )
}

export default ShoppingCart;