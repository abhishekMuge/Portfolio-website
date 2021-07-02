import { Component } from "react";
import ShowcaseItem from "./ShowcaseItem";
export default class Showcases extends Component {
  render() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="mt-6 text-4xl text-gray-900 leading-normal text-center">
          Showcases
        </h1>
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
        <div className=" text-center">
          <span className="mt-6 text-base text-black leading-normal py-2 px-6 border border-black border-1 rounded-full cursor-pointer">
            Show More
          </span>
        </div>
      </div>
    );
  }
}
