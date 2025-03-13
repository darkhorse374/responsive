import React from 'react';
import { Star, Target, CircleCheck } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="w-full py-24 bg-[#F5F5ED] text-black relative overflow-hidden">
      {/* Plus sign in top left */}
      <div className="absolute lg:top-[24vh] xl:left-[130px] top-[18vh] left-[7vw]">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[20px] lg:w-[44px]'>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22 24V45H24V24H45V22H24V1H22V22H1V24H22Z" fill="black" />
          <path d="M22 45H21.5V45.5H22V45ZM22 24H22.5V23.5H22V24ZM24 45V45.5H24.5V45H24ZM24 24V23.5H23.5V24H24ZM45 24V24.5H45.5V24H45ZM45 22H45.5V21.5H45V22ZM24 22H23.5V22.5H24V22ZM24 1H24.5V0.5H24V1ZM22 1V0.5H21.5V1H22ZM22 22V22.5H22.5V22H22ZM1 22V21.5H0.5V22H1ZM1 24H0.5V24.5H1V24ZM22.5 45V24H21.5V45H22.5ZM24 44.5H22V45.5H24V44.5ZM23.5 24V45H24.5V24H23.5ZM45 23.5H24V24.5H45V23.5ZM44.5 22V24H45.5V22H44.5ZM24 22.5H45V21.5H24V22.5ZM23.5 1V22H24.5V1H23.5ZM22 1.5H24V0.5H22V1.5ZM22.5 22V1H21.5V22H22.5ZM1 22.5H22V21.5H1V22.5ZM1.5 24V22H0.5V24H1.5ZM22 23.5H1V24.5H22V23.5Z" fill="black" />
        </svg>
      </div>

      <div className="px-6 sm:px-10 lg:px-[30px] xl:px-[175px]">
        {/* Section heading */}
        <div className="text-center mb-20">
          <h2 className="text-[18px] lg:text-[50px] font-bold text-center max-w-3xl mx-auto leading-tight">
            Rapide, flexible <br />
            et incroyablement df<span className="relative inline-block">
              fica
              <span className="absolute -bottom-1 left-0 w-full h-0.5 lg:h-1 bg-black"></span>
            </span>ce
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#EDFFA3] rounded-[48px] p-10 relative overflow-hidden">
            <div className='bg-[#E1F29B] lg:w-[54px] w-[29px] lg:h-[54px] h-[29px] lg:rounded-[13px] rounded-[8px] flex flex-col justify-center items-center mb-5'>
              <img src='/Assets/Double stars black.png' className='lg:w-[30px] lg:h-[30px]' />
            </div>
            <h3 className="lg:text-[27px] text-[13px] font-bold mb-4">
              Des talents d'élite à chaque mission
            </h3>
            <p className="lg:text-[22px] text-[10px] text-black/80 leading-relaxed">
              Nous ne laissons rien au hasard. Chaque expert, freelance ou équipe est rigoureusement sélectionné(e) et validé(e) pour répondre à vos besoins précis. Nous combinons notre expertise avec une technologie qui assemble l'équipe parfaite pour chaque mission.
            </p>
          </div>

          <div className="bg-[#EDFFA3] rounded-[48px] p-10 relative overflow-hidden">
            <div className='bg-[#E1F29B] lg:w-[54px] w-[29px] lg:h-[54px] h-[29px] lg:rounded-[13px] rounded-[8px] flex flex-col justify-center items-center mb-5'>
              <img src='/Assets/Hand heart black.png' className='lg:w-[30px] lg:h-[30px]' />
            </div>
            <h3 className="lg:text-[27px] text-[13px] font-bold mb-4">
              Des solutions sur mesure, zéro compromis
            </h3>
            <p className="lg:text-[22px] text-[10px] text-black/80 leading-relaxed">
              Nos experts prennent le temps d'écouter votre vision, d'analyser vos objectifs et de comprendre votre équipe existante. Ensuite, nous élaborons un plan stratégique personnalisé et choisissons les talents adéquats pour exécuter avec précision, efficacité et résultats.
            </p>
          </div>

          <div className="bg-[#EDFFA3] rounded-[48px] p-10 relative overflow-hidden">
            <div className='bg-[#E1F29B] lg:w-[54px] w-[29px] lg:h-[54px] h-[29px] lg:rounded-[13px] rounded-[8px] flex flex-col justify-center items-center mb-5'>
              <img src='/Assets/Goals black.png' className='lg:w-[30px] lg:h-[30px]' />
            </div>
            <h3 className="lg:text-[27px] text-[13px] font-bold mb-4">
              Une flexibilité taillée pour vos ambitions
            </h3>
            <p className="lg:text-[22px] text-[10px] text-black/80 leading-relaxed">
              Nous vous proposons les talents qu'il vous faut en 48 heures. Grâce à nos processus optimisés, nous intégrons rapidement des experts à votre équipe, en assurant une montée en puissance rapide et efficace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}