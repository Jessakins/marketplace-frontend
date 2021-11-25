import React from 'react'

export default function Header () {
    return (
            <div>
                <h1 class="text-black text-center border-b font-montserrat font-bold text-lg p-1 bg-yellow 
                border-gray">SUMMER SALE: 15% OFF SKIPJACK TUNA</h1>

                <div class="border-b border-blue p-8">
                    <div className="flex">
                        <img src="/img/logo_small.png" alt="trace_ai_logo" class= "w-25 h-16 ml-20"/>
               
                        <button class="text-blue text-2xl font-bold rounded-full border-blue border-2 hover:text-white 
                        hover:bg-blue hover:border-transparent font-montserrat px-5 ml-auto mr-5">Log In</button>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-12 px-2 py-2 rounded-full border-blue border-2" fill="none" viewBox="0 0 24 24" stroke="blue"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                </div>
            </div>
        
    )
}

