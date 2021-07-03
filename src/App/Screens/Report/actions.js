import { getDataFromLocalStorage } from '../../core/localStorageHandler'

export const addAdditionalData =(mainData) => {
  if (!mainData.length) return [];
  const additionalData = getDataFromLocalStorage();

  if (!additionalData) return mainData;
  return [...mainData.map(item => {
    if (additionalData[item.id.toString()]) {
      return {...item, ...additionalData[item.id.toString()]}
    } else {
      return item
    }
  })]
};
