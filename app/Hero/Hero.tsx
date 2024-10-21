// Hero.tsx
"use client";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#040404] ml-3 mr-3 mt-6 pt-6">

      {/* Section  1 our Story   */}
      <div className="flex justify-between ml-6 mr-6 space-x-6 border-[#383838] border-t-2 border-r-0 border-l-0 border-b-0 p-8">
        {/* Out Stroy Heading */}
        <div className="flex-col space-y-8  ">
          <h1 className="text-xl">
            Our Story
          </h1>
          <h1 className=" font-bold text-7xl ">Our Story </h1>

          <button className="border border-[#383838] rounded-full p-3 "> More About Us</button>
        </div>
        {/* out Story content  */}
        <div className="flex-col justify-end w-[900px]">
          <p className="text-center ">
            Facilisi mollis nunc ultrices vestibulum nisl id arcu non dolor sollicitudin massa
            a diam sed non habitant volutpat convallis lorem in leo donec ultrices aliquet
            in adipiscing cursus turpis egestas ut et eu vulputate magnis lectus nunc
            lorem sollicitudin arcu viverra gravida posuere ac suspendisse suspendisse.
          </p>
          <p>
            Facilisi mollis nunc ultrices vestibulum nisl id arcu non dolor sollicitudin massa
            a diam sed non habitant volutpat convallis lorem in leo donec ultrices aliquet.
          </p>
        </div>

      </div>

      {/* section 2 Services  */}
      <div className="flex flex-col mx-8 border-t-2 border-[#303030]">
        {/* Section Title */}
        <div className="flex flex-col items-start justify-start pt-4 pb-4">
          <h2 className="text-white text-lg">Services</h2>
        </div>

        {/* Services Content */}
        <div className="flex flex-col space-y-8">
          <h1 className="text-7xl font-extrabold text-white">Services</h1>

          <div className="flex justify-between">
            <div className="space-y-1">
              <h2 className="text-white text-start">
                Praesent euismod ullamcorper non facilisis a fames arcu eget fringilla orci.
              </h2>
              <h2 className="text-white text-start">
                Enim erat lectus egestas etiam mauris tellus est aenean vel aliquam non.
              </h2>
            </div>
            <div className="flex ">
              <button className="rounded-full border-x-2 p-3 border border-[#303030] hover:bg-white hover:text-black"> View More</button>
            </div>

          </div>

          {/* subsection of different services  */}
          <div className=" flex justify-between border space-y-4  border-[#303030] border-t-0 border-l-0 border-r-0 border-b-2 p-4 mt-6">
            {/* first subsection  */}
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold mb-4">Documentery Film Making</h1>
              <h2 className=" text-start">Praesent euismod ullamcorper non facilisis a fames arcu eget fringilla orci enim erat lectus egestas etiam mauris </h2>
              <h2 className="  text-start">tellus est aenean vel aliquam non</h2>
            </div>
            <div className="">
              <button className="rounded-full p-4 text-white border-white border-2"> + </button>
            </div>


          </div>

          {/* subsection 2  */}

          <div className=" flex justify-between border border-[#303030] border-t-0 border-l-0 border-r-0 border-b-2 p-4 mt-6">
            {/* first subsection  */}
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold mb-4">Music Video Production</h1>
              <h2 className=" text-start">Praesent euismod ullamcorper non facilisis a fames arcu eget fringilla orci enim erat lectus egestas etiam mauris </h2>
              <h2 className="  text-start">tellus est aenean vel aliquam non</h2>
            </div>
            <div className="">
              <button className="rounded-full p-4 text-white border-white border-2"> + </button>
            </div>


          </div>


          {/* subsection 3  */}
          <div className=" flex justify-between border border-[#303030] border-t-0 border-l-0 border-r-0 border-b-2 p-4 mt-6">
            {/* first subsection  */}
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold mb-4">Advertising Production</h1>
              <h2 className=" text-start">Praesent euismod ullamcorper non facilisis a fames arcu eget fringilla orci enim erat lectus egestas etiam mauris </h2>
              <h2 className="  text-start">tellus est aenean vel aliquam non</h2>
            </div>
            <div className="">
              <button className="rounded-full p-4 text-white border-white border-2"> + </button>
            </div>


          </div>


          {/* subsection 4 */}
          <div className=" flex justify-between border border-[#303030] border-t-0 border-l-0 border-r-0 border-b-2 p-4 mt-6">
            {/* first subsection  */}
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold mb-4">Streaming Production</h1>
              <h2 className=" text-start">Praesent euismod ullamcorper non facilisis a fames arcu eget fringilla orci enim erat lectus egestas etiam mauris </h2>
              <h2 className="  text-start">tellus est aenean vel aliquam non</h2>
            </div>
            <div className="">
              <button className="rounded-full p-4 text-white border-white border-2"> + </button>
            </div>


          </div>


        </div>
      </div>

      {/* Section 3 somewhat extended services */}

      <div className="flex mt-16 ml-16  justify-between mr-16 flex-col">
        {/* large text */}
        <div>
          <h1 className="text-start text-5xl text-white">
            Building strategies,
          </h1>
          <h1 className="text-start text-5xl text-white">
            Crafting <span className="text-5xl text-[#303030]"> Experiences</span>
          </h1>
          <h1 className="text-start text-5xl text-[#303030]">
            Ideas for Lasting
          </h1>
          <h1 className="text-start text-5xl text-[#303030]">
            Impressions
          </h1>

        </div>

        <div className="flex justify-end">
          <div className="flex justify-end space-x-4">
            <div>
              <h1><span className="text-green-600"> | </span> 24/7 Support</h1>
              <h2 className="text-[#303030]">Lorem ipsum dolor sit amet,</h2>

              <h2 className="text-[#303030]">
                consectetur adipiscing.
              </h2>
            </div>
            <div>
              <h1><span className="text-green-600"> | </span> Super Fast Team</h1>
              <h2 className="text-[#303030]">Lorem ipsum dolor sit amet,</h2>

              <h2 className="text-[#303030]">
                consectetur adipiscing.
              </h2>
            </div>


          </div>

        </div>



      </div>

      {/* spent projects and clients  */}

      <div className=" flex mt-16 ml-16 mr-16 mb-16 justify-between">
        <div className="flex flex-col space-y-1">
          <h1 className="text-white text-5xl font-bold">50,000K+</h1>
          <h2 className="text-white text-xl">spent on Ads</h2>
        </div>


        <div className="flex flex-col space-y-1">
          <h1 className="text-white text-5xl font-bold">5000+</h1>
          <h2 className="text-white text-xl">Clients</h2>
        </div>




        <div className="flex flex-col space-y-1">
          <h1 className="text-white text-5xl font-bold">500+</h1>
          <h2 className="text-white text-xl">Projects</h2>
        </div>

      </div>

      {/* Hero component content */}

    </div>
  );
};

export default Hero;
