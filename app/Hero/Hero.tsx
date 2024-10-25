// Hero.tsx
"use client";

import { useEffect } from 'react';
import KeenSlider from 'keen-slider';

const Hero: React.FC = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      defaultAnimation: {
        duration: 500,
      },
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        '(min-width: 640px)': {
          slides: {
            perView: 1,
            spacing: 15,
          },
        },
        '(min-width: 768px)': {
          slides: {
            perView: 2,
            spacing: 20,
          },
        },
        '(min-width: 1024px)': {
          slides: {
            perView: 2,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');

    keenSliderPrevious?.addEventListener('click', () =>
      keenSlider.prev(keenSlider.options.slides.perView as number)
    );
    keenSliderNext?.addEventListener('click', () =>
      keenSlider.next(keenSlider.options.slides.perView as number)
    );

    return () => {
      keenSlider.destroy();
    };
  }, []);

  return (
    <div className="bg-[#040404]">
      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8 border-t border-gray-700 pt-8">
          {/* Our Story Heading */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl text-white">Our Story</h2>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">Our Story</h1>
            <button className="border border-gray-700 rounded-full px-6 py-3 text-white hover:bg-gray-700 transition">
              More About Us
            </button>
          </div>
          {/* Our Story Content */}
          <div className="lg:w-2/3">
            <p className="text-gray-400 mb-4">
              Facilisi mollis nunc ultrices vestibulum nisl id arcu non dolor sollicitudin massa a
              diam sed non habitant volutpat convallis lorem in leo donec ultrices aliquet in
              adipiscing cursus turpis egestas ut et eu vulputate magnis lectus nunc lorem
              sollicitudin arcu viverra gravida posuere ac suspendisse suspendisse.
            </p>
            <p className="text-gray-400">
              Facilisi mollis nunc ultrices vestibulum nisl id arcu non dolor sollicitudin massa a
              diam sed non habitant volutpat convallis lorem in leo donec ultrices aliquet.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12 border-t border-gray-700">
        {/* Section Title */}
        <div className="flex flex-col items-start mb-8">
          <h2 className="text-xl text-white">Services</h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mt-4">Services</h1>
        </div>

        {/* Services Content */}
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="space-y-4 lg:w-2/3">
              <p className="text-gray-400">
                Praesent euismod ullamcorper non facilisis a fames arcu eget fringilla orci. Enim
                erat lectus egestas etiam mauris tellus est aenean vel aliquam non.
              </p>
            </div>
            <div className="mt-4 lg:mt-0">
              <button className="border border-secondary rounded-full px-6 py-3 text-white hover:bg-white hover:text-black transition">
                View More
              </button>
            </div>
          </div>

          {/* Service Items */}
          <div className="space-y-8">
            {/* Service Item */}
            <div className="flex flex-col lg:flex-row justify-between items-start border-b border-gray-700 pb-8">
              <div className="lg:w-3/4 space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Documentary Film Making
                </h2>
                <p className="text-gray-400">
                  Praesent euismod ullamcorper non facilisis a fames arcu eget fringilla orci enim
                  erat lectus egestas etiam mauris tellus est aenean vel aliquam non.
                </p>
              </div>
              <div className="mt-4 lg:mt-0">
                <button className="rounded-full p-4 text-white border border-white">+</button>
              </div>
            </div>

            {/* Service Item */}
            <div className="flex flex-col lg:flex-row justify-between items-start border-b border-gray-700 pb-8">
              <div className="lg:w-3/4 space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Music Video Production
                </h2>
                <p className="text-gray-400">
                  Praesent euismod ullamcorper non facilisis a fames arcu eget fringilla orci enim
                  erat lectus egestas etiam mauris tellus est aenean vel aliquam non.
                </p>
              </div>
              <div className="mt-4 lg:mt-0">
                <button className="rounded-full p-4 text-white border border-white">+</button>
              </div>
            </div>

            {/* Service Item */}
            <div className="flex flex-col lg:flex-row justify-between items-start border-b border-gray-700 pb-8">
              <div className="lg:w-3/4 space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Advertising Production
                </h2>
                <p className="text-gray-400">
                  Praesent euismod ullamcorper non facilisis a fames arcu eget fringilla orci enim
                  erat lectus egestas etiam mauris tellus est aenean vel aliquam non.
                </p>
              </div>
              <div className="mt-4 lg:mt-0">
                <button className="rounded-full p-4 text-white border border-white">+</button>
              </div>
            </div>

            {/* Service Item */}
            <div className="flex flex-col lg:flex-row justify-between items-start border-b border-gray-700 pb-8">
              <div className="lg:w-3/4 space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Streaming Production
                </h2>
                <p className="text-gray-400">
                  Praesent euismod ullamcorper non facilisis a fames arcu eget fringilla orci enim
                  erat lectus egestas etiam mauris tellus est aenean vel aliquam non.
                </p>
              </div>
              <div className="mt-4 lg:mt-0">
                <button className="rounded-full p-4 text-white border border-white">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extended Services Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white">
              Building strategies,
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white">
              Crafting <span className="text-gray-400">Experiences</span>
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-400">Ideas for Lasting</h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-400">Impressions</h1>
          </div>

          {/* Features */}
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16 mt-8 lg:mt-0">
            <div className="space-y-2">
              <h2 className="text-white">
                <span className="text-green-600">|</span> 24/7 Support
              </h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-white">
                <span className="text-green-600">|</span> Super Fast Team
              </h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0 sm:space-x-8">
          {/* Statistic Item */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">50,000K+</h1>
            <p className="text-xl text-white">Spent on Ads</p>
          </div>
          {/* Statistic Item */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">5000+</h1>
            <p className="text-xl text-white">Clients</p>
          </div>
          {/* Statistic Item */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">500+</h1>
            <p className="text-xl text-white">Projects</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-[#040404] border-t border-b border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Testimonials Heading */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                What they say about Us...
              </h2>
              <p className="mt-4 text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo
                placeat harum porro optio fugit a culpa sunt id!
              </p>
              <div className="flex gap-4 mt-8">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous"
                  className="rounded-full border border-white p-3 text-white hover:bg-white hover:text-black transition"
                >
                  {/* Previous Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="Next slide"
                  id="keen-slider-next"
                  className="rounded-full border border-white p-3 text-white hover:bg-white hover:text-black transition"
                >
                  {/* Next Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Testimonials Slider */}
            <div className="lg:col-span-2">
              <div id="keen-slider" className="keen-slider">
                {/* Testimonial Slide */}
                {/* Repeat similar blocks for each testimonial */}
                <div className="keen-slider__slide">
                  <blockquote className="flex flex-col justify-between bg-[#040404] p-6 sm:p-8 lg:p-12 h-full">
                    <div>
                      <div className="flex gap-1 text-[#009DD1]">
                        {/* Stars */}
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-white">Great Service!</p>
                        <p className="mt-4 text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate
                          quaerat rerum, quas sunt labore perferendis!
                        </p>
                      </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-gray-400">
                      &mdash; John Doe
                    </footer>
                  </blockquote>
                </div>

                {/* Additional Testimonial Slides */}
                {/* Repeat the block below for each additional review */}
                <div className="keen-slider__slide">
                  <blockquote className="flex flex-col justify-between bg-[#040404] p-6 sm:p-8 lg:p-12 h-full">
                    <div>
                      <div className="flex gap-1 text-[#009DD1]">
                        {/* Stars */}
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-white">Wonderful Team!</p>
                        <p className="mt-4 text-gray-400">
                          Great experience from start to finish. The team was professional and very
                          efficient in getting the project done.
                        </p>
                      </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-gray-400">
                      &mdash; Jane Smith
                    </footer>
                  </blockquote>
                </div>

                {/* Add more testimonial slides as needed */}
              </div>
            </div>
          </div>

          {/* Mobile Slider Controls */}
          <div className="flex justify-center gap-4 mt-8 lg:hidden">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous-mobile"
              className="rounded-full border border-white p-3 text-white hover:bg-white hover:text-black transition"
            >
              {/* Previous Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 -rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              id="keen-slider-next-mobile"
              className="rounded-full border border-white p-3 text-white hover:bg-white hover:text-black transition"
            >
              {/* Next Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
