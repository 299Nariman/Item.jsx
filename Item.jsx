import React, { useEffect, useState } from 'react';
import styles from './Item.module.css';

const Item = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then(res => res.json())
      .then(data => setBooks(data.slice(0, 6)))
      .catch(err => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className={styles.container}>
      {books.map((book) => (
        <div key={book.id} className={styles.card}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={book.image} alt={book.title} />
          </div>
          <h3 className={styles.title}>{book.title}</h3>
          <p className={styles.price}>${book.price}</p>
          <div className={styles.buttons}>
            <button className={styles.btn}>Add to Basket</button>
            <button className={styles.btn}>Add to Wishes</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
