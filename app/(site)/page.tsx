import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4 mt-20">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
      
        <div className="w-full md:w-1/2 mt-10px ">
          <Image
            src="/imagem/sobre.png"
            alt="Universidade Univille"
            width={500}
            height={500}
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
     
            <section className="bg-gray-200 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        
        
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold text-green-900 uppercase mb-4">
            Conheça<br />nossos<br />cursos
          </h2>
          <br />
          <p className="text-green-800 mb-6 text-2x1">Um universo de oportunidades.</p>
          <br />
          <button className="flex items-center gap-2 text-green-800 font-bold underline hover:text-green-600 transition s-20">
            Confira
            <span className="text-2xl">→</span>
          </button>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-100">
        
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/imagem/publi.jpg"
              alt="Curso de Publicidade"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0  text-white text-center py-2">
              Publicidade
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg h-100">
            <Image
              src="/imagem/gastro.jpg"
              alt="Curso de Gastronomia"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0  text-white text-center py-2">
              Gastronomia
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg h-100">
            <Image
              src="/imagem/med.jpg"
              alt="Curso de Medicina"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0  text-white text-center py-2">
              Medicina
            </div>
          </div>
        </div>
      </div>
    </section>




    <section className="flex flex-wrap justify-between items-center px-16 py-16 bg-white">

      <div className="max-w-lg">
        <h2 className="text-2xl font-bold text-green-900 mb-6">
          O QUE DIZEM NOSSOS ALUNOS
        </h2>

        <div className="bg-white">
          <div className="flex items-center mb-4">
            <Image
              src="/imagem/perfil.jpg"
              alt="Foto do aluno José Luiz"
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <div>
              <strong className="text-green-900 text-lg block">
                JOSÉ LUIZ
              </strong>
              <p className="text-gray-500 uppercase text-xs">
                Formado em Publicidade pela UNIVILLE
              </p>
            </div>
          </div>

          <p className="text-gray-800 italic mb-6">
            “Muito show o curso eu a-do-rei.”
          </p>

          <div className="flex gap-4">
            <button className="w-9 h-9 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
              ←
            </button>
            <button className="w-9 h-9 rounded-full bg-green-700 text-white hover:bg-green-800 transition">
              →
            </button>
          </div>
        </div>
      </div>

   
      <div className="max-w-md mt-8 md:mt-0 ml-[250px]">
        <Image
          src="/imagem/homem.jpg"
          alt="José Luiz segurando troféu"
          width={400}
          height={500}
          className="rounded-lg"
        />
      </div>
    </section>
    </main>
  );
}
