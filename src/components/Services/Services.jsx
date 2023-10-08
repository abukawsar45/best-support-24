import React, { useEffect } from 'react';
import './Services.css';
import image1 from '../../assets/image1.webp'
import image2 from '../../assets/image2.webp'
import image3 from '../../assets/image3.webp'
import image4 from '../../assets/image4.webp'
import image5 from '../../assets/image5.webp'
import image6 from '../../assets/image6.webp'
import image7 from '../../assets/image7.webp'
import image8 from '../../assets/image8.webp'
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsIndent } from "react-icons/bs";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Services = () => {
  // console.log('object')
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='my-4 md:my-8 lg:my-20 mx-2 md:mx-4 lg:mx-8 ' data-aos='fade-up' >
      <div>
        {/* banner section */ }
        <div className='my-2 mx-2 w-full md:w-3/4'>
          <h1 className=' text-4xl lg:text-6xl font-bold custom-font my-2 md:my-8'>
            We build digital <br /><span className='text-red-700'>for a living</span>
          </h1>
          <p className=' my-2 md:my-4 '>
            Codigo comprises a team of brilliant minds and innovative individuals who create digital products people love to use.
          </p>
          <p className=' my-2 md:my-4'>
            We22 believe that seamless, user-centric and meaningful experiences transcend mediums and touchpoints.
          </p>
        </div>
        {/* animation section */ }
        <div data-aos='fade-up' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 my-4' >
          
          {/* 1st */ }
          <div className=' mt-4 md:mx-auto py-4 px-2  group '>
            <div className="md:hidden">
              <h5 className='mt-2 text-xl font-semibold'>User Experiences</h5>
              <h3 className='mb-2 text-2xl font-bold'>We Are All Users</h3>
            </div>
            <div className='relative h-[200px] md:h-96 lg:h-[400px] w-[200px] md:w-96 lg:w-[400px]   md:mx-auto  z-10 bg-yellow-300 scale-50 md:group-hover:scale-100  transition-transform origin-center rounded-[50%] duration-500 ease-in-out'>
              <div className={ `absolute opacity-0 p-2 md:p-6 lg:p-12   flex flex-col justify-start  md:justify-center items-center  md:group-hover:opacity-100 transition-opacity duration-300` }>
                <h5 className='my-2 text-xs font-semibold'>User Experiences</h5>
                <h3 className='mt-2 text-2xl font-bold'>We Are All Users</h3>
                <p className=' my-2'  >
                  With over 200 digital projects and counting, we get what users want and
                  need pretty easily. UX is the core to everything we build. In Codigo, we
                  take user research, competitive analysis, wireframes, user flows, content
                  maps very seriously.
                </p>
              </div>
              <div className='flex justify-center items-center'>

                <img className='absolute  my-auto md:mx-auto p-4 md:p-0 w-48 md:w-60 md:group-hover:w-24  ease-in-out duration-500 rounded-full  mb-[-90%]  md:group-hover:-mb-[195%] '
                  src={ image1 } alt={ image1 } />
              </div>

            </div>
            <div className='hidden md:block'>
              <div className='my-2 md:mx-auto md:group-hover:-mt-40 z-0 md:group-hover:opacity-0 md:group-hover:top-[50%] md:group-hover:-translate-y-[30%] md:group-hover:transition-transform duration-500 ease-out'>
                <h5 className='text-2xl font-bold md:text-center'>User Experiences</h5>

              </div>

              {/*  */ }
              <div className='my-2 md:text-center md:group-hover:opacity-0 md:group-hover:translate-y-[-50%] md:group-hover:duration-500 md:group-hover:ease-in'>
                <h6 className='mt-2 md:text-center font-light'>How users interact</h6>
              </div>

              {/*  */ }
            </div>
            <div className="md:hidden">
              <p className=' my-2'  >
                With over 200 digital projects and counting, we get what users want and
                need pretty easily. UX is the core to everything we build. In Codigo, we
                take user research, competitive analysis, wireframes, user flows, content
                maps very seriously.
              </p>
            </div>

          </div>
          {/* 2nd */ }
          <div className=' mt-4 md:mx-auto py-4 px-2  group '>
            <div className="md:hidden">
              <h5 className='mt-2 text-xl font-semibold'>Interface Design</h5>
              <h3 className='mb-2 text-2xl font-bold'>We live to design</h3>
            </div>
            <div className='relative h-[200px] md:h-96 lg:h-[400px] w-[200px] md:w-96 lg:w-[400px]   md:mx-auto  z-10 bg-red-200 scale-50 md:group-hover:scale-100  transition-transform origin-center rounded-[50%] duration-500 ease-in-out'>
              <div className={ `absolute opacity-0 p-2 md:p-6 lg:p-12   flex flex-col justify-start  md:justify-center items-center  md:group-hover:opacity-100 transition-opacity duration-300` }>
                <h5 className='my-2 text-xs font-semibold'>Interface Design</h5>
                <h3 className='my-t text-2xl font-bold'>We Live to design</h3>
                <p className='my-2'  >
                  We have pixel OCD. We keep ourselves constantly inspired with the hype and trends in the design industry to craft gorgeous interactions for your brand.
                </p>
              </div>
              <div className='flex justify-center items-center'>

                <img className='absolute  my-auto md:mx-auto p-4 md:p-0 w-48 md:w-60 md:group-hover:w-24  ease-in-out duration-500 rounded-full  mb-[-90%]  md:group-hover:-mb-[195%] '
                  src={ image2 } alt={ image2 } />
              </div>

            </div>
            <div className='hidden md:block'>
              <div className='my-2 md:mx-auto md:group-hover:-mt-40 z-0 md:group-hover:opacity-0 md:group-hover:top-[50%] md:group-hover:-translate-y-[30%] md:group-hover:transition-transform duration-500 ease-out'>
                <h5 className='text-2xl font-bold text-center'>Interface Design</h5>

              </div>

              {/*  */ }
              <div className='my-2 md:text-center md:group-hover:opacity-0 md:group-hover:translate-y-[-50%] md:group-hover:duration-500 md:group-hover:ease-in'>
                <h6 className='mt-2 text-center font-light'>For all screens in the world</h6>
              </div>

              {/*  */ }
            </div>
            <div className="md:hidden">
              <p className=' my-2'  >
                We have pixel OCD. We keep ourselves constantly inspired with the hype and trends in the design industry to craft gorgeous interactions for your brand.
              </p>
            </div>

          </div>

          {/* 3rdd */ }
          <div className=' mt-4 md:mx-auto py-4 px-2  group '>
            <div className="md:hidden">
              <h5 className='mt-2 text-xl font-semibold'>Consultancy</h5>
              <h3 className='mb-2 text-2xl font-bold'>For proof-of-concepts</h3>
            </div>
            <div className='relative h-[200px] md:h-96 lg:h-[400px] w-[200px] md:w-96 lg:w-[400px]   md:mx-auto  z-10 bg-red-500 scale-50 md:group-hover:scale-100  transition-transform origin-center rounded-[50%] duration-500 ease-in-out'>
              <div className={ `absolute text-white  opacity-0 p-2 md:p-6 lg:p-12   flex flex-col justify-start  md:justify-center items-center  md:group-hover:opacity-100 transition-opacity duration-300` }>
                <h5 className='my-2 text-xs font-semibold'>Consultancy</h5>
                <h3 className='my-t text-2xl font-bold'>We can help validate your ideas.</h3>
                <p className='my-2'  >
                  Ready to take the first step? Let us help with a minimum viable product. Tap on our brains and experience to create a semi-product to test the waters. Consult us on user experience, how the product could look like and turn it into a rapid prototype.
                </p>
              </div>
              <div className='flex justify-center items-center'>

                <img className='absolute  my-auto md:mx-auto p-4 md:p-0 w-48 md:w-60 md:group-hover:w-24  ease-in-out duration-500 rounded-full  mb-[-90%]  md:group-hover:-mb-[195%] '
                  src={ image3 } alt={ image3 } />
              </div>

            </div>
            <div className='hidden md:block'>
              <div className='my-2 md:mx-auto md:group-hover:-mt-40 z-0 md:group-hover:opacity-0 md:group-hover:top-[50%] md:group-hover:-translate-y-[30%] md:group-hover:transition-transform duration-500 ease-out'>
                <h5 className='text-2xl font-bold text-center'>Consultancy</h5>

              </div>

              {/*  */ }
              <div className='my-2 md:text-center md:group-hover:opacity-0 md:group-hover:translate-y-[-50%] md:group-hover:duration-500 md:group-hover:ease-in'>
                <h6 className='mt-2 text-center font-light'>For proof-fo-concepts</h6>
              </div>

              {/*  */ }
            </div>
            <div className="md:hidden">
              <p className=' my-2'  >
                Consultancy
                Ready to take the first step? Let us help with a minimum viable product. Tap on our brains and experience to create a semi-product to test the waters. Consult us on user experience, how the product could look like and turn it into a rapid prototype.
              </p>
            </div>

          </div>
          {/* 4nd */ }
          <div className=' mt-4 md:mx-auto py-4 px-2  group '>
            <div className="md:hidden">
              <h5 className='mt-2 text-xl font-semibold'>Mobile Development</h5>
              <h3 className='mb-2 text-2xl font-bold'>We are Apple & Android friendly</h3>
            </div>
            <div className='relative h-[200px] md:h-96 lg:h-[400px] w-[200px] md:w-96 lg:w-[400px]   md:mx-auto  z-10 bg-blue-500 scale-50 md:group-hover:scale-100  transition-transform origin-center rounded-[50%] duration-500 ease-in-out'>
              <div className={ `absolute text-white  opacity-0 p-2 md:p-6 lg:p-12   flex flex-col justify-start  md:justify-center items-center  md:group-hover:opacity-100 transition-opacity duration-300` }>
                <h5 className='my-2 text-xs font-semibold'>Mobile Development</h5>
                <h3 className='my-t text-2xl font-bold'>We are Apple & Android friendly.</h3>
                <p className='my-2'  >
                  Native, ReactNative, payment gateway integration, bespoke CMS, consuming APIs from existing sources and all things mobile app relevant. We’ve mostly done it all.
                </p>
              </div>
              <div className='flex justify-center items-center'>

                <img className='absolute  my-auto md:mx-auto p-4 md:p-0 w-48 md:w-60 md:group-hover:w-24  ease-in-out duration-500 rounded-full  mb-[-90%]  md:group-hover:-mb-[195%] '
                  src={ image4 } alt={ image4 } />
              </div>

            </div>
            <div className='hidden md:block'>
              <div className='my-2 md:mx-auto md:group-hover:-mt-40 z-0 md:group-hover:opacity-0 md:group-hover:top-[50%] md:group-hover:-translate-y-[30%] md:group-hover:transition-transform duration-500 ease-out'>
                <h5 className='text-2xl font-bold text-center'>Mobile Development</h5>

              </div>

              {/*  */ }
              <div className='my-2 md:text-center md:group-hover:opacity-0 md:group-hover:translate-y-[-50%] md:group-hover:duration-500 md:group-hover:ease-in'>
                <h6 className='mt-2 text-center font-light'>iOS & Android</h6>
              </div>

              {/*  */ }
            </div>
            <div className="md:hidden">
              <p className=' my-2'  >
                Native, ReactNative, payment gateway integration, bespoke CMS, consuming APIs from existing sources and all things mobile app relevant. We’ve mostly done it all.
              </p>
            </div>

          </div>

          {/* 5th */ }
          <div className=' mt-4 md:mx-auto py-4 px-2  group '>
            <div className="md:hidden">
              <h5 className='mt-2 text-xl font-semibold'>Web Development</h5>
              <h3 className='mb-2 text-2xl font-bold'>We weave front-end magic.</h3>
            </div>
            <div className='relative h-[200px] md:h-96 lg:h-[400px] w-[200px] md:w-96 lg:w-[400px]   md:mx-auto  z-10 bg-orange-400 scale-50 md:group-hover:scale-100  transition-transform origin-center rounded-[50%] duration-500 ease-in-out'>
              <div className={ `absolute opacity-0 p-2 md:p-6 lg:p-12   flex flex-col justify-start  md:justify-center items-center  md:group-hover:opacity-100 transition-opacity duration-300` }>
                <h5 className='my-2 text-xs font-semibold'>Web Development</h5>
                <h3 className='my-t text-2xl font-bold'>
                  We weave front-end magic.</h3>
                <p className='my-2'  >
                  Web Development
                  Web portals, microsites (yes, they still exist), web apps - responsive, powered by WordPress or supported by a bespoke CMS. No screen sizes scare us, only IE does.
                </p>
              </div>
              <div className='flex justify-center items-center'>

                <img className='absolute  my-auto md:mx-auto p-4 md:p-0 w-48 md:w-60 md:group-hover:w-24  ease-in-out duration-500 rounded-full  mb-[-90%]  md:group-hover:-mb-[195%] '
                  src={ image5 } alt={ image5 } />
              </div>

            </div>
            <div className='hidden md:block'>
              <div className='my-2 md:mx-auto md:group-hover:-mt-40 z-0 md:group-hover:opacity-0 md:group-hover:top-[50%] md:group-hover:-translate-y-[30%] md:group-hover:transition-transform duration-500 ease-out'>
                <h5 className='text-2xl font-bold text-center'>Web Development</h5>

              </div>

              {/*  */ }
              <div className='my-2 md:text-center md:group-hover:opacity-0 md:group-hover:translate-y-[-50%] md:group-hover:duration-500 md:group-hover:ease-in'>
                <h6 className='mt-2 text-center font-light'>For Bussiness any shape and size</h6>
              </div>

              {/*  */ }
            </div>
            <div className="md:hidden">
              <p className=' my-2'  >
                Web Development
                Web portals, microsites (yes, they still exist), web apps - responsive, powered by WordPress or supported by a bespoke CMS. No screen sizes scare us, only IE does.
              </p>
            </div>

          </div>
          {/* 6th */ }

          <div className=' mt-4 md:mx-auto py-4 px-2  group '>
            <div className="md:hidden">
              <h5 className='mt-2 text-xl font-semibold'>Mobile Development</h5>
              <h3 className='mb-2 text-2xl font-bold'>We are Apple & Android friendly</h3>
            </div>
            <div className='relative h-[200px] md:h-96 lg:h-[400px] w-[200px] md:w-96 lg:w-[400px]   md:mx-auto  z-10 bg-green-500 scale-50 md:group-hover:scale-100  transition-transform origin-center rounded-[50%] duration-500 ease-in-out'>
              <div className={ `absolute text-white  opacity-0 p-2 md:p-6 lg:p-12   flex flex-col justify-start  md:justify-center items-center  md:group-hover:opacity-100 transition-opacity duration-300` }>
                <h5 className='my-2 text-xs font-semibold'>CMS</h5>
                <h3 className='my-t text-2xl font-bold'>We give u data.</h3>
                <p className='my-2'  >
                  All bespoke CMS we build comes with a dashboard so you can monitor the activities on your product. Edit or add content at your convenience - we’ll customise everything to your wants and needs.
                </p>
              </div>
              <div className='flex justify-center items-center'>

                <img className='absolute  my-auto md:mx-auto p-4 md:p-0 w-48 md:w-60 md:group-hover:w-24  ease-in-out duration-500 rounded-full  mb-[-90%]  md:group-hover:-mb-[195%] '
                  src={ image6 } alt={ image6 } />
              </div>

            </div>
            <div className='hidden md:block'>
              <div className='my-2 md:mx-auto md:group-hover:-mt-40 z-0 md:group-hover:opacity-0 md:group-hover:top-[50%] md:group-hover:-translate-y-[30%] md:group-hover:transition-transform duration-500 ease-out'>
                <h5 className='text-2xl font-bold text-center'>CMS</h5>

              </div>

              {/*  */ }
              <div className='my-2 md:text-center md:group-hover:opacity-0 md:group-hover:translate-y-[-50%] md:group-hover:duration-500 md:group-hover:ease-in'>
                <h6 className='mt-2 text-center font-light'>Manage your own content</h6>
              </div>

              {/*  */ }
            </div>
            <div className="md:hidden">
              <p className=' my-2'  >
                All bespoke CMS we build comes with a dashboard so you can monitor the activities on your product. Edit or add content at your convenience - we’ll customise everything to your wants and needs.
              </p>
            </div>

          </div>
          {/* 7th */ }

          <div className=' mt-4 md:mx-auto py-4 px-2  group '>
            <div className="md:hidden">
              <h5 className='mt-2 text-xl font-semibold'>Emerging Tech</h5>
              <h3 className='mb-2 text-2xl font-bold'>We have all the fancy gadgets.</h3>
            </div>
            <div className='relative h-[200px] md:h-96 lg:h-[400px] w-[200px] md:w-96 lg:w-[400px]   md:mx-auto  z-10 bg-pink-900 scale-50 md:group-hover:scale-100  transition-transform origin-center rounded-[50%] duration-500 ease-in-out'>
              <div className={ `absolute text-white  opacity-0 p-2 md:p-6 lg:p-12   flex flex-col justify-start  md:justify-center items-center  md:group-hover:opacity-100 transition-opacity duration-300` }>
                <h5 className='my-2 text-xs font-semibold'>Emerging Tech
                </h5>
                <h3 className='my-t text-2xl font-bold'>We have all the fancy gadgets.</h3>
                <p className='my-2'  >
                  Bluetooth, beacon, NFC, Augmented reality, IoT and more - we know and we have all these buzzwords in our office. We put Superman in AR before Pokemon Go did.
                </p>
              </div>
              <div className='flex justify-center items-center'>
                <img className='absolute  my-auto md:mx-auto p-4 md:p-0 w-48 md:w-60 md:group-hover:w-24  ease-in-out duration-500 rounded-full  mb-[-90%]  md:group-hover:-mb-[195%] '
                  src={ image7 } alt={ image7 } />
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='my-2 md:mx-auto md:group-hover:-mt-40 z-0 md:group-hover:opacity-0 md:group-hover:top-[50%] md:group-hover:-translate-y-[30%] md:group-hover:transition-transform duration-500 ease-out'>
                <h5 className='text-2xl font-bold text-center'>Emerging Tech</h5>
              </div>
              {/*  */ }
              <div className='my-2 md:text-center md:group-hover:opacity-0 md:group-hover:translate-y-[-50%] md:group-hover:duration-500 md:group-hover:ease-in'>
                <h6 className='mt-2 text-center font-light'>Because we are geeks</h6>
              </div>
              {/*  */ }
            </div>
            <div className="md:hidden">
              <p className=' my-2'  >
                Bluetooth, beacon, NFC, Augmented reality, IoT and more - we know and we have all these buzzwords in our office. We put Superman in AR before Pokemon Go did.
              </p>
            </div>

          </div>
          {/* 8th */ }
          <div className=' mt-4 md:mx-auto py-4 px-2  group '>
            <div className="md:hidden">
              <h5 className='mt-2 text-xl font-semibold'>Coaching</h5>
              <h3 className='mb-2 text-2xl font-bold'>We&apos;d love to share.</h3>
            </div>
            <div className='relative h-[200px] md:h-96 lg:h-[400px] w-[200px] md:w-96 lg:w-[400px]   md:mx-auto  z-10 bg-rose-300 scale-50 md:group-hover:scale-100  transition-transform origin-center rounded-[50%] duration-500 ease-in-out'>
              <div className={ `absolute text-white  opacity-0 p-2 md:p-6 lg:p-12   flex flex-col justify-start  md:justify-center items-center  md:group-hover:opacity-100 transition-opacity duration-300` }>
                <h5 className='my-2 text-xs font-semibold'>Coaching
                </h5>
                <h3 className='my-t text-2xl font-bold'>We&apos;d love to share.
                  </h3>
                <p className='my-2'>
                  Attend our Masterclasses with the Codigo syllabus or talk to us to customise sessions just for your business teams.  <a href="" className='font-bold'>Learn more here</a>
                </p>
              </div>
              <div className='flex justify-center items-center'>
                <img className='absolute  my-auto md:mx-auto p-4 md:p-0 w-48 md:w-60 md:group-hover:w-24  ease-in-out duration-500 rounded-full  mb-[-90%]  md:group-hover:-mb-[195%] '
                  src={ image8 } alt={ image8 } />
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='my-2 md:mx-auto md:group-hover:-mt-40 z-0 md:group-hover:opacity-0 md:group-hover:top-[50%] md:group-hover:-translate-y-[30%] md:group-hover:transition-transform duration-500 ease-out'>
                <h5 className='text-2xl font-bold text-center'>Coaching</h5>
              </div>
              {/*  */ }
              <div className='my-2 md:text-center md:group-hover:opacity-0 md:group-hover:translate-y-[-50%] md:group-hover:duration-500 md:group-hover:ease-in'>
                <h6 className='mt-2 text-center font-light'>Come learn our secrets</h6>
              </div>
              {/*  */ }
            </div>
            <div className="md:hidden">
              <p className=' my-2'  >
                Attend our Masterclasses with the Codigo syllabus or talk to us to customise sessions just for your business teams. <a href="" className='font-bold'>Learn more here</a>
              </p>
            </div>

          </div>

         
          
         

        </div>
      </div>

      {/*  */ }
      <div data-aos='fade-up' className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <Link
          to=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={ `mb-3 text-2xl font-semibold` }>
            Docs{ ' ' }
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <BsIndent />
            </span>
          </h2>
          <p className={ `m-0 max-w-[30ch] text-sm opacity-50` }>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>
        <hr className='md:hidden w-full border-gray-300 mt-4' />

        <Link
          to=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={ `mb-3 text-2xl font-semibold` }>
            Learn{ ' ' }
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <BsIndent />
            </span>
          </h2>
          <p className={ `m-0 max-w-[30ch] text-sm opacity-50` }>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </Link>
        <hr className='md:hidden w-full border-gray-300 mt-4' />

        <Link
          to=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={ `mb-3 text-2xl font-semibold` }>
            Templates{ ' ' }
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <BsIndent />
            </span>
          </h2>
          <p className={ `m-0 max-w-[30ch] text-sm opacity-50` }>
            Explore the Next.js 13 playground.
          </p>
        </Link>
        <hr className='md:hidden w-full border-gray-300 mt-4' />
        <Link
          to=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={ `mb-3 text-2xl font-semibold` }>
            Deploy{ ' ' }
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <BsIndent />
            </span>
          </h2>
          <p className={ `m-0 max-w-[30ch] text-sm opacity-50` }>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </Link>
        <hr className='md:hidden w-full border-gray-300 mt-4' />
        <Link
          to=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={ `mb-3 text-2xl font-semibold` }>
            Tech for Hire{ ' ' }
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <BsIndent />
            </span>
          </h2>
          <p className={ `m-0 max-w-[30ch] text-sm opacity-50` }>
            Hire experienced tech talents
          </p>
        </Link>
      </div>
      {/*  */ }

      {/*  */ }

      <footer data-aos='fade-up' className='my-4 md:my-8 lg:my-12'>
        <div className="flex justify-center items-center gap-5">
          <Link> <span><BsFacebook className="text-2xl hover:text-blue-500" /></span> </Link>
          <Link> <span><BsTwitter className="text-2xl hover:text-blue-500" /></span> </Link>
          <Link> <span><BsInstagram className="text-2xl hover:text-blue-500" /></span> </Link>
          <Link> <span><BsLinkedin className="text-2xl hover:text-blue-500" /></span> </Link>

        </div>
        <div className="my-4 text-center">
          <p className='text-zinc-700 my-2' >Copyright  &#169; Codigo - Mobile App Developer Singapore</p>
          <p className='text-zinc-700 my-2' >+65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970</p>
        </div>
      </footer>
    </div>
  );
};

export default Services;