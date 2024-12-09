import Image from "next/image"

export default function Img() {
    return(
        <div>
            <div className="bg-[#F5F5F5] ">
                <div className="w-[95%] m-auto flex flex-col items-center roboto gap-2 h-12">
                    <h1 className="text-base font-[500]">Hello Nike App</h1>
                    <p className="text-xs font-[400]">Download the app to access everything Nike. <span className="underline fomt-[500]">Get Your Great</span> </p>
                </div>
            </div>
            <div className="w-[95%] m-auto mb-14">
                <Image src={require("../../public/shoes.png")} alt="air-max-shoes" height={700}/>
            </div>

        </div>
    )
}