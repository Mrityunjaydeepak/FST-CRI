
"use client";
import React from 'react';
import Image from 'next/image';
import office from './Container.png';

const Solutions = () => {
  return (
    <div className="flex flex-col mx-32 justify-center bg-primary">
      
      <div className="relative mt-24 h-screen sm:h-96 bg-primary">
        <Image
          src={office}
          alt="Office Background Image"
          fill // Updated from layout='fill' to fill
          className="object-cover opacity-50"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
          <h2 className="text-8xl sm:text-5xl md:text-7xl font-bold text-left text-white">
            OUR <span className="block">SOLUTIONS</span>
          </h2>
        </div>
      </div>

      <div className="flex justify-between border border-secondary border-t-2 border-b-0 border-l-0 border-r-0 p-4 mt-24">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold text-white">Lorem Ipsum</h1>
          <p className="text-left font-thin">
            Lorem ipsum dolor sit amet consectetur.<br />
            In aenean augue mi id. Amet nulla mattis <br />
            tincidunt velit tempus natoque ultrices<br />
            varius. Nullam viverra lacus sit eros porttitor<br />
            id sed. Integer nunc lectus mattis facilisis neque<br />
            eleifend. Consequat eros integer venenatis sagittis<br />
            pellentesque libero gravida. Commodo vitae adipiscing<br />
            eget auctor nullam dui lorem et in. Ultricies <br />
            donec egestas tellus vitae vel nunc cras.<br />
            Suspendisse amet nunc sit elementum suscipit <br />
            
            <span className="block text-left font-thin mt-8">
              amet nisl aliquam porttitor. Neque eget nunc ipsum <br />
              ipsum sit cursus sociis luctus tortor. Nunc neque elementum<br />
              is sapien. Rhoncus eu pellentesque et egestas non<br />
              tum aenean nibh. Est ipsum risus nunc lacus parturient<br />
              as. In dolor ac vel et gravida cursus euismod. Dolor<br />
              dolor enim et eu elit varius sed consequat ullamcorper. <br />
              Vitae maecenas proin id ultricies. Porta enim et a nibh facilisi nunc in turpis eget.<br />
              Mauris ristique in lectus viverra pellentesque. <br />
              Aliquam sodales dis non tristique porttitor. <br />
              Ante nunc neque magnis fames aliquam. <br />
              Nam gravida aliquet purus sit mattis rhoncus vel. <br />
              Erat dolor urna morbi sem risus massa facilisis tincidunt.
            </span>
          </p>
        </div>
        <div className='flex flex-col space-y-2'>
          <div className='bg-[#2d2d2d] flex flex-col justify-center rounded-xl h-64  p-8 w-auto'>
            <h1 className='text-white flex justify-center items-center '>Lorem ipsum dolor sit amet consectetur.<br /> Suspendisse risus nisl erat ornare consequat.</h1>

          </div>
          <div className='bg-[#2d2d2d] flex flex-col justify-center rounded-xl h-64  p-8 w-auto'>
            <h1 className='text-white flex justify-center items-center '>Lorem ipsum dolor sit amet consectetur.<br /> Suspendisse risus nisl erat ornare consequat.</h1>

          </div>
          <div className='bg-[#2d2d2d] flex flex-col justify-center rounded-xl h-64  p-8 w-auto'>
            <h1 className='text-white flex justify-center items-center '>Lorem ipsum dolor sit amet consectetur.<br /> Suspendisse risus nisl erat ornare consequat.</h1>

          </div>
          <div className='bg-[#2d2d2d] flex flex-col justify-center rounded-xl h-64  p-8 w-auto'>
            <h1 className='text-white flex justify-center items-center '>Lorem ipsum dolor sit amet consectetur.<br /> Suspendisse risus nisl erat ornare consequat.</h1>

          </div>
          <div className='bg-[#2d2d2d] flex flex-col justify-center rounded-xl h-64  p-8 w-auto'>
            <h1 className='text-white flex justify-center items-center '>Lorem ipsum dolor sit amet consectetur.<br /> Suspendisse risus nisl erat ornare consequat.</h1>

          </div>
          
           </div> {/* Removed invalid 'c' attribute */}
      </div>

    </div>
  );
}

export default Solutions;
