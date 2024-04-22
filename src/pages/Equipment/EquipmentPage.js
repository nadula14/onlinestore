// import React from 'react'
// import classes from './equipmentPage.module.css'
// import { useState,useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { getById } from '../../services/equipmentService'
// import StarRating from '../../components/StarRating/StarRating'
// import Tags from '../../components/Tags/Tags'
// import Price from '../../components/Price/Price'




// export default function EquipmentPage() {
//   const [equipment,setequipment] = useState({});
//   const {id} = useParams();

//   useEffect(() =>{
//     getById(id).then(setequipment);
// },[id]);

//   return(
//    <>
//    <div className={classes.container}>
//      <img
//       className={classes.image}
//       src={`/equipments/${equipment.imageUrl}`}
//       alt={equipment.name}
//      />

//      <div className={classes.details}>
//       <div className={classes.header}>
//         <span className={classes.name}>{equipment.name}</span>
//         <span className={`${classes.favorite} ${
//           equipment.favorite? '':classes.not
//           }`}>
//         ❤️
//         </span>     
//       </div> 
//       <div className={classes.rating}>
//         <StarRating stars = {equipment.stars} size={24}/>
//       </div>

//       <div className={classes.origins}>
//         {
//           equipment.origins?.map(origin => (
//           <span key={origin}>{origin}</span>
//         ))}
//       </div>
       
//        <div className={classes.tags}>
//         { equipment.tags &&
//            <Tags 
//            tags={equipment.tags.map( tag => ({name :tag}))} 
//             forEquipmentPage={true}
//             />
//          }
//        </div>

//        <div className={classes.price}>
//          <Price price={equipment.price}/>
//         </div>
    
//    </div>
//    </div>
//    </>

//   ); 
// }  


import React, { useState, useEffect } from 'react';
import classes from './equipmentPage.module.css';
import { useParams } from 'react-router-dom';
import { getById } from '../../services/equipmentService';
import StarRating from '../../components/StarRating/StarRating';
import Tags from '../../components/Tags/Tags';
import Price from '../../components/Price/Price';

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getById(id).then(setEquipment);
  }, [id]);

  return (
    <>
      <div className={classes.container}>
        <img
          className={classes.image}
          src={`/equipments/${equipment.imageUrl}`}
          alt={equipment.name}
        />

        <div className={classes.details}>
          <div className={classes.header}>
            <span className={classes.name}>{equipment.name}</span>
            <span className={`${classes.favorite} ${equipment.favorite ? '' : classes.not}`}>
              ❤️
            </span>
          </div>
          <div className={classes.rating}>
            <StarRating stars={equipment.stars} size={24} />
          </div>

          <div className={classes.origins}>
            {equipment.origin && <span>{equipment.origin}</span>}
          </div>

          <div className={classes.tags}>
            {equipment.tag && (
              <Tags tags={equipment.tag.map(tag => ({ name: tag }))} forEquipmentPage={true} />
            )}
          </div>

          <div className={classes.price}>
            <Price price={equipment.price} />
          </div>
 
        <button className={classes.button}>Add to cart</button>


        </div>
      </div>
    </>
  );
}
