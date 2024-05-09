import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BreakfastTable from './components/BreakfastTable';
import CreatePage from './components/CreatePage';
import getBreakfastMockData from './utils/breakfastMockData';
import './assets/styles/main.css';
import './assets/styles/App.css';

function App() {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataPromises = [1, 2, 3, 4, 5].map(async (id) => {
        const data = await getBreakfastMockData(id);
        return data;
      });

      const allData = await Promise.all(dataPromises);
      const fetchedData = await Promise.all(allData.map(handleClick));
      setFormDataList(fetchedData);
    };

    fetchData();
  }, []);

  const handleClick = async (bodyData) => {
    try {
      const response = await fetch('https://localhost:7089/breakfasts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      return json;
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Cheese Store</h1>
      <Link to="/create-product">Create Product</Link>
      <Routes>
        <Route path="/create-product" element={<CreatePage />} />
      </Routes>
      <BreakfastTable formDataList={formDataList} />
    </div>
  );
}

export default App;