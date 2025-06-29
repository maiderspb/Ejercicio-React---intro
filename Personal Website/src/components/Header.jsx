export default function Header() {
  return (
    <header className="bg-blue-700 text-white text-center p-6 shadow-lg">
      <h1 className="text-3xl font-bold">My Personal Website</h1>
      <h2 className="text-xl mt-2">Hi! I'm Maider 👋</h2>
      <p className="mt-2">
        Front-End Developer based in Bilbao, passionate about clean code and
        great design.
      </p>
      <p className="mt-2">
        I enjoy creating clean, interactive web experiences with React and
        modern tools. I love working with modern technologies, constantly
        learning new things, crafting responsive interfaces, exploring React,
        and turning ideas into elegant code. I'm always eager to learn and
        collaborate on meaningful projects that make a difference.
      </p>
      <p className="mt-2">
        When I'm not coding, you'll find me sketching, hiking, or chasing down
        the perfect cup of coffee.
      </p>
      <a href="#contact" className="contact-button">
        Contact Me
      </a>
    </header>
  );
}
