import React, { Component } from "react";

class HeaderClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContact: false,
    };
  }

  toggleContact = () => {
    this.setState((prevState) => ({
      showContact: !prevState.showContact,
    }));
  };

  render() {
    const { showContact } = this.state;

    return (
      <header className="bg-blue-700 text-white text-center p-6 shadow-lg">
        <h1 className="text-4xl font-bold">My Personal Website</h1>
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

        <button
          onClick={this.toggleContact}
          className="contact-button bg-white text-blue-700 font-bold py-2 px-4 rounded mt-4"
        >
          Contact Me
        </button>

        {showContact && (
          <section className="mt-6 p-4 bg-blue-100 rounded text-blue-800">
            <p>You can reach me via GitHub!</p>
            <ul>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/maiderspb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  github.com/maiderspb
                </a>
              </li>
            </ul>
          </section>
        )}
      </header>
    );
  }
}

export default HeaderClass;

