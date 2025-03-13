"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 naviBack lg:pt-[41px] lg:pb-[11px]">
      <div className="xl:mx-[150px] lg:mx-[30px] px-6 md:px-10 flex items-center justify-between lg:h-[65px]">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-2xl">
          <svg width="162" height="44" viewBox="0 0 162 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M71.1029 31.3496L71.2626 15.6737L75.128 15.7126L74.8545 42.5557L70.989 42.5167L71.0377 37.6847C69.3926 41.0507 66.3653 43.1134 61.8555 43.0677C55.6275 43.0044 52.1242 39.0494 52.1904 32.6073L52.3646 15.4819L56.2836 15.5218L56.1162 31.9493C56.0617 37.2641 58.9868 40.0325 63.1209 40.0744C67.6308 40.1201 70.6688 37.0373 71.102 31.3496H71.1029Z" fill="#F7F7F1" />
            <path d="M95.2322 39.8111C99.6885 39.8569 103.147 37.6365 104.805 33.0361L106.904 37.8361C104.669 41.1418 100.298 43.2453 95.0366 43.1918C86.3936 43.1042 81.1907 37.252 81.2724 29.1999C81.3542 21.1468 86.6749 15.4026 95.3179 15.4902C100.579 15.5438 104.906 17.735 107.073 21.0864L104.877 25.8426C103.314 21.2091 99.9007 18.9196 95.4444 18.8739C89.1094 18.8096 85.3569 23.4966 85.2985 29.2408C85.2401 34.9849 88.8962 39.7469 95.2313 39.8111H95.2322Z" fill="#F7F7F1" />
            <path d="M113.837 0L117.703 0.0389391L117.266 42.9872L113.4 42.9482L113.837 0Z" fill="#F7F7F1" />
            <path d="M127.691 5.07999C129.262 5.09557 130.524 6.38243 130.507 7.9545C130.492 9.5256 129.205 10.7871 127.633 10.7706C126.062 10.755 124.8 9.46817 124.817 7.8961C124.832 6.325 126.119 5.06345 127.691 5.07999ZM125.645 16.2276L129.51 16.2665L129.238 43.1095L125.372 43.0706L125.645 16.2276Z" fill="#F7F7F1" />
            <path d="M149.613 40.3639C154.069 40.4096 157.528 38.1892 159.186 33.5889L161.284 38.3888C159.049 41.6945 154.679 43.7981 149.417 43.7446C140.774 43.6569 135.572 37.8047 135.653 29.7526C135.735 21.6995 141.056 15.9554 149.699 16.043C154.96 16.0965 159.287 18.2877 161.454 21.6392L159.258 26.3953C157.694 21.7618 154.282 19.4723 149.825 19.4266C143.49 19.3623 139.738 24.0494 139.679 29.7935C139.621 35.5377 143.277 40.2996 149.612 40.3639H149.613Z" fill="#F7F7F1" />
            <path d="M37.2543 33.4178C37.2465 33.2182 37.2329 33.0187 37.2173 32.8181L37.2115 32.7549C37.1949 32.5544 37.1755 32.3538 37.1531 32.1543L35.803 18.2159C35.7494 17.6182 35.6988 17.0205 35.6569 16.4219C35.5791 15.3278 35.4564 14.2151 35.0661 13.1823C34.9385 12.8436 34.7789 12.5233 34.5998 12.2099C33.7237 10.74 32.3123 9.61865 30.6789 9.10566C30.0004 8.89248 29.2908 8.7854 28.5792 8.7854C26.3345 8.7854 24.4548 10.0713 22.8175 11.4808C20.8746 13.1522 18.92 14.8109 16.9663 16.4706C14.5201 18.5488 12.1995 20.5229 9.7338 22.6352C8.4411 23.743 7.08318 24.8575 5.74278 25.9059C4.53964 26.8472 3.12915 27.9063 2.12945 29.0773C0.836749 30.591 0.0424403 32.5436 0.00155668 34.6813C-0.0899447 39.5873 3.86409 43.6786 8.77013 43.7458C13.7404 43.8149 17.7918 39.8054 17.7918 34.8506C17.7918 33.3526 17.4229 31.8447 16.6675 30.5238C16.3073 29.894 15.5442 29.0053 14.9864 28.5419C14.4296 28.0786 13.8747 27.6211 13.4873 26.9942C12.914 26.0665 12.6103 24.986 12.6103 23.8958C12.6103 20.6319 15.256 17.9871 18.5189 17.9871C21.1082 17.9871 23.314 19.5991 24.6378 21.7406C26.1496 24.1859 26.169 26.8277 26.169 29.6098C26.169 31.211 26.169 32.8133 26.169 34.4155C26.169 37.4818 28.6551 39.9669 31.7204 39.9669C33.8639 39.9669 35.7981 38.682 36.7073 36.7527C37.193 35.7219 37.301 34.582 37.2553 33.4188L37.2543 33.4178Z" fill="#F7F7F1" />
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center bg-[#F7F7F10D] lg:h-[65px] rounded-[15px]">
          <div className="rounded-full py-3 px-6">
            <nav className="flex items-center space-x-8">
              <Link href="#services" className="text-[#F7F7F1] hover:text-white/90 lg:text-[18px]">
                Nos services
              </Link>
              <Link href="#expertises" className="text-[#F7F7F1] hover:text-white/90 lg:text-[18px]">
                Nos expertises
              </Link>
              <Link href="#clients" className="text-[#F7F7F1] hover:text-white/90 lg:text-[18px]">
                Cas clients
              </Link>
              <div className="relative group flex flex-col items-center">
                <button className="text-[#F7F7F1] hover:text-white/90 lg:text-[18px] flex items-center mt-[5px]">
                  À propos
                </button>
                <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L4.5 4L8 1" stroke="#F7F7F1" strokeWidth="1.5" />
                </svg>
              </div>
            </nav>
          </div>

          <Button className="bg-white text-black hover:bg-white/90 pr-6 py-2 h-auto lg:text-[18px] lg:h-[65px] rounded-[15px]">
            Audit Gratuit
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#F7F7F1]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {!isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm mt-2 py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#services"
              className="text-[#F7F7F1] hover:text-white/90 text-base py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nos services
            </Link>
            <Link
              href="#expertises"
              className="text-[#F7F7F1] hover:text-white/90 text-base py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nos expertises
            </Link>
            <Link
              href="#clients"
              className="text-[#F7F7F1] hover:text-white/90 text-base py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cas clients
            </Link>
            <Link
              href="#about"
              className="text-[#F7F7F1] hover:text-white/90 text-base py-2 flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              À propos
              <ChevronDown className="ml-1 w-4 h-4" />
            </Link>

            <Button
              className="bg-white text-black hover:bg-white/90 rounded-full px-5 py-2 h-auto w-full mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Audit Gratuit
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
