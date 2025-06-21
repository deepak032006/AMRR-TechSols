import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addItem } from '../utils/storage';

export default function AddItem() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: '',
    images: [],
  });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      const fileArr = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData(prev => ({ ...prev, images: fileArr }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setSuccess(true);
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Add New Item</h1>

      <input
        name="name"
        placeholder="Item Name"
        required
        className="w-full p-2 border rounded"
        onChange={handleChange}
      />

      <input
        name="type"
        placeholder="Item Type (Shirt, Shoes, etc.)"
        required
        className="w-full p-2 border rounded"
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Item Description"
        required
        className="w-full p-2 border rounded"
        onChange={handleChange}
      />

      <input
        name="coverImage"
        placeholder="Cover Image URL"
        required
        className="w-full p-2 border rounded"
        onChange={handleChange}
      />

      {/* Preview of cover image */}
      {formData.coverImage && (
        <div className="mt-2">
          <p className="text-sm text-gray-500">Cover Image Preview:</p>
          <img
            src={formData.coverImage}
            alt="Cover Preview"
            className="w-full h-48 object-contain border rounded mt-1"
          />
        </div>
      )}

      {/* Additional Images Upload */}
      <div>
        <label className="block mb-1 font-medium">Upload Additional Images</label>
        <div className="border-2 border-dashed border-gray-400 p-4 rounded bg-gray-50">
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            className="w-full"
            onChange={handleChange}
          />
          <p className="text-sm text-gray-500 mt-1">You can select multiple images.</p>
        </div>

        {/* Previews */}
        {formData.images.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {formData.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`preview-${idx}`}
                className="w-full h-24 object-contain border rounded"
              />
            ))}
          </div>
        )}
      </div>

      <button className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700 transition">
        Add Item
      </button>

      {success && (
        <p className="text-green-600 text-center mt-2">Item successfully added!</p>
      )}
    </form>
  );
}
