"use client";
import React from 'react'
import { useState } from 'react';
import img1 from './imgOne.png'
import img2 from './imgTwo.png'
import img3 from './imgThree.png'
import img4 from './imgFour.png'
import Image from 'next/image';
const portfolio = () => {

  const [showImg1, setShowImg1] = useState(false)
  const [showImg2, setShowImg2] = useState(false)
  const [showImg3, setShowImg3] = useState(false)
  const [showImg4, setShowImg4] = useState(false)
  return (

    <div className='flex flex-col mx-32 justify-center bg-primary '>


      <div className='flex flex-col justify-center '>
        <h1 className="flex text-8xl font-extrabold text-white justify-center ">OUR PORTFOLIO</h1>
        <h2 className='text-md flex  text-white justify-center'>
        Every project tells a story and our portfolio is the blockbuster collection. Dive into our cinematic journey of creativity and success!
        </h2>
    <div className='flex flex-col justify-center items-center mt-8 space-y-5'>
          <div className='flex cursor-pointer' onClick={() => setShowImg1(!showImg1)}>
            <Image src={img1} alt='Service 1' width={900} height={200} />
          </div>
          {showImg1 && (
            <div className="flex justify-between mt-4 bg-[#030303] p-4 rounded-lg">
              <div className='flex flex-col space-y-3'>
                <h1 className='text-3xl font-bold text-white'>ABOUT THE SERVICE</h1>
                <p className='text-white text-sm'>
                  Lorem ipsum dolor sit amet consectetur.<br />
                  Sagittis egestas risus vitae eu et massa.<br />
                  Purus leo ornare adipiscing commodo quisque ipsum libero faucibus.<br />
                  Sed metus suscipit auctor nisl nunc sit vel.<br />
                  Sagittis pellentesque sit posuere diam tincidunt.<br />
                  Egestas quis leo dui adipiscing ullamcorper.<br />
                  Turpis eu sit fusce maecenas ut.<br />
                  Auctor at scelerisque congue nunc.<br />
                  A tempor sed est semper est tincidunt nibh tempus.<br />
                  Lobortis nulla adipiscing blandit accumsan a.<br />
                  Morbi vestibulum risus ultricies purus metus cras metus porttitor.<br />
                  Nisl felis leo est pharetra nulla.<br />
                  Lorem ultricies dolor sodales feugiat aenean.
                </p>
              </div>

              <div className='h-56 p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4'>
                <h2 className='text-left font-bold text-2xl text-white'>Let's connect for a discussion</h2>
                <p className='text-left text-sm text-white'>
                  Lorem ipsum dolor sit amet consectetur.<br />
                  Nibh dapibus ut eleifend lacus volutpat quam aliquam nibh.<br /> 
                  At cursus adipiscing mattis sapien donec<br />
                  et elementum vestibulum sapien. 
                </p>
                <button className='p-2 w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300'>
                  Contact Us
                </button>
              </div>
            </div>
          )}
          <div className='flex cursor-pointer' onClick={() => setShowImg2(!showImg2)}>
            <Image src={img2} alt='Service 2' width={900} height={200} />
          </div>
          {showImg2 && (
            <div className="flex justify-between mt-4 bg-[#030303] p-4 rounded-lg">
              <div className='flex flex-col space-y-3'>
                <h1 className='text-3xl font-bold text-white'>ABOUT THE SERVICE</h1>
                <p className='text-white text-sm'>
                  Lorem ipsum dolor sit amet consectetur.<br />
                  Sagittis egestas risus vitae eu et massa.<br />
                  Purus leo ornare adipiscing commodo quisque ipsum libero faucibus.<br />
                  Sed metus suscipit auctor nisl nunc sit vel.<br />
                  Sagittis pellentesque sit posuere diam tincidunt.<br />
                  Egestas quis leo dui adipiscing ullamcorper.<br />
                  Turpis eu sit fusce maecenas ut.<br />
                  Auctor at scelerisque congue nunc.<br />
                  A tempor sed est semper est tincidunt nibh tempus.<br />
                  Lobortis nulla adipiscing blandit accumsan a.<br />
                  Morbi vestibulum risus ultricies purus metus cras metus porttitor.<br />
                  Nisl felis leo est pharetra nulla.<br />
                  Lorem ultricies dolor sodales feugiat aenean.
                </p>
              </div>

              <div className='h-56 p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4'>
                <h2 className='text-left font-bold text-2xl text-white'>Let's connect for a discussion</h2>
                <p className='text-left text-sm text-white'>
                  Lorem ipsum dolor sit amet consectetur.<br />
                  Nibh dapibus ut eleifend lacus volutpat quam aliquam nibh.<br /> 
                  At cursus adipiscing mattis sapien donec<br />
                  et elementum vestibulum sapien. 
                </p>
                <button className='p-2 w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300'>
                  Contact Us
                </button>
              </div>
            </div>
          )}
          <div className='flex cursor-pointer' onClick={() => setShowImg3(!showImg3)}>
            <Image src={img3} alt='Service 3' width={900} height={200} />
          </div>
          {showImg3 && (
            <div className="flex justify-between mt-4 bg-[#030303] p-4 rounded-lg">
              <div className='flex flex-col space-y-3'>
                <h1 className='text-3xl font-bold text-white'>ABOUT THE SERVICE</h1>
                <p className='text-white text-sm'>
                  Lorem ipsum dolor sit amet consectetur.<br />
                  Sagittis egestas risus vitae eu et massa.<br />
                  Purus leo ornare adipiscing commodo quisque ipsum libero faucibus.<br />
                  Sed metus suscipit auctor nisl nunc sit vel.<br />
                  Sagittis pellentesque sit posuere diam tincidunt.<br />
                  Egestas quis leo dui adipiscing ullamcorper.<br />
                  Turpis eu sit fusce maecenas ut.<br />
                  Auctor at scelerisque congue nunc.<br />
                  A tempor sed est semper est tincidunt nibh tempus.<br />
                  Lobortis nulla adipiscing blandit accumsan a.<br />
                  Morbi vestibulum risus ultricies purus metus cras metus porttitor.<br />
                  Nisl felis leo est pharetra nulla.<br />
                  Lorem ultricies dolor sodales feugiat aenean.
                </p>
              </div>

              <div className='h-56 p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4'>
                <h2 className='text-left font-bold text-2xl text-white'>Let's connect for a discussion</h2>
                <p className='text-left text-sm text-white'>
                  Lorem ipsum dolor sit amet consectetur.<br />
                  Nibh dapibus ut eleifend lacus volutpat quam aliquam nibh.<br /> 
                  At cursus adipiscing mattis sapien donec<br />
                  et elementum vestibulum sapien. 
                </p>
                <button className='p-2 w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300'>
                  Contact Us
                </button>
              </div>
            </div>
          )}
          <div className='flex cursor-pointer' onClick={() => setShowImg4(!showImg4)}>
            <Image src={img4} alt='Service 4' width={900} height={200} />
          </div>
          {showImg4 && (
            <div className="flex justify-between mt-4 bg-[#030303] p-4 rounded-lg">
              <div className='flex flex-col space-y-3'>
                <h1 className='text-3xl font-bold text-white'>ABOUT THE SERVICE</h1>
                <p className='text-white text-sm'>
                  Lorem ipsum dolor sit amet consectetur.<br />
                  Sagittis egestas risus vitae eu et massa.<br />
                  Purus leo ornare adipiscing commodo quisque ipsum libero faucibus.<br />
                  Sed metus suscipit auctor nisl nunc sit vel.<br />
                  Sagittis pellentesque sit posuere diam tincidunt.<br />
                  Egestas quis leo dui adipiscing ullamcorper.<br />
                  Turpis eu sit fusce maecenas ut.<br />
                  Auctor at scelerisque congue nunc.<br />
                  A tempor sed est semper est tincidunt nibh tempus.<br />
                  Lobortis nulla adipiscing blandit accumsan a.<br />
                  Morbi vestibulum risus ultricies purus metus cras metus porttitor.<br />
                  Nisl felis leo est pharetra nulla.<br />
                  Lorem ultricies dolor sodales feugiat aenean.
                </p>
              </div>

              <div className='h-56 p-4 rounded-xl bg-[#2D2D2D] flex flex-col justify-center space-y-4'>
                <h2 className='text-left font-bold text-2xl text-white'>Let's connect for a discussion</h2>
                <p className='text-left text-sm text-white'>
                  Lorem ipsum dolor sit amet consectetur.<br />
                  Nibh dapibus ut eleifend lacus volutpat quam aliquam nibh.<br /> 
                  At cursus adipiscing mattis sapien donec<br />
                  et elementum vestibulum sapien. 
                </p>
                <button className='p-2 w-32 border border-white bg-white text-black rounded-full hover:bg-gray-200 transition duration-300'>
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default portfolio