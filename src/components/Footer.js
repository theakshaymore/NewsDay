function Footer() {
  return (
    <div>
      <footer className="p-5 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="lead">Copyright &copy; 2021 NewsDay.io</p>
          <a href="#" class="position-absolute bottom-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
        <a href="https://twitter.com/AkshhayMore">
          <i class="bi bi-twitter px-3" />
        </a>
        <a href="https://www.instagram.com/akshhay.more/">
          <i class="bi bi-instagram px-3" />
        </a>
        <a href="https://github.com/theakshaymore">
          <i class="bi bi-github px-3" />
        </a>
        <a href="https://www.linkedin.com/in/akshay-more-275616177/">
          <i class="bi bi-linkedin px-3" />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
