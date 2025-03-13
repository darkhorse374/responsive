"use client";

import React from 'react';
import { Plus } from 'lucide-react';

export function PartnershipsSection() {
  const partners = [
    // Row 1
    { name: 'PostHog.png' },
    { name: 'Lemlist.png' },
    { name: 'Hightouch.png' },
    { name: 'HubSpot.png' },
    { name: 'Claude.png' },
    { name: 'OpenAI.png' },
    { name: 'Semrush.png' },

    // Row 2
    { name: 'n8n.png' },
    { name: 'pipedrive.png' },
    { name: 'Sales force.png' },
    { name: 'Zoho.png' },
    { name: 'oncrawl.png' },
    { name: 'Ahrefs.png' },
    { name: 'Google Analytics.png' },

    // Row 3 (partial)
    { name: 'Mask group-16.png' },
    { name: 'Google Search console.png' },
    { name: 'Google Ads.png' },
    { name: 'Google Entreprise.png' }
  ];

  return (
    <section className="w-full py-20 bg-[#f7f8f0] text-black">
      <div className="xl:mx-[175px] lg:mx-[30px]">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mx-auto leading-tight">
            Des partenariats d'excellence et une expertise<br />
            au service de votre croissance.
          </h2>
        </div>

        {/* Partners grid - using grid with specific layout */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-7 gap-0">
            {/* First row */}
            {partners.slice(0, 7).map((partner, index) => (
              <div key={`row1-${index}`} className="aspect-square">
                <div className="w-full h-full bg-black rounded-[25%] flex items-center justify-center">
                  <img src={`/Assets/Logo clients et outils/${partner.name}`} className='max-w-[85px]' />
                </div>
              </div>
            ))}

            {/* Second row */}
            {partners.slice(7, 14).map((partner, index) => (
              <div key={`row2-${index}`} className="aspect-square">
                <div className="w-full h-full bg-black rounded-[25%] flex items-center justify-center">
                  <img src={`/Assets/Logo clients et outils/${partner.name}`} className='max-w-[85px]' />
                </div>
              </div>
            ))}
            <div key={`row2-20`} className="aspect-square">
              <div className="w-full h-full rounded-[25%] flex items-center justify-center">
              </div>
            </div>
            {/* Third row (partial) */}
            {partners.slice(14, 21).map((partner, index) => (
              <div key={`row2-${index}`} className="aspect-square">
                <div className="w-full h-full bg-black rounded-[25%] flex items-center justify-center">
                  <img src={`/Assets/Logo clients et outils/${partner.name}`} className='max-w-[85px]' />
                </div>
              </div>
            ))}
            <div key={`row2-20`} className="aspect-square">
              <div className="w-full h-full rounded-[25%] outline-1 outline-black border-2 border-black flex items-center justify-center">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2285 22.2295V41.4581H22.2285V22.2295H41.4581V20.2295H22.2285V1H20.2285V20.2295H1V22.2295H20.2285Z" fill="black" />
                  <path d="M20.2285 41.4581H19.7285V41.9581H20.2285V41.4581ZM20.2285 22.2295H20.7285V21.7295H20.2285V22.2295ZM22.2285 41.4581V41.9581H22.7285V41.4581H22.2285ZM22.2285 22.2295V21.7295H21.7285V22.2295H22.2285ZM41.4581 22.2295V22.7295H41.9581V22.2295H41.4581ZM41.4581 20.2295H41.9581V19.7295H41.4581V20.2295ZM22.2285 20.2295H21.7285V20.7295H22.2285V20.2295ZM22.2285 1H22.7285V0.5H22.2285V1ZM20.2285 1V0.5H19.7285V1H20.2285ZM20.2285 20.2295V20.7295H20.7285V20.2295H20.2285ZM1 20.2295V19.7295H0.5V20.2295H1ZM1 22.2295H0.5V22.7295H1V22.2295ZM20.7285 41.4581V22.2295H19.7285V41.4581H20.7285ZM22.2285 40.9581H20.2285V41.9581H22.2285V40.9581ZM21.7285 22.2295V41.4581H22.7285V22.2295H21.7285ZM41.4581 21.7295H22.2285V22.7295H41.4581V21.7295ZM40.9581 20.2295V22.2295H41.9581V20.2295H40.9581ZM22.2285 20.7295H41.4581V19.7295H22.2285V20.7295ZM21.7285 1V20.2295H22.7285V1H21.7285ZM20.2285 1.5H22.2285V0.5H20.2285V1.5ZM20.7285 20.2295V1H19.7285V20.2295H20.7285ZM1 20.7295H20.2285V19.7295H1V20.7295ZM1.5 22.2295V20.2295H0.5V22.2295H1.5ZM20.2285 21.7295H1V22.7295H20.2285V21.7295Z" fill="black" />
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}