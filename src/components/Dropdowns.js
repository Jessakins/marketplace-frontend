import React from 'react'

export default function Dropdowns() {
    return (
        <div className="font-montserrat ml-60 mt-10 align-bottom ">
            <h1 class="text-sm text-gray font-semibold pb-2">Type</h1>
            
            <div class="relative inline-flex pb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute top-0 right-0 m-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="Blue">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <select class="border border-blue rounded-lg text-blue h-10 pl-5 pr-10 focus:outline-none appearance-none">
                <option>Choose</option>
                <option>Yellowfin Tuna</option>
                <option>Skipjack Tuna</option>
                <option>Albacore Tuna</option>
                <option>Bluefin Tuna</option>
              </select>
            </div>

            <h1 class="text-sm text-gray font-semibold pb-2">Location</h1>
            
            <div class="relative inline-flex pb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute top-0 right-0 m-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="Blue">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <select class="border border-blue rounded-lg text-blue h-10 pl-5 pr-10 focus:outline-none appearance-none">
                <option class= "text-semibold text-blue">Choose</option>
                <option>Nueva Ecija</option>
                <option>Quezon City</option>
                <option>Muntinlupa</option>
                <option>Bacolod City</option>
              </select>
            </div>

            <h1 class="text-sm text-gray font-semibold pb-2">Distributor</h1>
            
            <div class="relative inline-flex pb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute top-0 right-0 m-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="Blue">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <select class="border border-blue rounded-lg text-blue h-10 pl-5 pr-10 focus:outline-none appearance-none">
                <option class= "text-semibold text-blue">Choose</option>
                <option>ABC Company</option>
                <option> - </option>
                <option> - </option>
                <option> - </option>
              </select>
            </div>

            <h1 class="text-sm text-gray font-semibold pb-2">Price Range</h1>
            
        </div>
    )
}
