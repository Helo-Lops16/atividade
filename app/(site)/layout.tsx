import SearchBar from "@/components/SearchBar";
export default function Layout({ children }) {
    return (

       
        <div>
            <section className="bg-[url('/inicio.png')] bg-cover bg-center h-[500px] w-full">
                <nav>
                    <ul className="flex items-center gap-3 justify-between">
                        <div className="flex items-center gap-3 justify-between text-white font-saira">
                            <a href="#">Início</a>
                            <a href="#">Sobre</a>
                            <a href="#">Cursos</a>
                            <a href="#">Contatos</a>
                            <SearchBar /> {/* 🔍 aqui entra a lupa */}
                        </div>
                    </ul>
                </nav>
                <div style={{ color: 'white', textAlign: 'center', justifyContent: 'center', alignItems: 'center', paddingTop: '150px', fontFamily: 'Saira-Custtom', fontSize:'100px' }}>
                    <h1>GRADUAÇÃO UNI</h1>
                    <button >Embarque</button>
                </div>
            </section>
            <div>{children}</div>
            <footer className="p-4 bg-green-700 text-white absolute bottom-0 w-full "> 
                 <p>Universidade da Região  - UNI(c) 2025</p>
            </footer>
        </div>

    )
}

