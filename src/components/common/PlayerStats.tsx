import { Players } from '@/types/Players'
import React, { useState } from 'react'
import PlayerPoints from '../PlayerPoints'



const PlayerNames = ({ players, setPlayers }: { players: Players, setPlayers: any }) => {

    const [hidden, setHidden] = useState(false)
    const handleStartClick = () => {
        setHidden(true)
    }


    return (
        <>
            
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-[#B9B4C7] rounded-2xl shadow-2xl shadow-gray-500 bg-opacity-60 backdrop-blur-md ${hidden ? "hidden" : "flex"} flex-col items-center justify-center py-4 `}
            >
                <div className="flex flex-row items-center justify-center gap-3 w-full h-full">

                    <div className="flex flex-col items-center justify-around w-[40%] py-20 pl-5 border-r-2 border-gray-600 h-[90%]">
                        <div className="text-gray-800 font-extrabold text-6xl font-sans tracking-wide my-4">
                            Player 1
                        </div>
                        <div className="">
                            <input type="text" className='bg-gray-900 shadow-xl shadow-gray-700 py-3 px-5 w-[20rem] outline-none border-none rounded-3xl text-gray-200 font-bold text-lg text-center  hover:bg-opacity-90 transition-all duration-500' value={players.player1} onChange={(e) => setPlayers((prev: Players) => ({ player1: e.target.value, player2: prev.player2 }))} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-around w-[40%] py-20 pr-5 border-l-2 border-gray-600 h-[90%]">
                        <div className="text-gray-800 font-extrabold text-6xl font-sans tracking-wide my-4">
                            Player 2
                        </div>
                        <div className="">
                            <input type="text" className='bg-gray-900 shadow-gray-700 shadow-xl py-3 px-5 w-[20rem] outline-none border-none rounded-3xl text-gray-200 font-bold text-lg text-center hover:bg-opacity-90 transition-all duration-500' value={players.player2} onChange={(e) => setPlayers((prev: Players) => ({ player2: e.target.value, player1: prev.player1 }))} />
                        </div>
                    </div>
                </div>
                <div className="">
                    <button className='bg-gray-900 shadow-gray-700 shadow-xl py-3 px-5 w-[20rem] outline-none border-none rounded-3xl text-gray-200 font-bold text-lg text-center hover:bg-opacity-90 transition-all duration-500' onClick={() => handleStartClick()}>
                        Start Game
                    </button>
                </div>

            </div>
        </>
    )
}

export default PlayerNames