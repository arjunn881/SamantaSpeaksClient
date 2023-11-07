import React from "react";
import "../../page/landing/Landing.css";
import { Sidebar } from "../sidebar/Sidebar";
import { Book } from "./Book";

export const Books = () => {
  return (
    <div className="home">
      <div className="left">
        <Sidebar />
      </div>

      <div className="right">
          <Book/>
        
      </div>
    </div>
  );
};
