import React from "react";
import Header from './components/Header';

function App() {
  return (
    
    <div className="App">
      <Header/>
      
      <div class="container">
        <h2 class= "text-blue font-montserrat font-bold text-xl ml-60 pt-5">Browse Products</h2>
        <h3 class= "text-black text-xs font-montserrat ml-60">Home / Products</h3>

        <button class="text-black text-xs font-montserrat rounded-full border-blue border-2 px-7">
          Search for products...
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </button>
      </div>
    </div>
  );
}

export default App;
