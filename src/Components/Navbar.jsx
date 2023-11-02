const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        display: "flex",
        width: "100%",
      }}
      className="main-header navbar-white navbar-light"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <Button onClick={toggleDrawer(anchor, true)}>
            <ViewSidebarIcon />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
