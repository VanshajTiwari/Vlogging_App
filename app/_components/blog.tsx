import { FaRegUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPricetags } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
export default function Blog(){
    return(
        <>
        <div className="flex bg-gray-200 shadow justify-between">
            <div className="flex items-center">
              <div className="bg-red-300 h-[250px] w-[300px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="image" className="h-full object-fit"/>
              </div>
            </div>
            <div className="ml-2 mt-2">
                <div className="flex gap-x-2">
                    <span className="font-bold flex items-center gap-x-1"><FaRegClock/>Jun 30,2024 ~</span>
                    <span className="flex items-center gap-x-1"><FaUser/>Vanshaj Tiwari.</span>
                    <span>Hacking 101</span>
                </div>
                <h1 className="text-[30px] font-bold">Damn Vulnerable List</h1>
                <article className="text-[18px]">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti velit vero culpa itaque ratione repellat!</p>
                </article>
                <div className="flex flex-wrap">
                    <span className="tag">lab</span>
                    <span className="tag">practice</span>
                    <span className="tag">red team</span>
                    <span className="tag">application security</span>
                    <span className="tag">web app sec</span>
                    <span className="tag">hacking</span>
                </div>
            </div>
        </div>
      </>
    )
}