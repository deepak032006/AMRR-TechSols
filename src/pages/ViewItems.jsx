import React, { useState, useEffect } from 'react';
import { getItems } from '../utils/storage';
import ItemModal from '../components/ItemModal';
import ItemCard from '../components/ItemCard';

export default function ViewItems() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setItems(getItems());
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <ItemCard key={index} item={item} onClick={() => setSelected(item)} />
        ))}
      </div>
      {selected && <ItemModal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
