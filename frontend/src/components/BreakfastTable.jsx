import React, { useState } from "react";
import '../assets/styles/BreakfastTable.css';


const BreakfastTableRow = ({ formData }) => {
  const [quantity, setQuantity] = useState("");
  const handleInputChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    setQuantity(value);
  };

  const getImageSource = () => {
    try {
      const imageSource = require(`./assets/images/${formData.name}.png`);
      return imageSource;
    } catch (error) {
      const defaultImageSource = require('../assets/images/defaultCheeseImage.png');
      return defaultImageSource;
    }
  };

  return (
    <tr key={formData.id}>
      <td>{formData.name}</td>
      <td>{formData.colour}</td>
      <td>
        <div>${formData.pricePerKg}</div>
        <div>
          <input
            type="text"
            value={quantity}
            onChange={handleInputChange}
            placeholder="Enter a number (grams)"
          />
        </div>
        <div>Total Price: ${(formData.pricePerKg * quantity) / 1000}</div>
      </td>
      <td>
        <img src={getImageSource()} alt={formData.name} />
      </td>
    </tr>
  );
};

const BreakfastTable = ({ formDataList }) => {
  const [showTable, setShowTable] = useState(false);
  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <>
      <button className="btn" onClick={toggleTable}>
        {showTable ? 'Hide Products' : 'Show Products'}
      </button>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Colour</th>
              <th>Price Per Kg</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {formDataList.map((formData) => (
              <BreakfastTableRow key={formData.id} formData={formData} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default BreakfastTable;