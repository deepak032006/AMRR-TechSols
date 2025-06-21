import React from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export default function ItemModal({ item, onClose }) {
  const handleEnquire = () => {
    alert("Email sent to deepaksharma032006@gmail.com!");
   
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose} className="bg-white p-4 rounded shadow-lg max-w-lg mx-auto mt-10">
      <button className="float-right text-red-500" onClick={onClose}>✖</button>
      <h2 className="text-xl font-bold mb-2">{item.name}</h2>
      <p className="text-gray-600">{item.type}</p>
      <p className="mt-2">{item.description}</p>
      <Carousel showThumbs={false} className="mt-4">
        {item.images.map((src, idx) => (
          <div key={idx}>
            <img src={src} alt={`img-${idx}`} className="h-60 object-contain" />
          </div>
        ))}
      </Carousel>
      <button onClick={handleEnquire} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Enquire</button>
    </Modal>
  );
}
