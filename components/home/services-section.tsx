"use client";

import React, { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const teamMembers = [
  {
    name: "Jean Dupont",
    role: "Directeur Marketing",
    description: "Expert en stratégies d'acquisition et en optimisation des campagnes marketing."
  },
  {
    name: "Jean Dupont",
    role: "Directeur Marketing",
    description: "Expert en stratégies d'acquisition et en optimisation des campagnes marketing.",
    featured: true
  },
  {
    name: "Jean Dupont",
    role: "Directeur Marketing",
    description: "Expert en stratégies d'acquisition et en optimisation des campagnes marketing."
  },
  {
    name: "Jean Dupont",
    role: "Directeur Marketing",
    description: "Expert en stratégies d'acquisition et en optimisation des campagnes marketing."
  },
  {
    name: "Jean Dupont",
    role: "Directeur Marketing",
    description: "Expert en stratégies d'acquisition et en optimisation des campagnes marketing."
  },
  {
    name: "Jean Dupont",
    role: "Directeur Marketing",
    description: "Expert en stratégies d'acquisition et en optimisation des campagnes marketing."
  }
];


const serviceCategories = [
  "SEO",
  "Paid Ads",
  "Outbound & AI",
  "Sales Ops",
  "CRM",
  "Automatisation"
];

// Triple the categories for smooth looping
const allServiceCategories = [...serviceCategories, ...serviceCategories, ...serviceCategories];

const serviceCategories2 = [
  "Growth Hacking",
  "Web Development",
  "Data Analytics",
  "Content Marketing",
  "Social Media",
  "Email Marketing"
];

// Triple the second set of categories for smooth looping
const allServiceCategories2 = [...serviceCategories2, ...serviceCategories2, ...serviceCategories2];

export function ServicesSection() {
  // Create refs for the marquees
  const marqueeRtlRef = useRef<HTMLDivElement>(null);
  const marqueeLtrRef = useRef<HTMLDivElement>(null);

  // Handle service item click
  const handleServiceClick = (service: string) => {
    console.log(`Service clicked: ${service}`);
    // You can add navigation or open a modal here
    alert(`You clicked on ${service}`);
  };

  return (
    <section className="w-full pt-12 sm:pt-16 md:pt-20 text-white relative overflow-hidden">

      {/* First row: Right to Left marquee */}
      <div className="marquee-container mb-2 sm:mb-4 mt-2 sm:mt-4 lg:mb-6 lg:mt-6 overflow-hidden" ref={marqueeRtlRef}>
        <div className="marquee-content-rtl">
          {allServiceCategories.map((category, index) => (
            <div
              key={`rtl-${index}`}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold whitespace-nowrap mr-2 sm:mr-4 flex items-center service-item"
              onClick={() => handleServiceClick(category)}
            >
              {category}
              <img src='/Assets/Arrow circle white.png' className='w-[3vw] ml-2 sm:ml-4' />
            </div>
          ))}
        </div>
      </div>

      {/* Second row: Left to Right marquee */}
      <div className="marquee-container mb-16 sm:mb-20 md:mb-24 -mt-2 sm:-mt-4 overflow-hidden" ref={marqueeLtrRef}>
        <div className="marquee-content-ltr">
          {allServiceCategories2.map((category, index) => (
            <div
              key={`ltr-${index}`}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold whitespace-nowrap mr-2 sm:mr-4 flex items-center service-item"
              onClick={() => handleServiceClick(category)}
            >
              {category}
              <img src='/Assets/Arrow circle white.png' className='w-[3vw] ml-2 sm:ml-4' />
            </div>
          ))}
        </div>
      </div>
      <div className=' flex flex-column items-center justify-center mb-[6vh]'>
        <h1 className="lg:text-[50px] text-[18px]">
          Et bien plus
        </h1>
      </div>
      <div className='middleCover'>
        <div className='middlebackgroundDesktop'>
          <div className="flex flex-col items-center xl:mx-[183px] lg:mx-[50px]">
            {/* Services grid with staggered layout */}
            <div>
              {/* Row 1 */}
              <div className="flex flex-wrap justify-center -mx-2 sm:-mx-3 mb-4 sm:mb-6">
                <div className="group w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 mb-4 sm:mb-0">
                  <div className="service-card group bg-[#3A4218] rounded-[13px] lg:rounded-[31px] p-4 sm:p-6 flex h-full hover:bg-[#E0FF5C]">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:bg-black bg-[#E0FF5C] lg:rounded-[12px] rounded-[5px] flex items-center justify-center flex-shrink-0 mr-4">
                        <img className='lg:w-[21px] w-[11.5px] group-hover:hidden' src='/Assets/Mode_Isolation.png' />
                        <img className='hidden lg:w-[21px] w-[11.5px] group-hover:block' src='/Assets/Mode_Isolation2.png' />
                      </div>
                      <div>
                        <h4 className="font-bold text-base lg:text-[20px] text-[12px] text-white group-hover:text-black">Lorem ipsum dolor sit</h4>
                        <p className="text-xs sm:text-sm text-white/70 mt-1 group-hover:text-black">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
                      </div>
                    </div>
                    <div className='flex flex-col items-center lg:text-[15px] text-[8px] justify-center w-[5vw]'>
                      <img src='/Assets/Arrow circle white.png' className='w-[5vw] group-hover:hidden' />
                      <img src='/Assets/Arrow circle black.png' className='hidden w-[5vw] group-hover:block' />
                    </div>
                  </div>
                </div>

                <div className="group w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 mb-4 sm:mb-0">
                  <div className="service-card group bg-[#3A4218] rounded-[13px] lg:rounded-[31px] p-4 sm:p-6 flex h-full hover:bg-[#E0FF5C]">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:bg-black bg-[#E0FF5C] lg:rounded-[12px] rounded-[5px] flex items-center justify-center flex-shrink-0 mr-4">
                        <img className='lg:w-[21px] w-[11.5px] group-hover:hidden' src='/Assets/Mode_Isolation.png' />
                        <img className='hidden lg:w-[21px] w-[11.5px] group-hover:block' src='/Assets/Mode_Isolation2.png' />
                      </div>
                      <div>
                        <h4 className="font-bold text-base lg:text-[20px] text-[12px] text-white group-hover:text-black">Lorem ipsum dolor sit</h4>
                        <p className="text-xs sm:text-sm text-white/70 mt-1 group-hover:text-black">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
                      </div>
                    </div>
                    <div className='flex flex-col items-center lg:text-[15px] text-[8px] justify-center w-[5vw]'>
                      <img src='/Assets/Arrow circle white.png' className='w-[5vw] group-hover:hidden' />
                      <img src='/Assets/Arrow circle black.png' className='hidden w-[5vw] group-hover:block' />
                    </div>
                  </div>
                </div>

                <div className="group w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 mb-4 sm:mb-0">
                  <div className="service-card group bg-[#3A4218] rounded-[13px] lg:rounded-[31px] p-4 sm:p-6 flex h-full hover:bg-[#E0FF5C]">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:bg-black bg-[#E0FF5C] lg:rounded-[12px] rounded-[5px] flex items-center justify-center flex-shrink-0 mr-4">
                        <img className='lg:w-[21px] w-[11.5px] group-hover:hidden' src='/Assets/Mode_Isolation.png' />
                        <img className='hidden lg:w-[21px] w-[11.5px] group-hover:block' src='/Assets/Mode_Isolation2.png' />
                      </div>
                      <div>
                        <h4 className="font-bold text-base lg:text-[20px] text-[12px] text-white group-hover:text-black">Lorem ipsum dolor sit</h4>
                        <p className="text-xs sm:text-sm text-white/70 mt-1 group-hover:text-black">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
                      </div>
                    </div>
                    <div className='flex flex-col items-center lg:text-[15px] text-[8px] justify-center w-[5vw]'>
                      <img src='/Assets/Arrow circle white.png' className='w-[5vw] group-hover:hidden' />
                      <img src='/Assets/Arrow circle black.png' className='hidden w-[5vw] group-hover:block' />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 - with offset */}
              <div className="flex flex-wrap justify-center -mx-2 sm:-mx-3 mb-4 sm:mb-6 sm:translate-x-[2%] md:translate-x-[3%] lg:translate-x-[5%]">
                <div className="group w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 mb-4 sm:mb-0">
                  <div className="service-card group bg-[#3A4218] rounded-[13px] lg:rounded-[31px] p-4 sm:p-6 flex h-full hover:bg-[#E0FF5C]">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:bg-black bg-[#E0FF5C] lg:rounded-[12px] rounded-[5px] flex items-center justify-center flex-shrink-0 mr-4">
                        <img className='lg:w-[21px] w-[11.5px] group-hover:hidden' src='/Assets/Mode_Isolation.png' />
                        <img className='hidden lg:w-[21px] w-[11.5px] group-hover:block' src='/Assets/Mode_Isolation2.png' />
                      </div>
                      <div>
                        <h4 className="font-bold text-base lg:text-[20px] text-[12px] text-white group-hover:text-black">Lorem ipsum dolor sit</h4>
                        <p className="text-xs sm:text-sm text-white/70 mt-1 group-hover:text-black">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
                      </div>
                    </div>
                    <div className='flex flex-col items-center lg:text-[15px] text-[8px] justify-center w-[5vw]'>
                      <img src='/Assets/Arrow circle white.png' className='w-[5vw] group-hover:hidden' />
                      <img src='/Assets/Arrow circle black.png' className='hidden w-[5vw] group-hover:block' />
                    </div>
                  </div>
                </div>

                <div className="group w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 mb-4 sm:mb-0">
                  <div className="service-card group bg-[#3A4218] rounded-[13px] lg:rounded-[31px] p-4 sm:p-6 flex h-full hover:bg-[#E0FF5C]">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:bg-black bg-[#E0FF5C] lg:rounded-[12px] rounded-[5px] flex items-center justify-center flex-shrink-0 mr-4">
                        <img className='lg:w-[21px] w-[11.5px] group-hover:hidden' src='/Assets/Mode_Isolation.png' />
                        <img className='hidden lg:w-[21px] w-[11.5px] group-hover:block' src='/Assets/Mode_Isolation2.png' />
                      </div>
                      <div>
                        <h4 className="font-bold text-base lg:text-[20px] text-[12px] text-white group-hover:text-black">Lorem ipsum dolor sit</h4>
                        <p className="text-xs sm:text-sm text-white/70 mt-1 group-hover:text-black">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
                      </div>
                    </div>
                    <div className='flex flex-col items-center lg:text-[15px] text-[8px] justify-center w-[5vw]'>
                      <img src='/Assets/Arrow circle white.png' className='w-[5vw] group-hover:hidden' />
                      <img src='/Assets/Arrow circle black.png' className='hidden w-[5vw] group-hover:block' />
                    </div>
                  </div>
                </div>

                <div className="group w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 mb-4 sm:mb-0">
                  <div className="service-card group bg-[#3A4218] rounded-[13px] lg:rounded-[31px] p-4 sm:p-6 flex h-full hover:bg-[#E0FF5C]">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:bg-black bg-[#E0FF5C] lg:rounded-[12px] rounded-[5px] flex items-center justify-center flex-shrink-0 mr-4">
                        <img className='lg:w-[21px] w-[11.5px] group-hover:hidden' src='/Assets/Mode_Isolation.png' />
                        <img className='hidden lg:w-[21px] w-[11.5px] group-hover:block' src='/Assets/Mode_Isolation2.png' />
                      </div>
                      <div>
                        <h4 className="font-bold text-base lg:text-[20px] text-[12px] text-white group-hover:text-black">Lorem ipsum dolor sit</h4>
                        <p className="text-xs sm:text-sm text-white/70 mt-1 group-hover:text-black">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
                      </div>
                    </div>
                    <div className='flex flex-col items-center lg:text-[15px] text-[8px] justify-center w-[5vw]'>
                      <img src='/Assets/Arrow circle white.png' className='w-[5vw] group-hover:hidden' />
                      <img src='/Assets/Arrow circle black.png' className='hidden w-[5vw] group-hover:block' />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-wrap justify-center -mx-2 sm:-mx-3">
                <div className="group w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 mb-4 sm:mb-0">
                  <div className="service-card group bg-[#3A4218] rounded-[13px] lg:rounded-[31px] p-4 sm:p-6 flex h-full hover:bg-[#E0FF5C]">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:bg-black bg-[#E0FF5C] lg:rounded-[12px] rounded-[5px] flex items-center justify-center flex-shrink-0 mr-4">
                        <img className='lg:w-[21px] w-[11.5px] group-hover:hidden' src='/Assets/Mode_Isolation.png' />
                        <img className='hidden lg:w-[21px] w-[11.5px] group-hover:block' src='/Assets/Mode_Isolation2.png' />
                      </div>
                      <div>
                        <h4 className="font-bold text-base lg:text-[20px] text-[12px] text-white group-hover:text-black">Lorem ipsum dolor sit</h4>
                        <p className="text-xs sm:text-sm text-white/70 mt-1 group-hover:text-black">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
                      </div>
                    </div>
                    <div className='flex flex-col items-center lg:text-[15px] text-[8px] justify-center w-[5vw]'>
                      <img src='/Assets/Arrow circle white.png' className='w-[5vw] group-hover:hidden' />
                      <img src='/Assets/Arrow circle black.png' className='hidden w-[5vw] group-hover:block' />
                    </div>
                  </div>
                </div>

                <div className="group w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 mb-4 sm:mb-0">
                  <div className="service-card group bg-[#3A4218] rounded-[13px] lg:rounded-[31px] p-4 sm:p-6 flex h-full hover:bg-[#E0FF5C]">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:bg-black bg-[#E0FF5C] lg:rounded-[12px] rounded-[5px] flex items-center justify-center flex-shrink-0 mr-4">
                        <img className='lg:w-[21px] w-[11.5px] group-hover:hidden' src='/Assets/Mode_Isolation.png' />
                        <img className='hidden lg:w-[21px] w-[11.5px] group-hover:block' src='/Assets/Mode_Isolation2.png' />
                      </div>
                      <div>
                        <h4 className="font-bold text-base lg:text-[20px] text-[12px] text-white group-hover:text-black">Lorem ipsum dolor sit</h4>
                        <p className="text-xs sm:text-sm text-white/70 mt-1 group-hover:text-black">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
                      </div>
                    </div>
                    <div className='flex flex-col items-center lg:text-[15px] text-[8px] justify-center w-[5vw]'>
                      <img src='/Assets/Arrow circle white.png' className='w-[5vw] group-hover:hidden' />
                      <img src='/Assets/Arrow circle black.png' className='hidden w-[5vw] group-hover:block' />
                    </div>
                  </div>
                </div>

                <div className="group w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 mb-4 sm:mb-0">
                  <div className="service-card group bg-[#3A4218] rounded-[13px] lg:rounded-[31px] p-4 sm:p-6 flex h-full hover:bg-[#E0FF5C]">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:bg-black bg-[#E0FF5C] lg:rounded-[12px] rounded-[5px] flex items-center justify-center flex-shrink-0 mr-4">
                        <img className='lg:w-[21px] w-[11.5px] group-hover:hidden' src='/Assets/Mode_Isolation.png' />
                        <img className='hidden lg:w-[21px] w-[11.5px] group-hover:block' src='/Assets/Mode_Isolation2.png' />
                      </div>
                      <div>
                        <h4 className="font-bold text-base lg:text-[20px] text-[12px] text-white group-hover:text-black">Lorem ipsum dolor sit</h4>
                        <p className="text-xs sm:text-sm text-white/70 mt-1 group-hover:text-black">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
                      </div>
                    </div>
                    <div className='flex flex-col items-center lg:text-[15px] text-[8px] justify-center w-[5vw]'>
                      <img src='/Assets/Arrow circle white.png' className='w-[5vw] group-hover:hidden' />
                      <img src='/Assets/Arrow circle black.png' className='hidden w-[5vw] group-hover:block' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-[12vh]">
              <div className="bg-[#D9FF4B] rounded-t-3xl py-12 px-6 sm:px-10 md:px-16 relative overflow-hidden">
                {/* Plus signs in corners */}
                <div className="absolute top-6 left-6">
                  <Plus className="w-[33px] h-[33px] text-black" />
                </div>
                <div className="absolute top-6 right-6">
                  <Plus className="w-[33px] h-[33px] text-black" />
                </div>

                {/* Headings */}
                <div className="text-center mb-12">
                  <p className="text-xl font-medium mb-2 text-black">Faites-nous entrer en jeu</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-center leading-tight text-black">
                    Une équipe sur-mesure à<br />vos côtés
                  </h2>
                </div>

                {/* Team members grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className={`
                  rounded-2xl p-4 flex items-start gap-3 bg-[#C4E644] group hover:bg-black cursor-pointer related
                `}
                    >
                      {/* Image */}
                      <div className="relative w-[95px] h-[153px] bg-gray-200 overflow-hidden rounded-lg flex-shrink-0">
                        <img
                          src={`https://randomuser.me/api/portraits/men/${(index % 5) + 1}.jpg`}
                          alt={member.name}
                          className="w-full h-full object-cover grayscale"
                        />
                        <div className="hidden absolute inset-0 bg-gradient-to-r from-black to-transparent group-hover:block"></div>
                        <div className='absolute top-0 z-10 h-[100%] flex-col justify-center hidden group-hover:flex'>
                          <div className='bg-white w-[33px] h-[33px] rounded-full flex flex-col items-center justify-center'>
                            <img src='/Assets/Linkedin black.png' className='w-[20px]' />
                          </div>
                          <div className='bg-white w-[33px] h-[33px] my-[1vh] rounded-full flex flex-col items-center justify-center'>
                            <img src='/Assets/X black.png' className='w-[20px]' />
                          </div>
                          <div className='bg-white w-[33px] h-[33px] rounded-full flex flex-col items-center justify-center'>
                            <img src='/Assets/Dribbbl black.png' className='w-[20px]' />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="font-bold text-sm sm:text-base text-black group-hover:text-white mb-2">{member.name}</h4>
                        <p className={`text-xs sm:text-sm group-hover:text-white text-black font-medium`}>
                          {member.role}
                        </p>
                        <p className={`text-xs group-hover:text-white text-black mt-1 leading-tight`}>
                          {member.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex justify-center'>
                  <svg width="253" height="47" viewBox="0 0 253 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 19C0 8.50659 8.50659 0 19 0H178.333C186.649 0 194.589 3.13592 200.628 8.67048C204.378 10.1717 208.716 9.668 212.036 7.23609C216.313 2.77639 222.332 0 228.999 0C241.979 0 252.501 10.5219 252.501 23.5013C252.501 35.6597 243.268 45.6616 231.431 46.8784L231.53 47.0027H228.999H19C8.50658 47.0027 0 38.4961 0 28.0027V19Z" fill="black" />
                    <mask id="path-2-outside-1_107_952" maskUnits="userSpaceOnUse" x="26.5" y="14.002" width="120" height="20" fill="black">
                      <rect fill="white" x="26.5" y="14.002" width="120" height="20" />
                      <path d="M27.03 29.002V16.402H33.33C35.58 16.402 36.966 17.554 36.966 19.426C36.966 20.902 36.192 21.982 34.662 22.378C35.832 22.774 36.3 23.674 36.3 25.42V25.87C36.3 27.13 36.516 28.336 37.524 29.002H35.796C35.022 28.336 34.86 27.112 34.914 25.87L34.932 25.42C35.022 23.134 33.726 22.702 32.124 22.702H28.38V29.002H27.03ZM28.38 21.532H33.33C34.752 21.532 35.616 20.776 35.616 19.57C35.616 18.328 34.752 17.572 33.33 17.572H28.38V21.532ZM38.4999 24.502C38.4999 21.856 40.3359 19.876 43.1439 19.876C45.8799 19.876 47.6439 21.856 47.6439 24.142V24.664H39.8499V24.682C39.8499 26.536 41.2359 28.012 43.1619 28.012C44.8899 28.012 45.9519 27.256 46.5279 25.708L47.2479 27.31C46.4559 28.462 45.0159 29.146 43.1619 29.146C40.3359 29.146 38.4999 27.202 38.4999 24.502ZM39.8859 23.602H46.2579C46.0779 21.892 44.6919 20.974 43.1439 20.974C41.2899 20.974 40.1199 22.054 39.8859 23.602ZM49.4034 29.236V20.002H50.6994V29.686C50.6994 30.856 50.5554 31.972 49.8174 32.602H48.1434C49.2234 31.9 49.4034 30.586 49.4034 29.236ZM49.1154 18.166V16.258H51.0234V18.166H49.1154ZM57.1197 29.146C54.2937 29.146 52.4577 27.202 52.4577 24.502C52.4577 21.82 54.2937 19.876 57.1197 19.876C59.9457 19.876 61.7817 21.82 61.7817 24.502C61.7817 27.202 59.9457 29.146 57.1197 29.146ZM57.1197 28.012C59.0457 28.012 60.4317 26.536 60.4317 24.502C60.4317 22.468 59.0457 21.01 57.1197 21.01C55.1937 21.01 53.8077 22.468 53.8077 24.502C53.8077 26.536 55.1937 28.012 57.1197 28.012ZM63.519 29.002V20.002H64.815V29.002H63.519ZM63.213 18.166V16.258H65.121V18.166H63.213ZM68.8278 22.954C68.8278 24.142 69.7638 25.024 71.2398 25.024C72.7158 25.024 73.6518 24.142 73.6518 22.954C73.6518 21.784 72.7158 20.92 71.2398 20.92C69.8358 20.92 68.8278 21.784 68.8278 22.954ZM66.1998 29.722L67.3518 28.624C66.8838 28.336 66.5598 27.886 66.5598 27.166C66.5598 25.906 67.6398 25.294 68.7018 25.312C67.9998 24.754 67.5858 23.926 67.5858 22.954C67.5858 21.172 69.0258 19.876 71.2398 19.876C71.9058 19.876 72.4818 19.984 72.9858 20.182C72.8238 18.49 73.7778 17.446 75.0378 17.248L76.2258 18.454C76.0998 18.436 75.9738 18.436 75.8478 18.436C74.4258 18.436 73.7418 19.39 73.7418 20.578H73.7058C74.4798 21.136 74.8938 21.964 74.8938 22.954C74.8938 24.754 73.5258 26.05 71.2218 26.05C70.4478 26.05 70.0338 25.906 69.3318 25.906C68.4678 25.906 67.8198 26.266 67.8198 26.968C67.8198 28.03 69.1518 27.922 69.8538 27.814L72.2118 27.472C74.0118 27.202 76.2438 27.436 76.2438 29.596C76.2438 31.756 73.7778 32.764 71.2038 32.764C68.2338 32.764 66.3438 31.468 66.1998 29.722ZM67.4418 28.678C67.1178 30.748 69.0078 31.684 71.2038 31.684C73.1118 31.684 75.0018 31.036 75.0018 29.704C75.0018 28.426 73.4898 28.48 72.1578 28.678L69.9798 29.002C69.2598 29.11 68.1978 29.092 67.4418 28.678ZM81.5066 20.794C79.9946 20.794 78.9866 21.838 78.8606 23.746V29.002H77.5646V20.002H78.8606V21.622C79.4006 20.488 80.4086 19.786 81.9206 19.786C84.0086 19.786 85.1966 21.1 85.1966 23.26V29.002H83.8826V23.494C83.8826 21.712 82.8926 20.794 81.5066 20.794ZM86.6837 24.502C86.6837 21.856 88.5197 19.876 91.3277 19.876C94.0637 19.876 95.8277 21.856 95.8277 24.142V24.664H88.0337V24.682C88.0337 26.536 89.4197 28.012 91.3457 28.012C93.0737 28.012 94.1357 27.256 94.7117 25.708L95.4317 27.31C94.6397 28.462 93.1997 29.146 91.3457 29.146C88.5197 29.146 86.6837 27.202 86.6837 24.502ZM88.0697 23.602H94.4417C94.2617 21.892 92.8757 20.974 91.3277 20.974C89.4737 20.974 88.3037 22.054 88.0697 23.602ZM103.642 20.938L98.4035 27.94H103.642V29.002H96.7475V28.066L101.986 21.064H96.7475V20.002H103.642V20.938ZM113.559 29.182C110.571 29.182 108.735 27.364 108.735 24.376V16.402H110.085V24.376C110.085 26.626 111.399 27.994 113.559 27.994C115.701 27.994 117.015 26.626 117.015 24.376V16.402H118.365V24.376C118.365 27.364 116.547 29.182 113.559 29.182ZM121.346 24.502C121.346 26.428 122.588 28.012 124.712 28.012C126.206 28.012 127.358 27.256 127.898 25.708L128.618 27.31C127.88 28.426 126.422 29.146 124.658 29.146C121.76 29.146 119.996 27.202 119.996 24.502C119.996 21.802 121.76 19.858 124.658 19.858C126.422 19.858 127.88 20.578 128.618 21.694L127.898 23.296C127.358 21.748 126.206 20.992 124.712 20.992C122.588 20.992 121.346 22.576 121.346 24.502ZM130.46 29.002V14.602H131.756V29.002H130.46ZM134.107 29.002V20.002H135.403V29.002H134.107ZM133.801 18.166V16.258H135.709V18.166H133.801ZM138.494 24.502C138.494 26.428 139.736 28.012 141.86 28.012C143.354 28.012 144.506 27.256 145.046 25.708L145.766 27.31C145.028 28.426 143.57 29.146 141.806 29.146C138.908 29.146 137.144 27.202 137.144 24.502C137.144 21.802 138.908 19.858 141.806 19.858C143.57 19.858 145.028 20.578 145.766 21.694L145.046 23.296C144.506 21.748 143.354 20.992 141.86 20.992C139.736 20.992 138.494 22.576 138.494 24.502Z" />
                    </mask>
                    <path d="M27.03 29.002V16.402H33.33C35.58 16.402 36.966 17.554 36.966 19.426C36.966 20.902 36.192 21.982 34.662 22.378C35.832 22.774 36.3 23.674 36.3 25.42V25.87C36.3 27.13 36.516 28.336 37.524 29.002H35.796C35.022 28.336 34.86 27.112 34.914 25.87L34.932 25.42C35.022 23.134 33.726 22.702 32.124 22.702H28.38V29.002H27.03ZM28.38 21.532H33.33C34.752 21.532 35.616 20.776 35.616 19.57C35.616 18.328 34.752 17.572 33.33 17.572H28.38V21.532ZM38.4999 24.502C38.4999 21.856 40.3359 19.876 43.1439 19.876C45.8799 19.876 47.6439 21.856 47.6439 24.142V24.664H39.8499V24.682C39.8499 26.536 41.2359 28.012 43.1619 28.012C44.8899 28.012 45.9519 27.256 46.5279 25.708L47.2479 27.31C46.4559 28.462 45.0159 29.146 43.1619 29.146C40.3359 29.146 38.4999 27.202 38.4999 24.502ZM39.8859 23.602H46.2579C46.0779 21.892 44.6919 20.974 43.1439 20.974C41.2899 20.974 40.1199 22.054 39.8859 23.602ZM49.4034 29.236V20.002H50.6994V29.686C50.6994 30.856 50.5554 31.972 49.8174 32.602H48.1434C49.2234 31.9 49.4034 30.586 49.4034 29.236ZM49.1154 18.166V16.258H51.0234V18.166H49.1154ZM57.1197 29.146C54.2937 29.146 52.4577 27.202 52.4577 24.502C52.4577 21.82 54.2937 19.876 57.1197 19.876C59.9457 19.876 61.7817 21.82 61.7817 24.502C61.7817 27.202 59.9457 29.146 57.1197 29.146ZM57.1197 28.012C59.0457 28.012 60.4317 26.536 60.4317 24.502C60.4317 22.468 59.0457 21.01 57.1197 21.01C55.1937 21.01 53.8077 22.468 53.8077 24.502C53.8077 26.536 55.1937 28.012 57.1197 28.012ZM63.519 29.002V20.002H64.815V29.002H63.519ZM63.213 18.166V16.258H65.121V18.166H63.213ZM68.8278 22.954C68.8278 24.142 69.7638 25.024 71.2398 25.024C72.7158 25.024 73.6518 24.142 73.6518 22.954C73.6518 21.784 72.7158 20.92 71.2398 20.92C69.8358 20.92 68.8278 21.784 68.8278 22.954ZM66.1998 29.722L67.3518 28.624C66.8838 28.336 66.5598 27.886 66.5598 27.166C66.5598 25.906 67.6398 25.294 68.7018 25.312C67.9998 24.754 67.5858 23.926 67.5858 22.954C67.5858 21.172 69.0258 19.876 71.2398 19.876C71.9058 19.876 72.4818 19.984 72.9858 20.182C72.8238 18.49 73.7778 17.446 75.0378 17.248L76.2258 18.454C76.0998 18.436 75.9738 18.436 75.8478 18.436C74.4258 18.436 73.7418 19.39 73.7418 20.578H73.7058C74.4798 21.136 74.8938 21.964 74.8938 22.954C74.8938 24.754 73.5258 26.05 71.2218 26.05C70.4478 26.05 70.0338 25.906 69.3318 25.906C68.4678 25.906 67.8198 26.266 67.8198 26.968C67.8198 28.03 69.1518 27.922 69.8538 27.814L72.2118 27.472C74.0118 27.202 76.2438 27.436 76.2438 29.596C76.2438 31.756 73.7778 32.764 71.2038 32.764C68.2338 32.764 66.3438 31.468 66.1998 29.722ZM67.4418 28.678C67.1178 30.748 69.0078 31.684 71.2038 31.684C73.1118 31.684 75.0018 31.036 75.0018 29.704C75.0018 28.426 73.4898 28.48 72.1578 28.678L69.9798 29.002C69.2598 29.11 68.1978 29.092 67.4418 28.678ZM81.5066 20.794C79.9946 20.794 78.9866 21.838 78.8606 23.746V29.002H77.5646V20.002H78.8606V21.622C79.4006 20.488 80.4086 19.786 81.9206 19.786C84.0086 19.786 85.1966 21.1 85.1966 23.26V29.002H83.8826V23.494C83.8826 21.712 82.8926 20.794 81.5066 20.794ZM86.6837 24.502C86.6837 21.856 88.5197 19.876 91.3277 19.876C94.0637 19.876 95.8277 21.856 95.8277 24.142V24.664H88.0337V24.682C88.0337 26.536 89.4197 28.012 91.3457 28.012C93.0737 28.012 94.1357 27.256 94.7117 25.708L95.4317 27.31C94.6397 28.462 93.1997 29.146 91.3457 29.146C88.5197 29.146 86.6837 27.202 86.6837 24.502ZM88.0697 23.602H94.4417C94.2617 21.892 92.8757 20.974 91.3277 20.974C89.4737 20.974 88.3037 22.054 88.0697 23.602ZM103.642 20.938L98.4035 27.94H103.642V29.002H96.7475V28.066L101.986 21.064H96.7475V20.002H103.642V20.938ZM113.559 29.182C110.571 29.182 108.735 27.364 108.735 24.376V16.402H110.085V24.376C110.085 26.626 111.399 27.994 113.559 27.994C115.701 27.994 117.015 26.626 117.015 24.376V16.402H118.365V24.376C118.365 27.364 116.547 29.182 113.559 29.182ZM121.346 24.502C121.346 26.428 122.588 28.012 124.712 28.012C126.206 28.012 127.358 27.256 127.898 25.708L128.618 27.31C127.88 28.426 126.422 29.146 124.658 29.146C121.76 29.146 119.996 27.202 119.996 24.502C119.996 21.802 121.76 19.858 124.658 19.858C126.422 19.858 127.88 20.578 128.618 21.694L127.898 23.296C127.358 21.748 126.206 20.992 124.712 20.992C122.588 20.992 121.346 22.576 121.346 24.502ZM130.46 29.002V14.602H131.756V29.002H130.46ZM134.107 29.002V20.002H135.403V29.002H134.107ZM133.801 18.166V16.258H135.709V18.166H133.801ZM138.494 24.502C138.494 26.428 139.736 28.012 141.86 28.012C143.354 28.012 144.506 27.256 145.046 25.708L145.766 27.31C145.028 28.426 143.57 29.146 141.806 29.146C138.908 29.146 137.144 27.202 137.144 24.502C137.144 21.802 138.908 19.858 141.806 19.858C143.57 19.858 145.028 20.578 145.766 21.694L145.046 23.296C144.506 21.748 143.354 20.992 141.86 20.992C139.736 20.992 138.494 22.576 138.494 24.502Z" fill="#DDDDD4" />
                    <path d="M27.03 29.002H26.73V29.302H27.03V29.002ZM27.03 16.402V16.102H26.73V16.402H27.03ZM34.662 22.378L34.5868 22.0875L33.6129 22.3396L34.5658 22.6621L34.662 22.378ZM37.524 29.002V29.302H38.5223L37.6894 28.7517L37.524 29.002ZM35.796 29.002L35.6003 29.2294L35.6847 29.302H35.796V29.002ZM34.914 25.87L35.2137 25.883L35.2138 25.8819L34.914 25.87ZM34.932 25.42L35.2318 25.4319L35.2318 25.4318L34.932 25.42ZM28.38 22.702V22.402H28.08V22.702H28.38ZM28.38 29.002V29.302H28.68V29.002H28.38ZM28.38 21.532H28.08V21.832H28.38V21.532ZM28.38 17.572V17.272H28.08V17.572H28.38ZM27.33 29.002V16.402H26.73V29.002H27.33ZM27.03 16.702H33.33V16.102H27.03V16.702ZM33.33 16.702C34.4069 16.702 35.2409 16.9777 35.7999 17.4426C36.3525 17.9021 36.666 18.57 36.666 19.426H37.266C37.266 18.4099 36.8865 17.5658 36.1836 16.9813C35.4871 16.4022 34.5031 16.102 33.33 16.102V16.702ZM36.666 19.426C36.666 20.1109 36.4871 20.6825 36.1493 21.1249C35.812 21.5668 35.2983 21.9034 34.5868 22.0875L34.7372 22.6684C35.5557 22.4565 36.194 22.0551 36.6262 21.489C37.0579 20.9234 37.266 20.217 37.266 19.426H36.666ZM34.5658 22.6621C35.0898 22.8395 35.4331 23.1184 35.6551 23.5341C35.8845 23.9635 36 24.5673 36 25.42H36.6C36.6 24.5266 36.4815 23.8075 36.1844 23.2513C35.8799 22.6815 35.4042 22.3124 34.7582 22.0938L34.5658 22.6621ZM36 25.42V25.87H36.6V25.42H36ZM36 25.87C36 27.1399 36.2119 28.4946 37.3586 29.2523L37.6894 28.7517C36.8201 28.1773 36.6 27.12 36.6 25.87H36ZM37.524 28.702H35.796V29.302H37.524V28.702ZM35.9917 28.7745C35.6677 28.4958 35.4576 28.0882 35.3362 27.582C35.2148 27.0753 35.1873 26.4897 35.2137 25.883L34.6143 25.8569C34.5867 26.4923 34.6132 27.1396 34.7528 27.7219C34.8924 28.3047 35.1503 28.8421 35.6003 29.2294L35.9917 28.7745ZM35.2138 25.8819L35.2318 25.4319L34.6322 25.408L34.6142 25.858L35.2138 25.8819ZM35.2318 25.4318C35.279 24.2323 34.963 23.44 34.3452 22.9657C33.7489 22.5081 32.9371 22.402 32.124 22.402V23.002C32.9129 23.002 33.5501 23.1118 33.9798 23.4417C34.388 23.7549 34.675 24.3216 34.6322 25.4082L35.2318 25.4318ZM32.124 22.402H28.38V23.002H32.124V22.402ZM28.08 22.702V29.002H28.68V22.702H28.08ZM28.38 28.702H27.03V29.302H28.38V28.702ZM28.38 21.832H33.33V21.232H28.38V21.832ZM33.33 21.832C34.0917 21.832 34.7398 21.6293 35.2022 21.2303C35.6698 20.8269 35.916 20.2494 35.916 19.57H35.316C35.316 20.0965 35.1302 20.5 34.8103 20.7761C34.4852 21.0566 33.9903 21.232 33.33 21.232V21.832ZM35.916 19.57C35.916 18.8752 35.6717 18.2885 35.2037 17.8793C34.7408 17.4746 34.0917 17.272 33.33 17.272V17.872C33.9903 17.872 34.4843 18.0473 34.8088 18.3311C35.1283 18.6104 35.316 19.0227 35.316 19.57H35.916ZM33.33 17.272H28.38V17.872H33.33V17.272ZM28.08 17.572V21.532H28.68V17.572H28.08ZM47.6439 24.664V24.964H47.9439V24.664H47.6439ZM39.8499 24.664V24.364H39.5499V24.664H39.8499ZM46.5279 25.708L46.8016 25.585L46.5018 24.918L46.2468 25.6033L46.5279 25.708ZM47.2479 27.31L47.4952 27.4799L47.5907 27.3409L47.5216 27.187L47.2479 27.31ZM39.8859 23.602L39.5893 23.5571L39.5372 23.902H39.8859V23.602ZM46.2579 23.602V23.902H46.5912L46.5563 23.5705L46.2579 23.602ZM38.7999 24.502C38.7999 23.2494 39.2336 22.1709 39.9831 21.4068C40.7317 20.6436 41.8131 20.176 43.1439 20.176V19.576C41.6668 19.576 40.4262 20.0983 39.5548 20.9866C38.6843 21.874 38.1999 23.1085 38.1999 24.502H38.7999ZM43.1439 20.176C45.7151 20.176 47.3439 22.0225 47.3439 24.142H47.9439C47.9439 21.6895 46.0448 19.576 43.1439 19.576V20.176ZM47.3439 24.142V24.664H47.9439V24.142H47.3439ZM47.6439 24.364H39.8499V24.964H47.6439V24.364ZM39.5499 24.664V24.682H40.1499V24.664H39.5499ZM39.5499 24.682C39.5499 26.6952 41.0639 28.312 43.1619 28.312V27.712C41.408 27.712 40.1499 26.3767 40.1499 24.682H39.5499ZM43.1619 28.312C44.0699 28.312 44.8315 28.113 45.4475 27.6873C46.0638 27.2614 46.5055 26.6285 46.8091 25.8126L46.2468 25.6033C45.9744 26.3354 45.5971 26.8545 45.1064 27.1937C44.6154 27.533 43.982 27.712 43.1619 27.712V28.312ZM46.2543 25.8309L46.9743 27.4329L47.5216 27.187L46.8016 25.585L46.2543 25.8309ZM47.0007 27.14C46.2784 28.1907 44.944 28.846 43.1619 28.846V29.446C45.0879 29.446 46.6335 28.7332 47.4952 27.4799L47.0007 27.14ZM43.1619 28.846C41.82 28.846 40.7345 28.3859 39.9848 27.6258C39.2344 26.865 38.7999 25.7828 38.7999 24.502H38.1999C38.1999 25.9211 38.6835 27.1609 39.5576 28.0471C40.4324 28.934 41.6779 29.446 43.1619 29.446V28.846ZM39.8859 23.902H46.2579V23.302H39.8859V23.902ZM46.5563 23.5705C46.3567 21.6741 44.8089 20.674 43.1439 20.674V21.274C44.575 21.274 45.7992 22.1098 45.9596 23.6334L46.5563 23.5705ZM43.1439 20.674C42.1575 20.674 41.3302 20.9621 40.7148 21.4774C40.0994 21.9928 39.716 22.7187 39.5893 23.5571L40.1826 23.6468C40.2898 22.9372 40.6085 22.3491 41.1 21.9375C41.5917 21.5258 42.2764 21.274 43.1439 21.274V20.674ZM49.4034 20.002V19.702H49.1034V20.002H49.4034ZM50.6994 20.002H50.9994V19.702H50.6994V20.002ZM49.8174 32.602V32.902H49.9281L50.0122 32.8301L49.8174 32.602ZM48.1434 32.602L47.9799 32.3504L47.1314 32.902H48.1434V32.602ZM49.1154 18.166H48.8154V18.466H49.1154V18.166ZM49.1154 16.258V15.958H48.8154V16.258H49.1154ZM51.0234 16.258H51.3234V15.958H51.0234V16.258ZM51.0234 18.166V18.466H51.3234V18.166H51.0234ZM49.7034 29.236V20.002H49.1034V29.236H49.7034ZM49.4034 20.302H50.6994V19.702H49.4034V20.302ZM50.3994 20.002V29.686H50.9994V20.002H50.3994ZM50.3994 29.686C50.3994 30.2621 50.3636 30.8044 50.2445 31.2725C50.1259 31.7385 49.9297 32.1117 49.6227 32.3738L50.0122 32.8301C50.4432 32.4622 50.688 31.9624 50.8259 31.4204C50.9633 30.8805 50.9994 30.2798 50.9994 29.686H50.3994ZM49.8174 32.302H48.1434V32.902H49.8174V32.302ZM48.3069 32.8535C49.5336 32.0562 49.7034 30.5812 49.7034 29.236H49.1034C49.1034 30.5908 48.9133 31.7437 47.9799 32.3504L48.3069 32.8535ZM49.4154 18.166V16.258H48.8154V18.166H49.4154ZM49.1154 16.558H51.0234V15.958H49.1154V16.558ZM50.7234 16.258V18.166H51.3234V16.258H50.7234ZM51.0234 17.866H49.1154V18.466H51.0234V17.866ZM57.1197 28.846C55.7777 28.846 54.6922 28.3859 53.9425 27.6258C53.1921 26.865 52.7577 25.7828 52.7577 24.502H52.1577C52.1577 25.9211 52.6413 27.1609 53.5153 28.0471C54.3901 28.934 55.6356 29.446 57.1197 29.446V28.846ZM52.7577 24.502C52.7577 23.2306 53.1917 22.153 53.9422 21.3942C54.692 20.6361 55.7777 20.176 57.1197 20.176V19.576C55.6356 19.576 54.3903 20.0879 53.5156 20.9722C52.6416 21.856 52.1577 23.0913 52.1577 24.502H52.7577ZM57.1197 20.176C58.4616 20.176 59.5473 20.6361 60.2971 21.3942C61.0476 22.153 61.4817 23.2306 61.4817 24.502H62.0817C62.0817 23.0913 61.5977 21.856 60.7237 20.9722C59.849 20.0879 58.6037 19.576 57.1197 19.576V20.176ZM61.4817 24.502C61.4817 25.7828 61.0473 26.865 60.2968 27.6258C59.5471 28.3859 58.4616 28.846 57.1197 28.846V29.446C58.6037 29.446 59.8492 28.934 60.724 28.0471C61.5981 27.1609 62.0817 25.9211 62.0817 24.502H61.4817ZM57.1197 28.312C59.2279 28.312 60.7317 26.6846 60.7317 24.502H60.1317C60.1317 26.3873 58.8634 27.712 57.1197 27.712V28.312ZM60.7317 24.502C60.7317 22.3172 59.2259 20.71 57.1197 20.71V21.31C58.8654 21.31 60.1317 22.6187 60.1317 24.502H60.7317ZM57.1197 20.71C55.0134 20.71 53.5077 22.3172 53.5077 24.502H54.1077C54.1077 22.6187 55.3739 21.31 57.1197 21.31V20.71ZM53.5077 24.502C53.5077 26.6846 55.0114 28.312 57.1197 28.312V27.712C55.3759 27.712 54.1077 26.3873 54.1077 24.502H53.5077ZM63.519 29.002H63.219V29.302H63.519V29.002ZM63.519 20.002V19.702H63.219V20.002H63.519ZM64.815 20.002H65.115V19.702H64.815V20.002ZM64.815 29.002V29.302H65.115V29.002H64.815ZM63.213 18.166H62.913V18.466H63.213V18.166ZM63.213 16.258V15.958H62.913V16.258H63.213ZM65.121 16.258H65.421V15.958H65.121V16.258ZM65.121 18.166V18.466H65.421V18.166H65.121ZM63.819 29.002V20.002H63.219V29.002H63.819ZM63.519 20.302H64.815V19.702H63.519V20.302ZM64.515 20.002V29.002H65.115V20.002H64.515ZM64.815 28.702H63.519V29.302H64.815V28.702ZM63.513 18.166V16.258H62.913V18.166H63.513ZM63.213 16.558H65.121V15.958H63.213V16.558ZM64.821 16.258V18.166H65.421V16.258H64.821ZM65.121 17.866H63.213V18.466H65.121V17.866ZM66.1998 29.722L65.9928 29.5048L65.8891 29.6037L65.9008 29.7466L66.1998 29.722ZM67.3518 28.624L67.5588 28.8411L67.8406 28.5725L67.5091 28.3685L67.3518 28.624ZM68.7018 25.312L68.6967 25.6119L69.5802 25.6269L68.8885 25.0771L68.7018 25.312ZM72.9858 20.182L72.8761 20.4612L73.331 20.6399L73.2845 20.1534L72.9858 20.182ZM75.0378 17.248L75.2515 17.0374L75.1434 16.9277L74.9913 16.9516L75.0378 17.248ZM76.2258 18.454L76.1834 18.7509L77.0633 18.8766L76.4396 18.2434L76.2258 18.454ZM73.7418 20.578V20.878H74.0418V20.578H73.7418ZM73.7058 20.578V20.278H72.7767L73.5304 20.8213L73.7058 20.578ZM69.8538 27.814L69.8108 27.517L69.8082 27.5174L69.8538 27.814ZM72.2118 27.472L72.2549 27.7689L72.2563 27.7686L72.2118 27.472ZM67.4418 28.678L67.5859 28.4148L67.2115 28.2098L67.1454 28.6316L67.4418 28.678ZM72.1578 28.678L72.1137 28.3812L72.1137 28.3812L72.1578 28.678ZM69.9798 29.002L69.9357 28.7052L69.9353 28.7053L69.9798 29.002ZM68.5278 22.954C68.5278 23.6312 68.7967 24.2317 69.2819 24.6595C69.7648 25.0852 70.4426 25.324 71.2398 25.324V24.724C70.5611 24.724 70.0329 24.5217 69.6787 24.2094C69.3269 23.8993 69.1278 23.4647 69.1278 22.954H68.5278ZM71.2398 25.324C72.0371 25.324 72.7149 25.0852 73.1977 24.6595C73.6829 24.2317 73.9518 23.6312 73.9518 22.954H73.3518C73.3518 23.4647 73.1527 23.8993 72.8009 24.2094C72.4468 24.5217 71.9186 24.724 71.2398 24.724V25.324ZM73.9518 22.954C73.9518 22.284 73.6816 21.692 73.1957 21.2714C72.7126 20.8533 72.0355 20.62 71.2398 20.62V21.22C71.9202 21.22 72.449 21.4186 72.803 21.725C73.1541 22.0289 73.3518 22.4539 73.3518 22.954H73.9518ZM71.2398 20.62C69.7186 20.62 68.5278 21.5736 68.5278 22.954H69.1278C69.1278 21.9943 69.953 21.22 71.2398 21.22V20.62ZM66.4068 29.9391L67.5588 28.8411L67.1448 28.4068L65.9928 29.5048L66.4068 29.9391ZM67.5091 28.3685C67.122 28.1302 66.8598 27.7729 66.8598 27.166H66.2598C66.2598 27.999 66.6457 28.5417 67.1946 28.8794L67.5091 28.3685ZM66.8598 27.166C66.8598 26.6326 67.0837 26.2514 67.4149 25.9979C67.7546 25.738 68.2206 25.6038 68.6967 25.6119L68.7069 25.012C68.1211 25.0021 67.5161 25.1649 67.0502 25.5215C66.5759 25.8845 66.2598 26.4393 66.2598 27.166H66.8598ZM68.8885 25.0771C68.2588 24.5765 67.8858 23.8353 67.8858 22.954H67.2858C67.2858 24.0166 67.7409 24.9314 68.5152 25.5468L68.8885 25.0771ZM67.8858 22.954C67.8858 22.1491 68.2086 21.4632 68.778 20.9743C69.3505 20.4827 70.1904 20.176 71.2398 20.176V19.576C70.0753 19.576 69.0882 19.9172 68.3871 20.5191C67.683 21.1237 67.2858 21.9768 67.2858 22.954H67.8858ZM71.2398 20.176C71.8728 20.176 72.411 20.2785 72.8761 20.4612L73.0955 19.9027C72.5526 19.6894 71.9389 19.576 71.2398 19.576V20.176ZM73.2845 20.1534C73.2095 19.3705 73.3941 18.7642 73.7179 18.3356C74.0425 17.9061 74.5238 17.6324 75.0844 17.5443L74.9913 16.9516C74.2919 17.0615 73.6662 17.4088 73.2392 17.9738C72.8116 18.5397 72.6002 19.3014 72.6872 20.2105L73.2845 20.1534ZM74.8241 17.4585L76.0121 18.6645L76.4396 18.2434L75.2515 17.0374L74.8241 17.4585ZM76.2683 18.157C76.1177 18.1355 75.9704 18.136 75.8478 18.136V18.736C75.9773 18.736 76.082 18.7364 76.1834 18.7509L76.2683 18.157ZM75.8478 18.136C75.0656 18.136 74.453 18.4009 74.0387 18.8606C73.6289 19.3154 73.4418 19.9288 73.4418 20.578H74.0418C74.0418 20.0391 74.1967 19.5815 74.4844 19.2623C74.7677 18.948 75.208 18.736 75.8478 18.736V18.136ZM73.7418 20.278H73.7058V20.878H73.7418V20.278ZM73.5304 20.8213C74.2228 21.3205 74.5938 22.0561 74.5938 22.954H75.1938C75.1938 21.8718 74.7369 20.9514 73.8813 20.3346L73.5304 20.8213ZM74.5938 22.954C74.5938 23.7734 74.2849 24.4627 73.7247 24.9508C73.1612 25.4418 72.3188 25.75 71.2218 25.75V26.35C72.4288 26.35 73.4224 26.0101 74.1189 25.4031C74.8188 24.7932 75.1938 23.9345 75.1938 22.954H74.5938ZM71.2218 25.75C70.8547 25.75 70.5734 25.7161 70.287 25.6803C70.0002 25.6444 69.7039 25.606 69.3318 25.606V26.206C69.6617 26.206 69.9234 26.2395 70.2126 26.2756C70.5023 26.3118 70.8149 26.35 71.2218 26.35V25.75ZM69.3318 25.606C68.864 25.606 68.422 25.7025 68.0869 25.9231C67.739 26.1522 67.5198 26.5086 67.5198 26.968H68.1198C68.1198 26.7253 68.2247 26.5507 68.4168 26.4243C68.6217 26.2894 68.9356 26.206 69.3318 26.206V25.606ZM67.5198 26.968C67.5198 27.3021 67.6273 27.5736 67.8255 27.7742C68.0164 27.9675 68.2663 28.0695 68.5093 28.1227C68.9889 28.2279 69.5457 28.1649 69.8994 28.1105L69.8082 27.5174C69.46 27.571 68.9998 27.616 68.6378 27.5367C68.4601 27.4977 68.3331 27.4343 68.2524 27.3525C68.1788 27.2781 68.1198 27.1648 68.1198 26.968H67.5198ZM69.8969 28.1108L72.2549 27.7688L72.1688 27.1751L69.8108 27.5171L69.8969 28.1108ZM72.2563 27.7686C73.1368 27.6366 74.0847 27.6353 74.7971 27.9035C75.1483 28.0357 75.4305 28.2288 75.6256 28.4931C75.8193 28.7553 75.9438 29.11 75.9438 29.596H76.5438C76.5438 29.0019 76.3894 28.5173 76.1083 28.1367C75.8287 27.758 75.4403 27.5045 75.0085 27.3419C74.155 27.0206 73.0869 27.0373 72.1673 27.1753L72.2563 27.7686ZM75.9438 29.596C75.9438 30.5379 75.4149 31.2429 74.5432 31.7278C73.6632 32.2174 72.458 32.464 71.2038 32.464V33.064C72.5236 33.064 73.8385 32.8065 74.8349 32.2521C75.8398 31.6931 76.5438 30.814 76.5438 29.596H75.9438ZM71.2038 32.464C69.7592 32.464 68.6037 32.1483 67.8019 31.6438C67.004 31.1417 66.5616 30.4588 66.4988 29.6973L65.9008 29.7466C65.982 30.7311 66.5567 31.5692 67.4823 32.1516C68.404 32.7316 69.6785 33.064 71.2038 33.064V32.464ZM67.1454 28.6316C66.965 29.7843 67.4094 30.6475 68.2062 31.2033C68.9817 31.7441 70.0719 31.984 71.2038 31.984V31.384C70.1398 31.384 69.187 31.1558 68.5494 30.7111C67.9333 30.2814 67.5947 29.6416 67.7382 28.7243L67.1454 28.6316ZM71.2038 31.984C72.1856 31.984 73.1816 31.8181 73.9442 31.4658C74.7016 31.1158 75.3018 30.5409 75.3018 29.704H74.7018C74.7018 30.199 74.357 30.6141 73.6925 30.9211C73.033 31.2258 72.13 31.384 71.2038 31.384V31.984ZM75.3018 29.704C75.3018 29.3208 75.1863 29.0064 74.9625 28.7703C74.7447 28.5404 74.4512 28.4131 74.1447 28.3447C73.5404 28.2098 72.7797 28.2822 72.1137 28.3812L72.2019 28.9747C72.8679 28.8757 73.5292 28.8221 74.014 28.9303C74.252 28.9834 74.4197 29.0697 74.527 29.183C74.6284 29.29 74.7018 29.4481 74.7018 29.704H75.3018ZM72.1137 28.3812L69.9357 28.7052L70.024 29.2987L72.202 28.9747L72.1137 28.3812ZM69.9353 28.7053C69.2422 28.8092 68.258 28.7828 67.5859 28.4148L67.2977 28.9411C68.1377 29.4011 69.2775 29.4107 70.0243 29.2986L69.9353 28.7053ZM78.8606 23.746L78.5612 23.7262L78.5606 23.7361V23.746H78.8606ZM78.8606 29.002V29.302H79.1606V29.002H78.8606ZM77.5646 29.002H77.2646V29.302H77.5646V29.002ZM77.5646 20.002V19.702H77.2646V20.002H77.5646ZM78.8606 20.002H79.1606V19.702H78.8606V20.002ZM78.8606 21.622H78.5606L79.1314 21.7509L78.8606 21.622ZM85.1966 29.002V29.302H85.4966V29.002H85.1966ZM83.8826 29.002H83.5826V29.302H83.8826V29.002ZM81.5066 20.494C80.6768 20.494 79.9627 20.783 79.4424 21.352C78.9269 21.9158 78.6273 22.7259 78.5612 23.7262L79.1599 23.7657C79.2199 22.858 79.4873 22.1921 79.8852 21.7569C80.2785 21.3269 80.8244 21.094 81.5066 21.094V20.494ZM78.5606 23.746V29.002H79.1606V23.746H78.5606ZM78.8606 28.702H77.5646V29.302H78.8606V28.702ZM77.8646 29.002V20.002H77.2646V29.002H77.8646ZM77.5646 20.302H78.8606V19.702H77.5646V20.302ZM78.5606 20.002V21.622H79.1606V20.002H78.5606ZM79.1314 21.7509C79.6206 20.7237 80.5217 20.086 81.9206 20.086V19.486C80.2954 19.486 79.1806 20.2522 78.5897 21.493L79.1314 21.7509ZM81.9206 20.086C82.8999 20.086 83.6324 20.3922 84.1222 20.9175C84.6147 21.4458 84.8966 22.2331 84.8966 23.26H85.4966C85.4966 22.1268 85.1845 21.1771 84.561 20.5084C83.9348 19.8367 83.0293 19.486 81.9206 19.486V20.086ZM84.8966 23.26V29.002H85.4966V23.26H84.8966ZM85.1966 28.702H83.8826V29.302H85.1966V28.702ZM84.1826 29.002V23.494H83.5826V29.002H84.1826ZM84.1826 23.494C84.1826 22.5485 83.9193 21.793 83.434 21.2714C82.9468 20.7477 82.2676 20.494 81.5066 20.494V21.094C82.1316 21.094 82.6403 21.2992 82.9947 21.68C83.3509 22.0629 83.5826 22.6574 83.5826 23.494H84.1826ZM95.8277 24.664V24.964H96.1277V24.664H95.8277ZM88.0337 24.664V24.364H87.7337V24.664H88.0337ZM94.7117 25.708L94.9853 25.585L94.6855 24.918L94.4305 25.6033L94.7117 25.708ZM95.4317 27.31L95.6789 27.4799L95.7745 27.3409L95.7053 27.187L95.4317 27.31ZM88.0697 23.602L87.7731 23.5571L87.7209 23.902H88.0697V23.602ZM94.4417 23.602V23.902H94.7749L94.74 23.5705L94.4417 23.602ZM86.9837 24.502C86.9837 23.2494 87.4173 22.1709 88.1669 21.4068C88.9154 20.6436 89.9968 20.176 91.3277 20.176V19.576C89.8505 19.576 88.6099 20.0983 87.7385 20.9866C86.8681 21.874 86.3837 23.1085 86.3837 24.502H86.9837ZM91.3277 20.176C93.8988 20.176 95.5277 22.0225 95.5277 24.142H96.1277C96.1277 21.6895 94.2286 19.576 91.3277 19.576V20.176ZM95.5277 24.142V24.664H96.1277V24.142H95.5277ZM95.8277 24.364H88.0337V24.964H95.8277V24.364ZM87.7337 24.664V24.682H88.3337V24.664H87.7337ZM87.7337 24.682C87.7337 26.6952 89.2476 28.312 91.3457 28.312V27.712C89.5918 27.712 88.3337 26.3767 88.3337 24.682H87.7337ZM91.3457 28.312C92.2536 28.312 93.0152 28.113 93.6312 27.6873C94.2475 27.2614 94.6892 26.6285 94.9929 25.8126L94.4305 25.6033C94.1581 26.3354 93.7809 26.8545 93.2901 27.1937C92.7991 27.533 92.1658 27.712 91.3457 27.712V28.312ZM94.4381 25.8309L95.1581 27.4329L95.7053 27.187L94.9853 25.585L94.4381 25.8309ZM95.1845 27.14C94.4621 28.1907 93.1277 28.846 91.3457 28.846V29.446C93.2716 29.446 94.8173 28.7332 95.6789 27.4799L95.1845 27.14ZM91.3457 28.846C90.0037 28.846 88.9182 28.3859 88.1685 27.6258C87.4181 26.865 86.9837 25.7828 86.9837 24.502H86.3837C86.3837 25.9211 86.8673 27.1609 87.7414 28.0471C88.6161 28.934 89.8616 29.446 91.3457 29.446V28.846ZM88.0697 23.902H94.4417V23.302H88.0697V23.902ZM94.74 23.5705C94.5404 21.6741 92.9927 20.674 91.3277 20.674V21.274C92.7587 21.274 93.983 22.1098 94.1433 23.6334L94.74 23.5705ZM91.3277 20.674C90.3413 20.674 89.514 20.9621 88.8986 21.4774C88.2831 21.9928 87.8998 22.7187 87.7731 23.5571L88.3663 23.6468C88.4736 22.9372 88.7923 22.3491 89.2838 21.9375C89.7754 21.5258 90.4601 21.274 91.3277 21.274V20.674ZM103.642 20.938L103.882 21.1177L103.942 21.0377V20.938H103.642ZM98.4035 27.94L98.1633 27.7603L97.8044 28.24H98.4035V27.94ZM103.642 27.94H103.942V27.64H103.642V27.94ZM103.642 29.002V29.302H103.942V29.002H103.642ZM96.7475 29.002H96.4475V29.302H96.7475V29.002ZM96.7475 28.066L96.5073 27.8862L96.4475 27.9662V28.066H96.7475ZM101.986 21.064L102.226 21.2437L102.585 20.764H101.986V21.064ZM96.7475 21.064H96.4475V21.364H96.7475V21.064ZM96.7475 20.002V19.702H96.4475V20.002H96.7475ZM103.642 20.002H103.942V19.702H103.642V20.002ZM103.401 20.7582L98.1633 27.7603L98.6437 28.1197L103.882 21.1177L103.401 20.7582ZM98.4035 28.24H103.642V27.64H98.4035V28.24ZM103.342 27.94V29.002H103.942V27.94H103.342ZM103.642 28.702H96.7475V29.302H103.642V28.702ZM97.0475 29.002V28.066H96.4475V29.002H97.0475ZM96.9877 28.2457L102.226 21.2437L101.745 20.8842L96.5073 27.8862L96.9877 28.2457ZM101.986 20.764H96.7475V21.364H101.986V20.764ZM97.0475 21.064V20.002H96.4475V21.064H97.0475ZM96.7475 20.302H103.642V19.702H96.7475V20.302ZM103.342 20.002V20.938H103.942V20.002H103.342ZM108.735 16.402V16.102H108.435V16.402H108.735ZM110.085 16.402H110.385V16.102H110.085V16.402ZM117.015 16.402V16.102H116.715V16.402H117.015ZM118.365 16.402H118.665V16.102H118.365V16.402ZM113.559 28.882C112.126 28.882 111.002 28.4472 110.238 27.6867C109.473 26.9265 109.035 25.8079 109.035 24.376H108.435C108.435 25.932 108.914 27.2164 109.814 28.1122C110.715 29.0077 112.003 29.482 113.559 29.482V28.882ZM109.035 24.376V16.402H108.435V24.376H109.035ZM108.735 16.702H110.085V16.102H108.735V16.702ZM109.785 16.402V24.376H110.385V16.402H109.785ZM109.785 24.376C109.785 25.5588 110.131 26.5446 110.795 27.2365C111.461 27.9298 112.414 28.294 113.559 28.294V27.694C112.543 27.694 111.759 27.3741 111.228 26.8209C110.695 26.2663 110.385 25.4431 110.385 24.376H109.785ZM113.559 28.294C114.695 28.294 115.643 27.9294 116.307 27.2361C116.968 26.5444 117.315 25.5587 117.315 24.376H116.715C116.715 25.4432 116.404 26.2665 115.873 26.8213C115.344 27.3745 114.564 27.694 113.559 27.694V28.294ZM117.315 24.376V16.402H116.715V24.376H117.315ZM117.015 16.702H118.365V16.102H117.015V16.702ZM118.065 16.402V24.376H118.665V16.402H118.065ZM118.065 24.376C118.065 25.8087 117.63 26.9273 116.87 27.6873C116.11 28.4473 114.991 28.882 113.559 28.882V29.482C115.114 29.482 116.398 29.0076 117.294 28.1116C118.19 27.2156 118.665 25.9312 118.665 24.376H118.065ZM127.898 25.708L128.171 25.585L127.862 24.8979L127.614 25.6091L127.898 25.708ZM128.618 27.31L128.868 27.4754L128.959 27.3376L128.891 27.187L128.618 27.31ZM128.618 21.694L128.891 21.8169L128.959 21.6663L128.868 21.5285L128.618 21.694ZM127.898 23.296L127.614 23.3948L127.862 24.106L128.171 23.4189L127.898 23.296ZM121.046 24.502C121.046 25.5283 121.377 26.4809 122.01 27.1805C122.646 27.8837 123.57 28.312 124.712 28.312V27.712C123.729 27.712 122.97 27.3482 122.455 26.778C121.935 26.204 121.646 25.4016 121.646 24.502H121.046ZM124.712 28.312C125.51 28.312 126.235 28.1093 126.835 27.6856C127.436 27.2616 127.894 26.6304 128.181 25.8068L127.614 25.6091C127.362 26.3336 126.973 26.8543 126.489 27.1953C126.006 27.5366 125.407 27.712 124.712 27.712V28.312ZM127.624 25.8309L128.344 27.4329L128.891 27.187L128.171 25.585L127.624 25.8309ZM128.367 27.1445C127.697 28.1576 126.346 28.846 124.658 28.846V29.446C126.497 29.446 128.062 28.6943 128.868 27.4754L128.367 27.1445ZM124.658 28.846C123.278 28.846 122.194 28.3849 121.455 27.627C120.714 26.8678 120.296 25.7861 120.296 24.502H119.696C119.696 25.9178 120.159 27.1581 121.025 28.0459C121.892 28.935 123.139 29.446 124.658 29.446V28.846ZM120.296 24.502C120.296 23.2178 120.714 22.1361 121.455 21.3769C122.194 20.619 123.278 20.158 124.658 20.158V19.558C123.139 19.558 121.892 20.0689 121.025 20.958C120.159 21.8458 119.696 23.0861 119.696 24.502H120.296ZM124.658 20.158C126.346 20.158 127.697 20.8463 128.367 21.8594L128.868 21.5285C128.062 20.3096 126.497 19.558 124.658 19.558V20.158ZM128.344 21.571L127.624 23.173L128.171 23.4189L128.891 21.8169L128.344 21.571ZM128.181 23.1971C127.894 22.3736 127.436 21.7423 126.835 21.3183C126.235 20.8946 125.51 20.692 124.712 20.692V21.292C125.407 21.292 126.006 21.4673 126.489 21.8086C126.973 22.1496 127.362 22.6704 127.614 23.3948L128.181 23.1971ZM124.712 20.692C123.57 20.692 122.646 21.1202 122.01 21.8234C121.377 22.523 121.046 23.4756 121.046 24.502H121.646C121.646 23.6023 121.935 22.7999 122.455 22.226C122.97 21.6557 123.729 21.292 124.712 21.292V20.692ZM130.46 29.002H130.16V29.302H130.46V29.002ZM130.46 14.602V14.302H130.16V14.602H130.46ZM131.756 14.602H132.056V14.302H131.756V14.602ZM131.756 29.002V29.302H132.056V29.002H131.756ZM130.76 29.002V14.602H130.16V29.002H130.76ZM130.46 14.902H131.756V14.302H130.46V14.902ZM131.456 14.602V29.002H132.056V14.602H131.456ZM131.756 28.702H130.46V29.302H131.756V28.702ZM134.107 29.002H133.807V29.302H134.107V29.002ZM134.107 20.002V19.702H133.807V20.002H134.107ZM135.403 20.002H135.703V19.702H135.403V20.002ZM135.403 29.002V29.302H135.703V29.002H135.403ZM133.801 18.166H133.501V18.466H133.801V18.166ZM133.801 16.258V15.958H133.501V16.258H133.801ZM135.709 16.258H136.009V15.958H135.709V16.258ZM135.709 18.166V18.466H136.009V18.166H135.709ZM134.407 29.002V20.002H133.807V29.002H134.407ZM134.107 20.302H135.403V19.702H134.107V20.302ZM135.103 20.002V29.002H135.703V20.002H135.103ZM135.403 28.702H134.107V29.302H135.403V28.702ZM134.101 18.166V16.258H133.501V18.166H134.101ZM133.801 16.558H135.709V15.958H133.801V16.558ZM135.409 16.258V18.166H136.009V16.258H135.409ZM135.709 17.866H133.801V18.466H135.709V17.866ZM145.046 25.708L145.32 25.585L145.011 24.8979L144.763 25.6091L145.046 25.708ZM145.766 27.31L146.016 27.4754L146.108 27.3376L146.04 27.187L145.766 27.31ZM145.766 21.694L146.04 21.8169L146.108 21.6663L146.016 21.5285L145.766 21.694ZM145.046 23.296L144.763 23.3948L145.011 24.106L145.32 23.4189L145.046 23.296ZM138.194 24.502C138.194 25.5283 138.525 26.4809 139.158 27.1805C139.794 27.8837 140.718 28.312 141.86 28.312V27.712C140.878 27.712 140.119 27.3482 139.603 26.778C139.084 26.204 138.794 25.4016 138.794 24.502H138.194ZM141.86 28.312C142.659 28.312 143.383 28.1093 143.984 27.6856C144.585 27.2616 145.042 26.6304 145.329 25.8068L144.763 25.6091C144.51 26.3336 144.121 26.8543 143.638 27.1953C143.154 27.5366 142.556 27.712 141.86 27.712V28.312ZM144.773 25.8309L145.493 27.4329L146.04 27.187L145.32 25.585L144.773 25.8309ZM145.516 27.1445C144.846 28.1576 143.494 28.846 141.806 28.846V29.446C143.646 29.446 145.21 28.6943 146.016 27.4754L145.516 27.1445ZM141.806 28.846C140.427 28.846 139.342 28.3849 138.603 27.627C137.863 26.8678 137.444 25.7861 137.444 24.502H136.844C136.844 25.9178 137.308 27.1581 138.174 28.0459C139.041 28.935 140.288 29.446 141.806 29.446V28.846ZM137.444 24.502C137.444 23.2178 137.863 22.1361 138.603 21.3769C139.342 20.619 140.427 20.158 141.806 20.158V19.558C140.288 19.558 139.041 20.0689 138.174 20.958C137.308 21.8458 136.844 23.0861 136.844 24.502H137.444ZM141.806 20.158C143.494 20.158 144.846 20.8463 145.516 21.8594L146.016 21.5285C145.21 20.3096 143.646 19.558 141.806 19.558V20.158ZM145.493 21.571L144.773 23.173L145.32 23.4189L146.04 21.8169L145.493 21.571ZM145.329 23.1971C145.042 22.3736 144.585 21.7423 143.984 21.3183C143.383 20.8946 142.659 20.692 141.86 20.692V21.292C142.556 21.292 143.154 21.4673 143.638 21.8086C144.121 22.1496 144.51 22.6704 144.763 23.3948L145.329 23.1971ZM141.86 20.692C140.718 20.692 139.794 21.1202 139.158 21.8234C138.525 22.523 138.194 23.4756 138.194 24.502H138.794C138.794 23.6023 139.084 22.7999 139.603 22.226C140.119 21.6557 140.878 21.292 141.86 21.292V20.692Z" fill="#DDDDD4" mask="url(#path-2-outside-1_107_952)" />
                    <path d="M228.252 14.9023L237.219 23.8691M237.219 23.8691L228.252 32.8358M237.219 23.8691L221.975 23.8691" stroke="#D4D4C9" stroke-width="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}