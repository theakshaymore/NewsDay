function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <img
            className="mx-2"
            src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            alt="img"
            width="35"
            height="30"
          />
          <a className="navbar-brand">NewsDay.io</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Connect
                </a>
                <ul
                  class="dropdown-menu bg-dark "
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item my-drop">My Profiles</a>
                  </li>
                  <li>
                    <hr class="dropdown-divider my-drop" />
                  </li>
                  <li>
                    <a
                      class="dropdown-item my-drop"
                      href="https://github.com/theakshaymore"
                    >
                      <i class="bi bi-github" />
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item my-drop"
                      href="https://www.linkedin.com/in/akshay-more-275616177/"
                    >
                      <i class="bi bi-linkedin" />
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item my-drop"
                      href="https://twitter.com/AkshhayMore"
                    >
                      <i class="bi bi-twitter" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item my-drop"
                      href="https://www.instagram.com/akshhay.more/"
                    >
                      <i class="bi bi-instagram" />
                      Instagram
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
