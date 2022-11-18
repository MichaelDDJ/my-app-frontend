import Category from './Category';
import CategoryForm from './CategoryForm';
import JobForm from './JobForm';
import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <JobForm />
      <CategoryForm />
      <Category />
    </div>
  );
}

export default App;
