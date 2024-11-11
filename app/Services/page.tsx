"use client";
import React, { useState } from "react";
import Image from "next/image";
import office from "./Container.png";
import service1 from "./service1.png";
import service2 from "./service2.png";
import service3 from "./service3.png";
import service4 from "./service4.png";
import service5 from "./service5.png";
import service6 from "./service6.png";

const Services = () => {
  // State variables to manage visibility of each service's hidden content
  const [showService1, setShowService1] = useState(false);
  const [showService2, setShowService2] = useState(false);
  const [showService3, setShowService3] = useState(false);
  const [showService4, setShowService4] = useState(false);
  const [showService5, setShowService5] = useState(false);
  const [showService6, setShowService6] = useState(false);

  return (
    <div className="flex flex-col mx-4 sm:mx-8 md:mx-16 lg:mx-32 justify-center bg-primary">
      {/* Background Image Section */}
      <div className="relative mt-12 sm:mt-24 h-64 sm:h-96 md:h-screen bg-primary">
        <Image
          src={office}
          alt="Why Us Background Image"
          layout="responsive"
          width={1200} // Maintain original aspect ratio
          height={600}
          className="object-cover opacity-50 rounded-md"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-left text-white">
            BLOCKBUSTER STRATEGIES FOR{" "}
            <span className="block">YOUR BRAND</span>
          </h2>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 mt-8">
        <h1 className="text-base sm:text-lg md:text-xl font-bold text-white">
          From script to screen, we provide the tools and strategies that turn
          your brand into a digital sensation.
        </h1>
      </div>

      {/* Subscription Plans
      <div className="flex flex-col justify-center border-t-2 border-secondary p-6 mt-8">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Subscriptions
          </h1>
        </div>
      </div> */}

      {/* Services Section */}
      <div className="flex flex-col justify-center items-center space-y-6 border-t-2 border-secondary mt-6 p-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center p-6">
          Our Services
        </h1>

        {/* Services List */}
        <div className="w-full max-w-6xl mx-auto flex flex-col space-y-8">
          {/* Service 1 */}
          <div className="flex flex-col">
            <div
              className="cursor-pointer"
              onClick={() => setShowService1(!showService1)}
            >
              <Image
                src={service1}
                alt="Service 1"
                layout="responsive"
                width={1500}
                height={800}
                className="object-cover rounded-lg"
              />
            </div>
            {showService1 && (
              <div className="flex flex-col lg:flex-row justify-between mt-4 bg-[#030303] p-4 rounded-lg">
                <div className="flex flex-col space-y-3 lg:w-2/3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                    About the service
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg">
                    Our Creative Campaigns service is all about bringing your
                    brand to life through powerful visuals and engaging
                    storytelling. We specialise in creating campaigns that not
                    only catch the eye but also evoke genuine emotions, making
                    your brand memorable and relatable. From dynamic social media
                    content to striking ad designs, we craft each piece with
                    purpose and creativity, aiming to connect deeply with your
                    target audience and leave a lasting impact.
                  </p>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-4">
                    Our USPs:
                  </h1>
                  <ul className="list-disc list-inside text-white text-sm sm:text-base md:text-lg space-y-2">
                    <li>
                      <span className="font-bold">Eye-Catching Visuals:</span>{" "}
                      Vibrant, high-quality designs that grab attention instantly.
                    </li>
                    <li>
                      <span className="font-bold">Emotional Resonance:</span>{" "}
                      Storytelling that forms a meaningful bond with your audience.
                    </li>
                    <li>
                      <span className="font-bold">Strategic Messaging:</span>{" "}
                      Clear, purposeful communication that drives results.
                    </li>
                  </ul>
                </div>

                <div className="mt-6 lg:mt-0 lg:w-1/3 h-auto p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4">
                  <h2 className="text-left font-bold text-xl sm:text-2xl text-white">
                    Let's connect for a discussion
                  </h2>
                  <p className="text-left text-sm sm:text-base text-white">
                    Interested in taking your brand to the next level? Contact us
                    today to start the conversation.
                  </p>
                  <button className="p-2 w-full sm:w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Service 2 */}
          <div className="flex flex-col">
            <div
              className="cursor-pointer"
              onClick={() => setShowService2(!showService2)}
            >
              <Image
                src={service2}
                alt="Service 2"
                layout="responsive"
                width={1500}
                height={800}
                className="object-cover rounded-lg"
              />
            </div>
            {showService2 && (
              <div className="flex flex-col lg:flex-row justify-between mt-4 bg-[#030303] p-4 rounded-lg">
                <div className="flex flex-col space-y-3 lg:w-2/3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                    About the service
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg">
                    Our Influencer Mastery service handles the entire influencer
                    campaign process, ensuring seamless execution and maximum
                    impact. We excel at identifying the right influencers who
                    align perfectly with your brand’s goals and values. From
                    initial outreach to comprehensive campaign management, we
                    ensure everything is optimised for success. With our strategic
                    approach, we help brands tap into authentic voices and reach
                    wider audiences, generating tangible results through creative
                    collaborations.
                  </p>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-4">
                    Our USPs:
                  </h1>
                  <ul className="list-disc list-inside text-white text-sm sm:text-base md:text-lg space-y-2">
                    <li>
                      <span className="font-bold">Perfect Influencer Match:</span>{" "}
                      We connect you with influencers who truly represent your
                      brand.
                    </li>
                    <li>
                      <span className="font-bold">Effortless Execution:</span>{" "}
                      Full-service management, so you can focus on growth.
                    </li>
                    <li>
                      <span className="font-bold">Impact-Driven Results:</span>{" "}
                      Campaigns designed to captivate and convert.
                    </li>
                  </ul>
                </div>

                <div className="mt-6 lg:mt-0 lg:w-1/3 h-auto p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4">
                  <h2 className="text-left font-bold text-xl sm:text-2xl text-white">
                    Let's connect for a discussion
                  </h2>
                  <p className="text-left text-sm sm:text-base text-white">
                    Ready to amplify your reach with influencer collaborations?
                    Let's discuss how we can help.
                  </p>
                  <button className="p-2 w-full sm:w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Service 3 */}
          <div className="flex flex-col">
            <div
              className="cursor-pointer"
              onClick={() => setShowService3(!showService3)}
            >
              <Image
                src={service3}
                alt="Service 3"
                layout="responsive"
                width={1500}
                height={800}
                className="object-cover rounded-lg"
              />
            </div>
            {showService3 && (
              <div className="flex flex-col lg:flex-row justify-between mt-4 bg-[#030303] p-4 rounded-lg">
                <div className="flex flex-col space-y-3 lg:w-2/3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                    About the service
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg">
                    Our Ad Magic service ensures your brand gets the spotlight it
                    deserves, from Meta to Google. We expertly manage and optimise
                    your ad spend, crafting high-impact campaigns that capture
                    attention and drive meaningful engagement. Our data-driven
                    approach allows us to tailor ads that not only amplify
                    visibility but also deliver measurable results, enhancing your
                    brand’s reach across digital platforms.
                  </p>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-4">
                    Our USPs:
                  </h1>
                  <ul className="list-disc list-inside text-white text-sm sm:text-base md:text-lg space-y-2">
                    <li>
                      <span className="font-bold">Precision Targeting:</span> Reach
                      your ideal audience with customised ad strategies.
                    </li>
                    <li>
                      <span className="font-bold">Optimised Budget Use:</span>{" "}
                      Maximise every dollar spent for top ROI.
                    </li>
                    <li>
                      <span className="font-bold">Creative Excellence:</span> Ads
                      that engage, convert, and leave a lasting impression.
                    </li>
                  </ul>
                </div>

                <div className="mt-6 lg:mt-0 lg:w-1/3 h-auto p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4">
                  <h2 className="text-left font-bold text-xl sm:text-2xl text-white">
                    Let's connect for a discussion
                  </h2>
                  <p className="text-left text-sm sm:text-base text-white">
                    Want to make your ads work harder for you? Reach out to explore
                    our ad solutions.
                  </p>
                  <button className="p-2 w-full sm:w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Service 4 */}
          <div className="flex flex-col">
            <div
              className="cursor-pointer"
              onClick={() => setShowService4(!showService4)}
            >
              <Image
                src={service4}
                alt="Service 4"
                layout="responsive"
                width={1500}
                height={800}
                className="object-cover rounded-lg"
              />
            </div>
            {showService4 && (
              <div className="flex flex-col lg:flex-row justify-between mt-4 bg-[#030303] p-4 rounded-lg">
                <div className="flex flex-col space-y-3 lg:w-2/3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                    About the service
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg">
                    Our Effortless UGC Management service takes the complexity out
                    of handling user-generated content (UGC). We transform
                    authentic customer stories, photos, and reviews into
                    compelling marketing assets, elevating your brand’s
                    credibility and engagement. From sourcing to moderation, we
                    manage the process seamlessly, letting you benefit from
                    genuine content without lifting a finger. By leveraging these
                    real-life experiences, we ensure your brand feels relatable,
                    trustworthy, and impactful, making meaningful connections with
                    your audience.
                  </p>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-4">
                    Our USPs:
                  </h1>
                  <ul className="list-disc list-inside text-white text-sm sm:text-base md:text-lg space-y-2">
                    <li>
                      <span className="font-bold">Time-Saving Solutions:</span> We
                      handle all UGC operations for you.
                    </li>
                    <li>
                      <span className="font-bold">Authentic Engagement:</span>{" "}
                      Boost credibility with real customer stories.
                    </li>
                    <li>
                      <span className="font-bold">Strategic Use:</span> Optimise
                      UGC to maximise impact and reach.
                    </li>
                  </ul>
                </div>

                <div className="mt-6 lg:mt-0 lg:w-1/3 h-auto p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4">
                  <h2 className="text-left font-bold text-xl sm:text-2xl text-white">
                    Let's connect for a discussion
                  </h2>
                  <p className="text-left text-sm sm:text-base text-white">
                    Harness the power of user-generated content. Contact us to get
                    started.
                  </p>
                  <button className="p-2 w-full sm:w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Service 5 */}
          <div className="flex flex-col">
            <div
              className="cursor-pointer"
              onClick={() => setShowService5(!showService5)}
            >
              <Image
                src={service5}
                alt="Service 5"
                layout="responsive"
                width={1500}
                height={800}
                className="object-cover rounded-lg"
              />
            </div>
            {showService5 && (
              <div className="flex flex-col lg:flex-row justify-between mt-4 bg-[#030303] p-4 rounded-lg">
                <div className="flex flex-col space-y-3 lg:w-2/3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                    About the service
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg">
                    Our Strategic Branding service ensures your brand doesn’t just
                    exist but thrives in the digital landscape. We craft
                    comprehensive and consistent brand strategies tailored to your
                    market, helping you make a powerful impact and foster lasting
                    connections. From visual identity to brand messaging, we
                    design every element to resonate deeply with your audience,
                    making your brand memorable and distinctive. By aligning with
                    your goals and emphasising your unique strengths, we set you
                    apart from the competition and position you as a leader in
                    your industry.
                  </p>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-4">
                    Our USPs:
                  </h1>
                  <ul className="list-disc list-inside text-white text-sm sm:text-base md:text-lg space-y-2">
                    <li>
                      <span className="font-bold">Tailored Strategies:</span>{" "}
                      Personalised branding solutions for maximum relevance.
                    </li>
                    <li>
                      <span className="font-bold">Distinctive Identity:</span>{" "}
                      Create a memorable and cohesive brand voice.
                    </li>
                    <li>
                      <span className="font-bold">Market-Driven:</span> Designed to
                      engage and captivate your target audience.
                    </li>
                  </ul>
                </div>

                <div className="mt-6 lg:mt-0 lg:w-1/3 h-auto p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4">
                  <h2 className="text-left font-bold text-xl sm:text-2xl text-white">
                    Let's connect for a discussion
                  </h2>
                  <p className="text-left text-sm sm:text-base text-white">
                    Looking to redefine your brand? Let's collaborate to create
                    something exceptional.
                  </p>
                  <button className="p-2 w-full sm:w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Service 6 */}
          <div className="flex flex-col">
            <div
              className="cursor-pointer"
              onClick={() => setShowService6(!showService6)}
            >
              <Image
                src={service6}
                alt="Service 6"
                layout="responsive"
                width={1500}
                height={800}
                className="object-cover rounded-lg"
              />
            </div>
            {showService6 && (
              <div className="flex flex-col lg:flex-row justify-between mt-4 bg-[#030303] p-4 rounded-lg">
                <div className="flex flex-col space-y-3 lg:w-2/3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                    About the service
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg">
                    Our Performance Insights service transforms data into
                    actionable growth strategies. We deeply analyse key
                    performance metrics to understand what's working and what
                    needs improvement, ensuring your digital marketing efforts are
                    always optimised for success. By leveraging these insights, we
                    refine campaigns to enhance engagement, conversion, and brand
                    impact. We believe that informed decisions lead to better
                    results, making your marketing smarter and more efficient.
                  </p>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-4">
                    Our USPs:
                  </h1>
                  <ul className="list-disc list-inside text-white text-sm sm:text-base md:text-lg space-y-2">
                    <li>
                      <span className="font-bold">Data-Driven Analysis:</span>{" "}
                      Comprehensive performance tracking and analysis.
                    </li>
                    <li>
                      <span className="font-bold">Actionable Strategies:</span>{" "}
                      Recommendations to maximise ROI.
                    </li>
                    <li>
                      <span className="font-bold">Continuous Optimization:</span>{" "}
                      Adaptive improvements for ongoing success.
                    </li>
                  </ul>
                </div>

                <div className="mt-6 lg:mt-0 lg:w-1/3 h-auto p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4">
                  <h2 className="text-left font-bold text-xl sm:text-2xl text-white">
                    Let's connect for a discussion
                  </h2>
                  <p className="text-left text-sm sm:text-base text-white">
                    Ready to unlock insights from your data? Let's talk about how
                    we can help.
                  </p>
                  <button className="p-2 w-full sm:w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
