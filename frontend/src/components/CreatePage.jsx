/**
 * Component for creating breakfast items.
 * This component includes a form with fields for entering the name, color, and price per kg of a breakfast item.
 * Upon submission, the form data is sent to a server endpoint.
 * If the submission is successful, the form is reset.
 * If there's an error during submission, it's logged to the console.
 *
 * @component
 * @example
 * // Usage:
 * import CreatePage from './CreatePage';
 * const App = () => {
 *   return (
 *     <div>
 *       <CreatePage />
 *     </div>
 *   );
 * }
 * @returns {JSX.Element} The JSX element representing the CreatePage component.
 */

import React, { useState } from "react";

function CreatePage() {
    const [formData, setFormData] = useState({
        name: "",
        color: "",
        pricePerKg: "",
    });

    // handling form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const response = fetch("https://localhost:7089/breakfasts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            // Handle success, e.g., show a success message
            console.log("Form submitted successfully");

            // Reset the form after successful submission
            setFormData({
                name: "",
                color: "",
                pricePerKg: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="color">Color:</label>
                <input
                    type="text"
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="pricePerKg">Price per kg:</label>
                <input
                    type="number"
                    id="pricePerKg"
                    name="pricePerKg"
                    value={formData.pricePerKg}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default CreatePage;
