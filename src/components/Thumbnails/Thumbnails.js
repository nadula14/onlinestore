import React from 'react';
import classes from './thumbnails.module.css';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import Price from '../Price/Price';
import Tags from '../Tags/Tags';

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
           

            <div className={classes.price}>
                <Price price={equipment.price} />
              </div>
          <div className={classes.product_item_footer}>

            <div className={classes.origins}>
              {equipment.origins?.map(origin => (
                <span key={origin}>{origin}</span>
              ))}
              </div>

          <div className={classes.tags}>
            {equipment.tags && (
              <Tags
                tags={equipment.tags.map(tag => ({ name: tag }))} 
                forEquipmentPage={true}
              />
            )}
          </div>
         
          
        
          </div>

          </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
