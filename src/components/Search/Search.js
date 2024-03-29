import React from 'react';
import classes from './Search.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { getALL, search } from '../../services/equipmentService';

export default function Search() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();
    const { searchTerm } = useParams();
    console.log('Search Term:', term);

    const performSearch = async () => {
        term ? navigate(`/search/${term}`) : navigate('/');
    };

    return (
        <div className={classes.container}>
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => setTerm(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' && performSearch()}
                defaultValue={searchTerm}
            />
            <button onClick={performSearch}>Search</button>
        </div>
    );
}
