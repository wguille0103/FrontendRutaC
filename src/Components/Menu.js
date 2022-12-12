const Menu = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/inicio">
              Inicio <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/usuario">
              Usuario
            </a>
            </li>          
          <li class="nav-item">
            <a class="nav-link" href="/login">
              Login
            </a>
          </li>
          <a href="/logout" className="nav-item nav-link">
            <i class="fa-solid fa-power-off"></i>
          </a>
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
