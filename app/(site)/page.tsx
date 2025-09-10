import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center max-w-3xl">
        
        
        <div className="ml-[300px] max-w-md mx-auto p-6"> 
            <h1 className="text-2xl font-bold text-green-900 mb-4">
            Sobre a Univile
            </h1>
            <p className=" ml-[20px] text-green-800 mb-6 leading-relaxed">
                Somos uma Universidade referência na região, com ampla 
                estrutura, professores qualificados e cursos reconhecidos pelo MEC, 
                proporcionamos atividades de ensino, pesquisa e extensão 
                nas mais diversas áreas do conhecimento.
            </p>  
        </div>
        
      </div>
    </main>
  );
}
