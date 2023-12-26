"use client"

import React, { useEffect, useState } from 'react'
import Handlers from "@/utils/Handlers"
import Table from '@/components/Table'
import PlayerStats from '@/components/common/PlayerStats'
import { Players } from '@/types/Players'
import PlayerPoints from '@/components/PlayerPoints'

const Offline = () => {

    const [players, setPlayers] = useState<Players>({ player1: "x", player2: "o" })

    return (
        <>
            <>
                <Handlers>
                    <PlayerStats players={players} setPlayers={setPlayers} />
                    <div className="flex flex-row items-center justify-center gap-5">
                        <PlayerPoints player={players.player1} points={0} nu={1}/>
                        <Table />
                        <PlayerPoints player={players.player2} points={0} nu={2}/>

                    </div>
                    <div className="flex flex-col items-center">
                        <div id="msg-box"></div>
                        <button className='bg-gray-900 shadow-gray-700 shadow-xl py-3 px-5 w-[20rem] outline-none border-none rounded-3xl text-gray-200 font-bold text-lg text-center hover:bg-opacity-90 transition-all duration-500 hidden' id="ref-btn">
                        Refresh
                    </button>
                    </div>
                </Handlers>
            </>

        </>
    )
}

export default Offline