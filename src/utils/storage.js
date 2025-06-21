export const getItems = () => {
  return JSON.parse(localStorage.getItem('items') || '[]');
};

export const addItem = (item) => {
  const items = getItems();
  localStorage.setItem('items', JSON.stringify([...items, item]));
};
