import React from 'react'

export default function Products() {
    return (
        <div class="font-montserrat grid grid-cols-4 justify-items-end ml-80 px-20 pb-20">
            <div class="pb-5">
                <img src="/img/1.jpg" alt="ytuna" class="w-32 h-32 sm:h-48 rounded-xl"/>
                <div>
                    <span class="font-bold text-blue">Yellowfin Tuna </span>
                    <span class="block font-semibold text-xs">₱380.00/kilo</span>
                </div>
            </div>

            <div class="relative">
                <img src="/img/2.jpg" alt="stuna" class="w-32 h-32 sm:h-48 rounded-xl"/>
                <div>
                    <span class="font-bold text-blue">Skipjack Tuna </span>
                    <span class="block font-semibold text-xs">₱603.50/kilo</span>
                </div>
                <div class="bg-yellow text-black text-xs font-semibold rounded p-1 absolute top-3 ml-2 mt-2">
                    <span> 15% off </span>
                </div>
            </div>

            <div>
                <img src="/img/3.jpg" alt="ytuna" class="w-32 h-32 sm:h-48 rounded-xl"/>
                <div>
                    <span class="font-bold text-blue">Yellowfin Tuna </span>
                    <span class="block font-semibold text-xs">₱380.00/kilo</span>
                </div>
            </div>

            <div>
                <img src="/img/4.jpg" alt="stuna" class="w-32 h-32 sm:h-48 rounded-xl"/>
                <div>
                    <span class="font-bold text-blue">Skipjack Tuna </span>
                    <span class="block font-semibold text-xs">₱710.00/kilo</span>
                </div>
            </div>

            <div>
                <img src="/img/1.jpg" alt="ytuna" class="w-32 h-32 sm:h-48 rounded-xl"/>
                <div>
                    <span class="font-bold text-blue">Yellowfin Tuna </span>
                    <span class="block font-semibold text-xs">₱380.00/kilo</span>
                </div>
            </div>

            <div>
                <img src="/img/2.jpg" alt="stuna" class="w-32 h-32 sm:h-48 object-cover rounded-xl"/>
                <div>
                    <span class="font-bold text-blue">Skipjack Tuna </span>
                    <span class="block font-semibold text-xs">₱710.00/kilo</span>
                </div>
            </div>

            <div>
                <img src="/img/3.jpg" alt="ytuna" class="w-32 h-32 sm:h-48 object-cover rounded-xl"/>
                <div>
                    <span class="font-bold text-blue">Yellowfin Tuna </span>
                    <span class="block font-semibold text-xs">₱380.00/kilo</span>
                </div>
            </div>

            <div>
                <img src="/img/4.jpg" alt="stuna" class="w-32 h-32 sm:h-48 object-cover rounded-xl"/>
                <div>
                    <span class="font-bold text-blue text-sm">Skipjack Tuna </span>
                    <span class="block font-semibold text-xs">₱710.00/kilo</span>
                </div>
            </div>
        </div>
    )
}