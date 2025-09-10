import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        {/* Imagem */}
        <div className="w-full md:w-1/2">
          <Image
            src="/imagem/sobre.png"
            alt="Universidade Univille"
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto"
          />
      </div>

    
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold text-green-900 mb-4">
          Sobre a Univille
        </h1>
        <p className="text-green-800 leading-relaxed text-2x1">
          Somos uma Universidade referência na região, com ampla 
          estrutura, professores qualificados e cursos reconhecidos pelo MEC. 
          Proporcionamos atividades de ensino, pesquisa e extensão 
          nas mais diversas áreas do conhecimento.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-800 rounded-lg text-white hover:bg-green-700 transition">
          Continuar lendo
        </button>
      </div>
        
      </div>
     
    <div className="mt-[120px] w-full bg-gray-300 py-8 text 3-l ">
        <h2 className="ml-[30px] text-4xl text-green-700 font-semibold font-saira">
          Conheça nossos cursos
        </h2>
    </div>



       

    </main>
  );
}
