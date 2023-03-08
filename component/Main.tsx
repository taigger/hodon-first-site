import React from "react";
import Image from "next/image";
import img from "../public/1014.jpg";

// const styling = {
//     backgroundImage:`url('${img}')`,
//     width:1300,
//     height:400
// }
// const bkImg() => {
// return(<Image src="/1014.jpg"
//                 width={1500}
//                 height={300}
//                 objectFit="cover"
//                 alt="bkimg"
//                 /> 
// )
// }

function Main(): JSX.Element {
    return(
        <main className="h-auto">
                           
            <div className="cover">
                <div className="font-bold text-6xl h-96 text-white text-center align-middle pt-24 opacity-80">
                    Makes Second Hand Fashion<br/>Every Day Life</div>
            </div>
            <div className="h-60 w-full">
                <h2 className="font-bold text-center text-2xl mt-9 mb-9">Misson</h2>
                <ul className="mt-3">
                    <li className="misssion_list">Delay the fast fashion cycle</li>
                    <li className="misssion_list">Eliminate the second hand bias</li>
                    <li className="misssion_list">Make the second hand fashion become a new lifestyle</li>
                </ul>
            </div>
            <div className="h-auto bg-slate-100">
                <div className ='w-10/12 m-auto mb-12'>
                    <h2 className="font-bold text-center text-2xl pt-6">What is Hodon </h2> 
                    <p className="text-2xl ml-10 mt-6 font-bold">Second-hand fashion platform collaboration with dry cleaners</p>
                    <ul className="ml-14 mt-6">
                        <li className="process_list">1. Hodon make a partnership with local dry cleaners.</li>
                        <li className="process_list">2. Sellers bring their own clothes to the listed dry cleaners.</li>
                        <li className="process_list">3. Dry cleaners register clothes and store them in vacant spaces.</li>
                        <li className="process_list">4. Buyers purchase used clothing at dry cleaners and pays Hodon.</li>
                        <li className="process_list">5. Hodon provide margin to clothes-owner and dry cleaners.</li>
                    </ul>
                </div>
                <img></img>
            </div>
            <div className ='w-10/12 m-auto'>
                <div className="flex flex-wrap mt-4 mb-9">
                    <div className="content_wrap">
                        <h3 className="sub-titles">Advantages</h3>
                        <div className="ml-14">
                            <p className="advantage_list">Seller : Easy to sell old clothes and no shipment cost.</p>
                            <p className="advantage_list">Dry Cleaners : Utilize space without inventory cost</p>
                            <p className="advantage_list">Buyer : Check clothe's condition and get good price clothes</p>
                        </div>
                    </div>
                    <div className="content_wrap">
                        <h3 className="sub-titles">Advantages for us</h3>
                            <p className="text-base ml-6 mt-6">We are a low-risk business model with no fixed assets because we provide a platform for used clothing and earn a commission for it.</p>
                    </div>
                    <div className="content_wrap">
                        <h3 className="sub-titles">Market Potential</h3>
                        <div className="ml-14">
                            <p className="mt-6">US Second hand market is 35 billion</p>
                            <p className="mt-3">It will be growing by 82billiion in 2026</p>
                        </div>
                    </div>
                    <div className="content_wrap">
                        <h3 className="sub-titles">Mile Stones</h3>
                        <p className="text-base ml-6 mt-6">In the first year, develop an application and partner with 10 dry cleaners. Within three years, it aims to partner with 100 dry cleaners, mainly in the Bay Area, and acquire 90,000 users.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;