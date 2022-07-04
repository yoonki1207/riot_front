import React, { useEffect, useState } from "react";
import { getSummonerDTO } from "../../Riot";

export const Main = () => {
    const [summonerName, setSummonerName] = useState<string>('');

    useEffect(() => {
        document.getElementById('suminput')?.classList.remove('w-0');
        document.getElementById('suminput')?.classList.add('w-64');
    }, [])

    const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        if(e.key == 'Enter') {
            getSummonerDTO(summonerName);
        }
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center rounded-lg bg-slate-200 w-96 h-32">
                <h1 className="text-gray-700 m-2 text-xl font-bold">League of Legends Statistics</h1>
                <div className="w-64">
                    <input id="suminput"
                    className="
                    bg-gray-100 w-0 text-2xl text-center caret-transparent m-2
                    font-bold
                    transition-all ease-in-out duration-500"
                     type="text" name="summonerName"
                     placeholder="소환사 이름" 
                     value={summonerName} 
                     onKeyDown = {onKeyDown}
                     onChange={(e) => setSummonerName(e.target.value)}/> {/**정확히..뭐지? */}
                </div>
            </div>
        </div>
    );
}