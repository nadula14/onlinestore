import { sample_equipments, sample_tags } from "../data";

export const getALL  = async () => sample_equipments;

export const search = async searchTerm => 
  sample_equipments.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

export const getAllTags = async () =>sample_tags;

export const getAllByTag = async tag => {
  if (tag === 'All') return getALL();
  return sample_equipments.filter(equipment => 
    equipment.tags?.includes(tag)
  );
}

export const getById = async equipmentId => 
  sample_equipments.find(equipment => equipment.id === equipmentId);    