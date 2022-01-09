import {useMoralis} from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {

    const {user}= useMoralis();

    return (
        <div className="sticky top-0 p-5 z-50 bg-black 
        shadow-sm text-yellow-500 border-b-2 border-yellow-700 opacity-80">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid 
                border-pink-500 border-4 rounded-full">
                    <Image 
                        layout="fill" 
                        objectFit="cover"
                        className="rounded-full"
                        src="https://steamuserimages-a.akamaihd.net/ugc/1306556175490556969/4E0F9DF2A984E2208844614AFDFB59C8F903B7A6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                    />
                </div>

                <div className="col-span-4 text-left lg:text-center">
                    <div className="relative h-48 w-48 lg:mx-auto 
                    border-pink-500 border-8 rounded-full">
                        <Avatar logoutOnPress/>
                    </div>
                    <h1 className="text-3xl">Welcome to the Metaverse</h1>
                    <h2 className="text-5xl font-bold truncate">{user.get("username")}</h2>
                    <ChangeUsername />
                </div>

            </div>
        </div>
    )
}

export default Header
