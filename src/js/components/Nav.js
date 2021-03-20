const Nav = () => {
  return (
    <nav>
      <ul className='navBar'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Projects</a>
        </li>
        <li>
          <a href='#' className='active'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
