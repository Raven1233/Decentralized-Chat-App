import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from 'three';
import { useMoralis } from "react-moralis";

function Login() {

    const {authenticate} = useMoralis();

    return (
        
        <div className="bg-black relative text-white">
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center
            justify-center space-y-4">
                {/*Logo*/}
                <Image
                    className="object-cover rounded-full" 
                    src="https://www.techrepublic.com/a/hub/i/r/2021/10/12/c155a2cf-d124-4b38-a6c1-b5ca592e83bb/resize/1200x/5c4567b1da5fa23f66f8525c8785c010/metaverse-shutterstock-2031697775.jpg" 
                    height={200} 
                    width={300}
                />
                {/*Button*/}
                <button 
                    onClick={authenticate}
                    className="bg-blue-500 rounded-lg p-5 
                    font-bold animate-pulse"
                >
                    Login to the METAVERSE
                </button>

            </div>
            <div className="w-full h-screen">
                <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover"/>
            </div>
        </div>
    )
}

export default Login
