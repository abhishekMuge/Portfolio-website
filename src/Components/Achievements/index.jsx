import { HiOutlineLocationMarker } from "react-icons/hi";
export default function Achievements() {
  return (
    <div className="container mx-auto p-4 mt-8">
      <div className="text-center ">
        <h1 className="mt-6 text-4xl text-gray-900 leading-normal text-center mb-6">
          Education
        </h1>

        <div className="flex items-center justify-center">
          <div className="achieve Item flex flex-col mx-8 text-left p-4 border border-2 rounded-md border-black">
            <a className="inline-flex items-center block">
              <HiOutlineLocationMarker className="text-lg" />
              <h1 className="text-xl lea">
                Viva College Of Diploma And Engineering
              </h1>
            </a>
            <span className="text-gray-700">from 2017-2020</span>
            <h2>Completed Diploma In Computer Engineering</h2>
          </div>
          <div className="achieve Item flex flex-col mx-8 text-left p-4 border border-2 rounded-md border-black">
            <a className="inline-flex items-center block">
              <HiOutlineLocationMarker className="text-lg" />
              <h1 className="text-xl lea">Atharva College Of Engineering</h1>
            </a>
            <span className="text-gray-700">from 2020 - present</span>
            <h2>Pursuing B.E. Computer engineering</h2>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1 className="mt-6 text-4xl text-gray-900 leading-normal text-center mb-6">
          Skills
        </h1>
        <div className="flex justify-center items-center flex-grow">
          <span className="text-base text-gray-900 py-2 px-6 border border-2 border-black rounded-full mr-4">
            Html CSS
          </span>
          <span className="text-base text-gray-900 py-2 px-6 border border-2 border-black rounded-full mr-4">
            Javascript
          </span>
          <span className="text-base text-gray-900 py-2 px-6 border border-2 border-black rounded-full mr-4">
            Python
          </span>
          <span className="text-base text-gray-900 py-2 px-6 border border-2 border-black rounded-full mr-4">
            React
          </span>
          <span className="text-base text-gray-900 py-2 px-6 border border-2 border-black rounded-full mr-4">
            Scss
          </span>
          <span className="text-base text-gray-900 py-2 px-6 border border-2 border-black rounded-full mr-4">
            NodeJS(ExpressJS)
          </span>
          <span className="text-base text-gray-900 py-2 px-6 border border-2 border-black rounded-full mr-4">
            Figma/Adobe XD
          </span>
        </div>
      </div>
    </div>
  );
}
