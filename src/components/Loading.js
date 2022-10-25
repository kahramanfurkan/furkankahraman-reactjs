import React from "react";
import { Spin } from "antd";
import { LinkedinFilled,GithubFilled,FolderOpenFilled } from "@ant-design/icons";

const Loading = () => {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-white bg-red-500 p-10 rounded-lg shadow-2xl">
        <div className="flex flex-col justify-center items-center">
          <Spin size="large" />
          <p className="mt-10">
            This case study was developed by Furkan Kahraman for UPayments.
          </p>
          <p className="font-bold">Technologies used in the Project :</p>
          <ul className="list-disc list-s">
            <li>ReactJS</li>
            <li>Redux Toolkit</li>
            <li>React Router</li>
            <li>Tailwind CSS</li>
            <li>AntDesign</li>
            <li>Axios</li>
          </ul>
        </div>

        <div className="mt-5 flex justify-center">
            <a 
            target="_blank" 
            href="https://www.linkedin.com/in/furkan-kahraman-377889208/"
            className="text-white hover:text-white">
            <LinkedinFilled style={{fontSize: '2rem'}}/>
            </a>
            
            <a
            target="_blank" 
            href="https://github.com/kahramanfurkan"
            className="text-white hover:text-white ml-3">
            <GithubFilled style={{fontSize: '2rem'}}/>
            </a> 

            <a
            target="_blank" 
            href="https://app.flowcv.com/resume-feedback/ook8pnRtVwvsYGi_crS5j"
            className="text-white hover:text-white ml-3">
            <FolderOpenFilled style={{fontSize: '2rem'}}/>
            </a> 
        </div>
      </div>
    );
};

export default Loading;