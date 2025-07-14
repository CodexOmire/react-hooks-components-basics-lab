import React from "react";

// ✅ Navbar component (renders a <nav> element)
function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
    </nav>
  );
}

// ✅ Home component (renders a <div id="home">)
function Home() {
  return (
    <div id="home">
      <h2>Welcome Home</h2>
      <p>This is the home section.</p>
    </div>
  );
}

// ✅ About component (renders a <div id="about">)
function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <p>This is the about section.</p>
    </div>
  );
}

// ✅ App component (renders all 3 children)
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
