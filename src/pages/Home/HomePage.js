import React, { useEffect, useReducer } from 'react'
//import { getALL } from '../../services/equipmentService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import { useParams } from 'react-router-dom';
//import { search } from '../../services/equipmentService';
import Search from '../../components/Search/Search';
import { getALL, getAllTags, search,getAllByTag } from '../../services/equipmentService';
import Tags from '../../components/Tags/Tags';
import './HomePage.module.css';







const initialState = { equipments: [],tags : []};

const reducer = (state, action) => {
  switch (action.type) {
    case 'EQUIPMENTS_LOADED':
      return { ...state, equipments: action.payload };

      case 'TAGS_LOADED':
      return { ...state, tags: action.payload };
    default:
      return state;
  }
};
export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {equipments,tags} = state;
  const {searchTerm,tag} = useParams();


  
  useEffect(() => { 
    getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));
  
    const loadequipments =
      tag ? getAllByTag(tag) :
      searchTerm ? search(searchTerm) : getALL();
    
    loadequipments.then(equipments => dispatch({ type: 'EQUIPMENTS_LOADED', payload: equipments }));
  }, [searchTerm, tag]); // Include 'tag' in the dependency array
  

  return(
    
  <>
      <div className="home-page-container"> 

   <Search/>
   <Tags tags={tags}/>
   <Thumbnails equipments = {equipments}/>
   </div>
  </>
  );
}
