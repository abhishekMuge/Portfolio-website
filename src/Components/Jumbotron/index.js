import { Component } from "react";
import { FiDownload } from "react-icons/fi";
import Avtar from "../../Resource/Img/face_avtar.png";

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="container mx-auto py-8 px-14 Header flex items-center">
        <div className="intro-text flex flex-col ml-12">
          <div className="text-header">
            <span className="text-2xl ">Hi, There</span>
            <h1 className="text-7xl -mb-4 -mt-3">I'm Abhishek</h1>
            <span className="text-2xl">FrontEnd Developer</span>
          </div>
          <div className="text-description mt-6 w-2/3">
            <p className="text-xl text-justify leading-relaxed font-medium">
              I am a self-taught web developer with a strong eye for innovative
              design and a keen understanding of techniques geared toward
              optimum user experience.
            </p>
          </div>
          <div className="mt-6">
            <button className="inline-flex py-3 px-6 items-center justify-center text-lg leading-4 font-medium border rounded-lg focus:ring-2 focus:ring-white">
              Get My Resume
              <FiDownload className="mx-3" />
            </button>
          </div>
        </div>
        <div className="intro-img flex justify-center">
          <img className="w-4/5 " src={Avtar} alt="abhishek muge" />
        </div>
      </div>
    );
  }
}
