import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">Suzana Carv</div>

        <nav className="navbar-menu">
          <a href="/">Início</a>
          <a href="/sobre">Sobre</a>
          <a href="/servicos">Serviços</a>
          <a href="/portfolio">Portfólio</a>
          <a href="/contato">Contato</a>
        </nav>

        <button className="navbar-button">Agendar</button>
      </div>
    </header>
  );
}

export default Navbar;
