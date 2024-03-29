import React from 'react'
import classes from './tags.module.css'
import { Link } from 'react-router-dom'

export default function Tags({tags, forEquipmentPage}) {
  return (
    <div className={classes.container}
    style={{
        justifyContent: forEquipmentPage ? 'start' : 'center'  
    }}>

    {
        tags.map(tag =>
            <Link key={tag.Name} to={`/tag/${tag.Name}`}>
                {tag.name}
                {!forEquipmentPage && `(${tag.count})`}
            </Link>
        )}
    </div>
  );
}
