import { Players } from '@/types/Players'
import React from 'react'

const PlayerPoints = ({ player, points, nu }: { player: string, points: number, nu: number }) => {
    return (
        <div className={`bg-gray-800 rounded-lg shadow-lg shadow-gray-700 flex flex-col min-w-[10rem] h-[10rem]`}>
            <div className="text-3xl font-extrabold text-center py-3 border-b-2 border-gray-200 capitalize text-gray-200 px-1 font-sans">
                {
                    player
                } {(nu == 1 ? "(X)" : "(O)")}
            </div>
            <div className="text-5xl text-center mt-6 text-gray-100 font-sans player-points ">
                {points}
            </div>
        </div>
    )
}

export default PlayerPoints