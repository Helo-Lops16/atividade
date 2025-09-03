export default function Layout({ children }) {
    return (

        <div>
            <header className="flex items-center justify-between p-4 text-white">
                <div>LOGO</div>
                <nav>
                    <ul className="flex items-center gap-3">
                           
                        <a href="#">Início</a>
                        <a href="#">Sobre</a>
                        <a href="#">Cursos</a>
                        <a href="#">Contatos</a>
                
                    </ul>
                </nav>
            </header>

            <div>{children}</div>
            <footer className="p-4 bg-gray-800 text-white absolute bottom-0 w-full "> 
                 <p>Universidade da Região  - UNI(c) 2025</p>
            </footer>
        </div>
    )
}

