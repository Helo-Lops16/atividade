import SearchBar from "@/components/SearchBar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
     
      <section className="bg-[url('/inicio.png')] bg-cover bg-center h-[500px] w-full">
        <nav className="flex items-center justify-between px-6 py-4 text-white font-saira">
          <ul className="flex items-center gap-6">
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Cursos</a></li>
            <li><a href="#">Contatos</a></li>
          </ul>
          <SearchBar /> {/* 🔍 */}
        </nav>

     
        <footer className="bg-gray-800 text-white py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between">
              {/* Três colunas idênticas */}
              {[1, 2, 3].map((item) => (
              <div key={item} className="w-full md:w-1/3 lg:w-1/4 mb-6">
                <p className="font-bold text-lg mb-2">Compos Região</p>
                <p className="mb-1">uni@email.com</p>
                <p className="mb-1">(47) 123456.789</p>
                <p className="mb-1">Rua Av 123,</p>
                <p className="mb-1">89219-710</p>
                <p className="mb-1">Razão Social: Fundação Educacional Uni</p>
                <p>CNPJ 12563588/0001-94</p>
              </div>
            ))}
            </div>
          </div>
    
        
          <div className="border-t border-gray-700 mt-6 pt-6 text-center">
            <p>Universidade da Região – UNI(c) 2025</p>
          </div>
        </footer>
        
      </section>

 
      <main className="flex-1">{children}</main>

  
      <footer className="p-4 bg-green-700 text-white text-center">
        <p>Universidade da Região - UNI © 2025</p>
      </footer>
    </div>
  );
}

