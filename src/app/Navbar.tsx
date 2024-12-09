import Image from "next/image"
import { Search, Heart, ShoppingBag } from "lucide-react";
export default function Navbar() {
    return(
        <div className="bg-white">

            <div className="bg-[#F5F5F5]">
                <div className="flex justify-between w-[95%] m-auto h-9 items-center">
                    <div>
                        <Image src={require("../../public/airjordan.png")} alt="airJordan-logo" height={17.97} width={19.2}/>
                    </div>
                    <ol className="flex gap-2  roboto text-xs font-[500]">
                        <li>Find a Store |</li>
                        <li>Help |</li>
                        <li>Join Us |</li>
                        <li>Sign In</li>
                    </ol>
                </div>  
            </div>
            <div className=" w-[95%] m-auto h-16">
                <div className="flex justify-between items-center">
                    <div>
                        <Image src={require("../../public/nike.jpg")} alt="nike-logo" width={58.47} height={78.47} />
                    </div>
                    <ol className="flex gap-6 items-center roboto text-base font-[500]">
                        <li>New & Featured</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Sale</li>
                        <li>SNKRS</li>
                    </ol>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-[#F5F5F5] rounded-full px-4 py-2 w-[180px] h-[35px]">
                        <Search className="w-5 h-5 text-gray-500" />
                        <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none ml-2 text-gray-700 placeholder-gray-500"
                        />
                    </div>
            
                    <div className="flex items-center space-x-4">
                        <Heart className="w-5 h-5" />
                        <ShoppingBag className="w-5 h-5" />
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}