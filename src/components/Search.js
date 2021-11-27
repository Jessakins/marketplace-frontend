import React from 'react'

export default function Search() {
    return (
        <div class="pt-3 flex justify-between">
            <header>
                <h2 class= "text-blue font-montserrat font-bold text-xl ml-60 pt-2">Browse Products</h2>
                <h3 class= "text-black text-xs font-montserrat ml-60">Home / Products</h3>
            </header>
        
            <div class="w-72 h-10 rounded-full flex justify-between items-center border border-blue font-montserrat
            text-xs text-black px-5 my-2 mr-60">
                <input type="search" name="search" id="search" placeholder="Search for products..." class="w-full outline-none focus:outline-none active:outline-none font-semibold mr-50"/>
                <button type="submit" class="ml-1 outline-none focus:outline-none active:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" 
                    viewBox="0 0 24 24" stroke="Blue"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </button>
            </div>
        </div>
    )
}
