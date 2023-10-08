import React from 'react';
import './Services.css';
import image1 from '../../assets/image1.webp'
import image2 from '../../assets/image2.webp'
import image3 from '../../assets/image3.webp'
import image4 from '../../assets/image4.webp'
import image5 from '../../assets/image5.webp'
import image6 from '../../assets/image6.webp'
import image7 from '../../assets/image7.webp'
import image8 from '../../assets/image8.webp'


const Services = () => {
  return (
    <div className='my-4 md:my-8 lg:my-20 mx-2 md:mx-4 lg:mx-8 '>
      <div>
        {/* banner section */}
        <div className='my-2 mx-2 w-full md:w-3/4'>
          <h1 className=' text-4xl lg:text-6xl font-bold custom-font my-2 md:my-8'>
            We build digital <br /><span className='text-red-700'>for a living</span>
          </h1>
          <p className='my-2 md:my-4 lg:my-6'>
            Codigo comprises a team of brilliant minds and innovative individuals who create digital products people love to use.
          </p>
          <p className='my-2 md:my-4 lg:my-6'>
            We believe that seamless, user-centric and meaningful experiences transcend mediums and touchpoints.
          </p>
        </div>
        {/* animation section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 my-4' >
          {/* 1st */}
          <div className='relative mt-4 mb-2  md:w-full lg:w-[3/4] md:h-full lg:h-[3/4]  group '>
            <div className="md:hidden">
              <h5 className='mt-2 text-xl font-semibold'>User Experiences</h5>
              <h3 className='mb-2 text-2xl font-bold'>We Are All Users</h3>
            </div>
            <div className='text-center flex h-[200px] md:h-96 lg:h-[400px] w-[200px] md:w-96 lg:w-[400px] bottom-0  md:mx-auto p-12 z-10 bg-yellow-300 scale-50 md:group-hover:scale-100  transition-transform origin-center rounded-[50%] duration-500 ease-in'>
              <div className={`opacity-0 flex flex-col justify-center md:group-hover:opacity-100 transition-opacity duration-300`}>
                <h5 className='my-2 text-xs font-semibold'>User Experiences</h5>
                <h3 className='my-2 text-2xl font-bold'>We Are All Users</h3>
                <p className='my-4'>
                  With over 200 digital projects and counting, we get what users want and
                  need pretty easily. UX is the core to everything we build. In Codigo, we
                  take user research, competitive analysis, wireframes, user flows, content
                  maps very seriously.
                </p>
              </div>
              <img className='absolute md:px-12 md:bottom-[25%] w-2/4  md:w-auto   md:group-hover:mx-auto  md:group-hover:-bottom-[30%]  md:group-hover:-translate-y-[-10%] md:group-hover:transition-transform duration-500 ease-in '
                src={image1} alt="" />


            </div>
            <div className='hidden md:block'>
              <div className='my-2 md:group-hover:-mt-40 z-0 md:group-hover:opacity-0 md: group-hover:top-[50%] md:group-hover:-translate-y-[30%] md: group-hover:transition-transform duration-500 ease-out'>
                <h5 className='text-2xl font-bold text-center'>User Experiences</h5>

              </div>

              {/*  */}
              <div className='my-2 group group-hover:opacity-0 group-hover:translate-y-[-50%] group-hover:duration-500 group-hover:ease-in'>
                <h6 className='mt-2 text-center font-light'>How users interact</h6>
              </div>

              {/*  */}
            </div>
            <div className="md:hidden">
              <p className='-my-4'>
                With over 200 digital projects and counting, we get what users want and
                need pretty easily. UX is the core to everything we build. In Codigo, we
                take user research, competitive analysis, wireframes, user flows, content
                maps very seriously.
              </p>
            </div>

          </div>
          {/* 2nd */}
          <div className='relative mt-4 mb-2  md:w-full lg:w-[3/4] md:h-full lg:h-[3/4]  group '>
            <div className="md:hidden">
              <h5 className='mt-2 text-xl font-semibold'>Interface Design</h5>
              <h3 className='mb-2 text-2xl font-bold'>We live to design</h3>
            </div>
            <div className='text-center flex h-[200px] md:h-96 lg:h-[400px] w-[200px] md:w-96 lg:w-[400px] bottom-0 md:mx-auto p-12 z-10 bg-red-200 scale-50 md:group-hover:scale-100  transition-transform origin-center rounded-[50%] duration-500 ease-in'>
              <div className={`opacity-0 flex flex-col justify-center md:group-hover:opacity-100 transition-opacity duration-300`}>
                <h5 className='my-2 text-xs font-semibold'>Interface Design</h5>
                <h3 className='my-2 text-2xl font-bold'>We Live to design</h3>
                <p className='my-4'>
                  We have pixel OCD. We keep ourselves constantly inspired with the hype and trends in the design industry to craft gorgeous interactions for your brand.
                </p>
              </div>
              <img className='absolute md:px-12 md:bottom-[25%] w-2/4  md:w-auto   md:group-hover:mx-auto md:group-hover:-bottom-[30%]  md:group-hover:-translate-y-[-10%] md:group-hover:transition-transform duration-500 ease-in '
                src={image2} alt={image2} />


            </div>
            <div className='hidden md:block'>
              <div className='my-2 md:group-hover:-mt-40 z-0 md:group-hover:opacity-0 md: group-hover:top-[50%] md:group-hover:-translate-y-[30%] md: group-hover:transition-transform duration-500 ease-out'>
                <h5 className='text-2xl font-bold text-center'>Interface Design</h5>

              </div>

              {/*  */}
              <div className='my-2 group group-hover:opacity-0 group-hover:translate-y-[-50%] group-hover:duration-500 group-hover:ease-in'>
                <h6 className='mt-2 text-center font-light'>For all screens in the world</h6>
              </div>

              {/*  */}
            </div>
            <div className="md:hidden">
              <p className='-my-4'>
                We have pixel OCD. We keep ourselves constantly inspired with the hype and trends in the design industry to craft gorgeous interactions for your brand.
              </p>
            </div>

          </div>

          {/* 3rdd */}
          <div className='relative mt-4 mb-2  md:w-full lg:w-[3/4] md:h-full lg:h-[3/4]  group '>
            <div className="md:hidden">
              <h5 className='mt-2 text-xl font-semibold'>User Experiences</h5>
              <h3 className='mb-2 text-2xl font-bold'>We Are All Users</h3>
            </div>
            <div className='text-center flex h-[200px] md:h-96 lg:h-[400px] w-[200px] md:w-96 lg:w-[400px] bottom-0  md:mx-auto p-12 z-10 bg-red-500 scale-50 md:group-hover:scale-100  transition-transform origin-center rounded-[50%] duration-500 ease-in'>
              <div className={`opacity-0 flex flex-col justify-center md:group-hover:opacity-100 transition-opacity duration-300`}>
                <h5 className='my-2 text-xs font-semibold'>User Experiences</h5>
                <h3 className='my-2 text-2xl font-bold'>We Are All Users</h3>
                <p className='my-4'>
                  With over 200 digital projects and counting, we get what users want and
                  need pretty easily. UX is the core to everything we build. In Codigo, we
                  take user research, competitive analysis, wireframes, user flows, content
                  maps very seriously.
                </p>
              </div>
              <img className='absolute md:px-12 md:bottom-[25%] w-2/4  md:w-auto   md:group-hover:mx-auto  md:group-hover:-bottom-[30%]  md:group-hover:-translate-y-[-10%] md:group-hover:transition-transform duration-500 ease-in '
                src={image3} alt={image3} />


            </div>
            <div className='hidden md:block'>
              <div className='my-2 md:group-hover:-mt-40 z-0 md:group-hover:opacity-0 md: group-hover:top-[50%] md:group-hover:-translate-y-[30%] md: group-hover:transition-transform duration-500 ease-out'>
                <h5 className='text-2xl font-bold text-center'>User Experiences</h5>

              </div>

              {/*  */}
              <div className='my-2 group group-hover:opacity-0 group-hover:translate-y-[-50%] group-hover:duration-500 group-hover:ease-in'>
                <h6 className='mt-2 text-center font-light'>How users interact</h6>
              </div>

              {/*  */}
            </div>
            <div className="md:hidden">
              <p className='-my-4'>
                With over 200 digital projects and counting, we get what users want and
                need pretty easily. UX is the core to everything we build. In Codigo, we
                take user research, competitive analysis, wireframes, user flows, content
                maps very seriously.
              </p>
            </div>

          </div>




        </div>
      </div>
    </div>
  );
};

export default Services;