import { BiSend } from "react-icons/bi";
export default function Navbar() {
  return (
    <div className="navbar container mx-auto px-8 pt-6">
      <div className="flex items-centers justify-between">
        <div>
          <h1 className="flex flex-col text-right text-xl">
            Abhishek M<span>FrontEnd Developer</span>
          </h1>
        </div>
        <nav className="flex flex-wrap items-center justify-center text-lg">
          <a className="mx-5" href="/">
            About Me
          </a>
          <a className="mx-5" href="/">
            Skils
          </a>
          <a className="mx-5" href="/">
            Showcase
          </a>
        </nav>
        <button className="cta-navbar inline-flex items-center justify-center px-6 border-2 rounded-md">
          Contact Me <BiSend className="mx-2" />
        </button>
      </div>
    </div>
  );
}
