"use client";

import React from 'react';
import { Plus, Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
      name: "Nom Prénom",
      position: "Position, Nom de la compagnie"
    },
    {
      stars: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
      name: "Nom Prénom",
      position: "Position, Nom de la compagnie"
    },
    {
      stars: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
      name: "Nom Prénom",
      position: "Position, Nom de la compagnie"
    },
    {
      stars: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
      name: "Nom Prénom",
      position: "Position, Nom de la compagnie"
    },
    {
      stars: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
      name: "Nom Prénom",
      position: "Position, Nom de la compagnie"
    },
    {
      stars: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
      name: "Nom Prénom",
      position: "Position, Nom de la compagnie"
    }
  ];

  return (
    <section className="w-full py-24 bg-[#F7F7F1] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-8">
        <Plus className="w-10 h-10 text-black/10" />
      </div>
      <div className="absolute bottom-1/4 left-8">
        <Plus className="w-10 h-10 text-black/10" />
      </div>

      <div className="xl:mx-[175px] gl:mx-[30px]">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="lg:text-[50px] text-black sm:text-4xl md:text-5xl font-bold mb-4">
            Nos clients parlent de n<span className="relative inline-block">
              ou
              <span className="absolute -bottom-1 left-0 w-full h-0.5 lg:h-1 bg-black"></span>
            </span>s
          </h2>
          <p className="lg:text-[25px] text-black/70 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-black rounded-3xl p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 0L12.0659 7.29909L19 10L12.0659 12.7009L9.5 20L6.93414 12.7009L0 10L6.93414 7.29909L9.5 0Z" fill="black" />
                  </svg>

                ))}
              </div>

              {/* Testimonial text */}
              <p className="lg:text-[18px] mb-4 text-black leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#e6ff80] rounded-full flex items-center justify-center mr-3">
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18.5" cy="18.5" r="18.5" fill="#E0FF5C" />
                    <path d="M18.5368 9C21.9951 9 24.8648 11.8765 24.8648 15.343C24.8648 17.4819 23.7611 19.3995 22.1423 20.5058C24.8648 21.6122 27.0723 23.8986 27.9552 26.7751C28.1024 27.2913 27.8817 27.8076 27.3666 27.9551C26.8515 28.1026 26.3364 27.8814 26.1893 27.3651C25.1591 23.9723 21.9951 21.6859 18.5368 21.6859C15.0049 21.6859 11.8409 23.9723 10.8107 27.3651C10.6636 27.8814 10.1485 28.1026 9.63341 27.9551C9.11834 27.8076 8.89759 27.2913 9.04476 26.7751C9.92774 23.8986 12.1352 21.6122 14.8577 20.5058C13.2389 19.3995 12.1352 17.4819 12.1352 15.343C12.1352 11.8765 15.0049 9 18.5368 9ZM18.5368 10.9176C16.035 10.9176 14.0483 12.909 14.0483 15.343C14.0483 17.8506 16.035 19.842 18.5368 19.842C20.965 19.842 22.9517 17.8506 22.9517 15.343C22.9517 12.909 20.965 10.9176 18.5368 10.9176Z" fill="black" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium lg:text-[15px] text-black">{testimonial.name}</p>
                  <p className="lg:text-[15px] text-black">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}