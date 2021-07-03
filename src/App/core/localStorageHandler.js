const key = 'YOZMA';
const visitedKey = 'YOZMA_INITIALIZED';

export const setDataToLocalStorage = (item) => {
  const notesInString = localStorage.getItem(key);
  let notes = notesInString ? JSON.parse(notesInString) : {};
  localStorage.setItem(key, JSON.stringify({
    ...notes,
    [item.id] : {
      ...item
    }
  }));
};

export const getDataFromLocalStorage = (id) => {
  return JSON.parse(localStorage.getItem(key));
};

export const getNoteFromLocalStorage = (id) => {
  const additionalNotes = JSON.parse(localStorage.getItem(key));
  return additionalNotes && additionalNotes[id] ? additionalNotes[id] : null;
};

export const isAlreadyVisited = () => {
  if (localStorage.getItem(visitedKey) === 'initialized') {
    return true
  } else {
    localStorage.setItem(visitedKey, 'initialized');
    return false
  }
};
