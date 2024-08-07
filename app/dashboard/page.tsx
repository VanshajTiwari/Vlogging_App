import React from "react";
import DNavbar from "../_components/DNav";
import Sidebar from "../_components/sidebar";
import Post from "../_components/cardsPost";
import DetailPost from "../_components/post";
import Blog from "../_components/blog";
import Chatbox from "../_components/chatbot";

export default function Page(){
    return(
        <React.Fragment>        
            <DNavbar/>
            <main className="flex">
             <Sidebar/>
            <div className="bg-white w-[60%] ml-12 min-h-[500px] relative top-20">
                <Blog/>
                <Post/>
            </div>
            <Chatbox/>
            </main>

        </React.Fragment>
    )
}