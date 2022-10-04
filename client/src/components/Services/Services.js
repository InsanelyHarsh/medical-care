import React from "react";
import doc from "./doc.jpg";
export const Services = () => {
  let arr = [
    {
      img: doc,
    },
    {
      img: doc,
    },
    {
      img: doc,
    },
    {
      img: doc,
    },
    {
      img: doc,
    },
    {
      img: doc,
    },
    
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-28 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
           
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-extrabold text-5xl mb-2 sm:mb-0">
              Our Services
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Street art subway tile salvia four dollar toast bitters selfies
              quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
              Viral gochujang bitters dreamcatcher.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {arr.map((i) => {
            return (
              <div className="p-4  md:w-1/3 sm:mb-1 mb-7">
                
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={i.img}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Eye Care
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
