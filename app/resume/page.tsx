"use client";

import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">My Resume</h1>
      <div className="w-full max-w-3xl h-[750px] border border-gray-300 shadow-lg rounded-lg bg-white p-4">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={"/Charan_Vengatesh_Resume.pdf"} />
        </Worker>
      </div>
    </div>
  );
}

//       <h1 className="text-3xl font-bold text-gray-800 mb-4">My Resume</h1>
