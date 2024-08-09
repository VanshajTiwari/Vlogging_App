import React from "react";
import DNavbar from "../../_components/DNav";
import Sidebar from "../../_components/sidebar";
import Post from "../../_components/cardsPost";
import DetailPost from "../../_components/post";
import Chatbox from "@/app/_components/chatbot";
import ChatSideBar from "@/app/_components/sideOver";
export default function Page(){
    return(
        <React.Fragment>        
            <DNavbar/>
            <main className="flex justify-center">
             <div className="flex justify-center relative top-20 rounded-md">

                <div className="bg-white w-[80%] min-h-[500px] p-4 z-0">
                    <DetailPost/>
                    <Post/>
                </div>
             </div>
             <ChatSideBar/>
             <Chatbox/>
            </main>

        </React.Fragment>
    )
}