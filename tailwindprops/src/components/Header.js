function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-green-600 text-white">
      <h1>Dummy</h1>
      <nav>
        <ul className="flex">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
