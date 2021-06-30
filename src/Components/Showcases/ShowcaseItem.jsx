import { HiArrowNarrowRight } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { FiCodesandbox } from "react-icons/fi";
export default function ShowcaseItem() {
  return (
    <div className="container mx-auto p-6 flex items-center justify-center flex wrap ">
      <div className="w-2/5">
        <img
          className="w-full h-64 object-cover object-center rounded-l-md"
          src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
          alt="code"
        />
      </div>
      <div className="flex flex-col -ml-1 w-1/2 h-64 bg-gray-900 border border-2 p-6 text-white rounded-r-md">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <AiFillGithub className="ml-2" />
            <FiCodesandbox className="ml-2" />
            <FiFigma className="ml-2" />
          </div>
          <span className=" status text-right text-white text-sm text-base leading-4">
            staus : Design Phase{" "}
          </span>
        </div>
        <h1 className="text-2xl leading-3 m-2">PortFolio Website</h1>
        <div className="tags flex">
          <div className="rounded-full px-6 py-1 text-white text-xs bg-blue-700 mx-1">
            ReactJs
          </div>
          <div className="rounded-full px-6 py-1 text-white text-xs bg-green-700 mx-1">
            NodeJs
          </div>
          <div className="rounded-full px-6 py-1 text-white text-xs bg-pink-700 mx-1">
            Figma
          </div>
        </div>
        <div className="showcase-descreption m-3">
          <p className="text-base text-justify text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            urna sagittis est, tempor tortor tellus egestas lacus. Libero,
            tempor, id diam gravida amet.
          </p>
          <button className="inline-flex items-center  text-black bg-white px-6 py-2 mt-4 text-md leading-1 rounded-lg">
            Live Demo
            <HiArrowNarrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
