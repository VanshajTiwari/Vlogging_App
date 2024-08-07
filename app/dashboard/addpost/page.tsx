import React from "react";
import DNavbar from "../../_components/DNav";
import Sidebar from "../../_components/sidebar";
import Post from "../../_components/cardsPost";
import DetailPost from "../../_components/post";
import Blog from "../../_components/blog";
import CreatePost from "@/app/_components/createForm";

export default function Page(){
    return(
        <React.Fragment>        
            <DNavbar/>
            <main className="flex">
             <Sidebar/>
             <div className="flex justify-center relative top-20 rounded-md">

                <div className="bg-white w-[800px] relative ml-20 max-h-[400px]">
                    <CreatePost/>
                </div>
             </div>
            </main>

        </React.Fragment>
    )
}