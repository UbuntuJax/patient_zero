// import React, { useState, useEffect } from "react";
// import getBreakfastMockData from "./test/mocks/breakfastMockData";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import CreatePage from "./component/CreatePage";

// import "./assets/styles/main.css";
// import "./assets/styles/App.css";

// /**
//  * Renders a table row for a breakfast item with its details and an input field for quantity.
//  * @param {Object} props - The props passed to the component.
//  * @param {Object} props.formData - Contains data for a breakfast item.
//  * @param {Boolean} props.imageExists - Indicates whether the image for the breakfast item exists.
//  * @param {Function} props.handleChange - Event handler for input change.
//  * @param {Function} props.handleClick - Event handler for button click.
//  * @returns {JSX.Element} JSX element representing the table row.
//  */

// function FormComponent({ formData, imageExists, handleChange, handleClick }) {
//     const [number, setNumber] = useState("");
//     const handleInputChange = (event) => {
//         const value = event.target.value.replace(/\D/g, "");
//         setNumber(value);
//         handleChange(event);
//     };

//     return (
//         <tr key={formData.id}>
//             <td>{formData.name}</td>
//             <td>{formData.colour}</td>
//             <td>
//                 <div>${formData.pricePerKg}</div>
//                 <div>
//                     <input
//                         type="text"
//                         value={number}
//                         onChange={handleInputChange}
//                         placeholder="Enter a number (grams)"
//                     />
//                 </div>
//                 <div>Total Price: ${(formData.pricePerKg * number) / 1000}</div>
//             </td>
//             <td>
//                 {imageExists && (
//                     <img
//                         src={"/" + formData.name + ".png"}
//                         alt="file not found"
//                     ></img>
//                 )}
//             </td>
//         </tr>
//     );
// }

// /**
//  * Main component of the application that manages the state and functionality.
//  * @returns {JSX.Element} JSX element representing the main container of the application with buttons and a table to display breakfast item data.
//  */

// function App() {
//     const [number, setNumber] = useState("");
//     const [formDataList, setFormDataList] = useState([]);
//     const [imageExists, setImageExists] = useState(true);
//     const [makeTable, setMakeTable] = useState(false);
//     const [counter, setCounter] = useState(1);

//     useEffect(() => {
//         const runHandleClick = () => {
//             if (formDataList.length < 5) {
//                 updateCounter();
//                 console.log("counter", counter);

//                 const data = getBreakfastMockData(counter);
//                 console.log("data:", data);

//                 handleClick(data);
//             }
//         };

//         runHandleClick();
//         console.log("formDataList", formDataList);

//         return () => {};
//     }, [formDataList]);

//     /**
//      * Updates the counter value cyclically from 1 to 5.
//      */

//     function updateCounter() {
//         if (counter === 5) {
//             setCounter(1);
//         } else {
//             setCounter(counter + 1);
//         }
//     }

//     /**
//      * Sends a POST request to the server with breakfast item data and updates the formDataList state.
//      * @param {Object} bodyData - The data to be sent in the request body.
//      */

//     function handleClick(bodyData) {
//         fetch("https://localhost:7089/breakfasts", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(bodyData),
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 } else {
//                     response.json().then((json) => {
//                         setFormDataList([...formDataList, json]);
//                     });
//                 }
//             })
//             .catch((error) => {
//                 console.error(
//                     "There was a problem with your fetch operation:",
//                     error
//                 );
//             });
//     }

//     /**
//      * Toggles the makeTable state to show/hide the table.
//      */
//     function generateTable() {
//         setMakeTable(!makeTable);
//     }

//     /**
//      * Handles changes in the quantity input field.
//      * @param {Object} event - The event object.
//      */
//     const handleChange = (event) => {
//         const value = event.target.value.replace(/\D/g, "");
//         setNumber(value);
//     };

//     return (
//         <div className="container">
//             <h1 className="title">HTTP Request</h1>
//             <button className="btn" onClick={generateTable}>
//                 Make Table
//             </button>
//             <Link to="/create-product">Create Page</Link>
//             <Routes>
//                 <Route path="/create-product" element={<CreatePage />} />
//             </Routes>
//             {makeTable && (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Colour</th>
//                             <th>Price Per Kg</th>
//                             <th>Image</th>
//                         </tr>
//                     </thead>
//                     <th>Image</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {formDataList.map((formData) => (
//                             <FormComponent
//                                 key={formData.id}
//                                 formData={formData}
//                                 imageExists={imageExists}
//                                 handleChange={handleChange}
//                                 handleClick={handleClick}
//                             />
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }

// export default App;
