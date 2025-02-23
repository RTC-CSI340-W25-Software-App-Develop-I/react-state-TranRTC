import { useState } from 'react'
import "../data/data.js"
import { data } from '../data/data.js';
function AddRestaurant({ updateRestaurants }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    cuisine: "",
    rating: ""
  });

  const handleChange = (e) => {    
    const name = e.target.name
    const value = e.target.value
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1; // calculate the sequential new id

    const newRestaurant = {
      id: newId, //Assign the calculated sequential ID
      ...formData,
    };

    console.log("New Restaurant:", newRestaurant); // Debug for verification

    // Add the new restaurant to the restaurants list
    updateRestaurants(newRestaurant);


    console.log(formData)
    //updateRestaurants(formData)
    // clear the form after submitting
    setFormData({
      name: "",
      address: "",
      phone: "",
      cuisine: "",
      rating: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Cuisine:</label>
        <input
          type="text"
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );


}

export default AddRestaurant;