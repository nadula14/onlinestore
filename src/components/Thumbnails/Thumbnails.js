import React from 'react';
import classes from './thumbnails.module.css';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import Price from '../Price/Price';


export default function Thumbnails({ equipments }) {
  return (
    <ul className={classes.list}>
      {equipments.map(equipment => (
        <li key={equipment.id}>
          <Link to={`/equipment/${equipment.id}`}>
            <img
              className={classes.image}
              src={`/equipments/${equipment.imageUrl}`}
              alt={equipment.name}
            />
        
          <div className={classes.content}>
            <div className={classes.name}>{equipment.name}</div>
            <span 
            className={`${classes.favorite} ${
              equipment.favorite ? ' ': classes.not
              }`}
              >
              ❤️
          </span>
            
            <div className={classes.stars}>
              <StarRating stars={equipment.stars} />
            </div>
           
          <div className={classes.product_item_footer}>
         
          <div className={classes.price}>
                <Price price={equipment.price} />
              </div>

            
        
          </div>
           
           
            

          
          </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
