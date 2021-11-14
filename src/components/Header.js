import React from 'react'

const Header = () => {
    return (
        <div>
            <h1 class="text-black text-center border-b font-montserrat font-bold text-lg p-1 bg-yellow 
                border-gray">SUMMER SALE: 15% OFF SKIPJACK TUNA</h1>

            <div class="border-b border-blue p-8">
                <div class="flex">
                    <img src="/img/logo_small.png" alt="trace_ai_logo" class= "w-27 h-12 ml-20"/>
               
                    <button class="text-blue font-bold rounded-full border-blue border-2 hover:text-white 
                    hover:bg-blue hover:border-transparent font-montserrat text-lg px-4 py-1.5 ml-auto mr-10">Log In</button>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 rounded-full border-blue border-2 mr-8 p-1" fill="none" viewBox="0 0 24 24" stroke="blue"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default Header;