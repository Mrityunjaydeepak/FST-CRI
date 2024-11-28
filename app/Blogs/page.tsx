import React from 'react';

import BlogCard from '../Components/BlogCard';
import imgOne from './images/66edba4c724f61b2a4dd3418_blog-image-6.webp.png'
import imgTwo from './images/listening skills.png'
import imgThree from './images/feynman.png'
import imgFour from './images/Listening skill.png'
import imgFive from './images/BlogFive.png'
import imgSix from './images/BlogSix.png'
import imgSeven from './images/BlogSeven.png'
import imgEight from './images/BlogEight.png'
import imgNine from './images/BlogNine.jpeg'
import imgTen from './images/BlogTen.jpg'
import Image from 'next/image';
import head from './images/head.jpg'

// Sample data
const blogPosts = [
  {
    id: 1,
    title: ' Why is System Thinking Crucial in Digital Marketing?',
    description:
      'Digital marketing isn’t just about individual tactics—it’s about how all these elements work together to achieve success.',
    imageUrl: imgOne,
    link: '/BlogOne',
  },
  {
    id: 2,
    title: ' How Can Design Thinking Revolutionize Digital Campaigns?',
    description:
      'Design thinking is about putting people at the center of your strategy. It’s not just about creating a campaign; it’s about solving problems creatively with empathy..',
    imageUrl: imgTwo,
    link: '/BlogTwo',
  },
  {
    id: 3,
    title: ' What Can Digital Marketers Learn from the Feynman Theory?',
    description:
      'Clear communication is often the most overlooked aspect of marketing. The Feynman Theory—explaining complex ideas in simple terms—can make your campaigns more effective.',
    imageUrl: imgThree,
    link: '/BlogThree',
  },
  {
    id: 4,
    title: 'Why are Listening Skills Undervalued in Digital Marketing?',
    description:
      'Digital marketing isn’t just about speaking; it’s about listening—actively and empathetically.',
    imageUrl: imgFour,
    link: '/BlogFour',
  },
  {
    id: 5,
    title: ' How Does Creative Designing Boost Campaign Effectiveness?',
    description:
      'Creative design isn’t just about making things look pretty; it’s about enhancing user experience and driving results. ',
    imageUrl:imgFive,
    link: '/BlogFive',
  },
  {
    id: 6,
    title: 'What Role Does Color Theory Play in Marketing Psychology?',
    description:
      'Colors aren’t just aesthetic—they carry psychological meaning. In marketing, color theory is a powerful tool to influence perceptions, elicit emotions, and even drive sales.',
    imageUrl: imgSix,
    link: '/BlogSix',
  },
  {
    id: 7,
    title: ' Why Understanding Consumer Psychology is Non-Negotiable?',
    description:
      'Understanding consumer psychology is the cornerstone of successful marketing. By tapping into the mental triggers that drive purchasing decisions, marketers can craft campaigns that resonate more deeply with their audience..',
    imageUrl: imgSeven,
    link: '/BlogSeven',
  },
  {
    id: 8,
    title: ' How Emotional Thinking Can Elevate Ad Campaigns?',
    description:
      'Emotional thinking is the art of crafting campaigns that connect with your audience on a deeper, emotional level. While logic and reason are important, emotions drive actions..',
    imageUrl:imgEight,
    link: '/BlogEight',
  },
  {
    id: 9,
    title: ' What’s the Interplay Between All These Elements in a Campaign?',
    description:
      'The most successful campaigns don’t rely on just one strategy—they combine multiple approaches to create a unified experience that drives results.',
    imageUrl:imgNine,
    link: '/BlogNine',
  },
  {
    id: 10,
    title: 'Case Study – How Brand X Implemented These Strategies',
    description:
      'Let’s see how a brand successfully combines all of the discussed strategies in a real-world scenario.',
    imageUrl:imgTen,
    link: '/BlogTen',
  },
  // Add more blog posts as needed
];

const Blogs: React.FC = () => {
  return (
    <div className="bg-[#040404] scroll-smooth">




    <div className="container mx-auto px-4 py-8 flex flex-col">
      {/* Header Image Section */}
      <div className="relative w-full  ">
        <Image
          src={head}
          alt="Office Background Image"
          layout="responsive"
          width={400}
          height={400}
          className="object-cover opacity-50"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-16 z-100">
          <h2 className="text-4xl sm:text-4xl md:text-3xl lg:text-9xl font-bold text-white leading-tight">
            Blogs
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-32 flex"> {/* Added margin-top to create space below the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blogs;
