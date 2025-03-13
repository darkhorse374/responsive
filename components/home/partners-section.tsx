import React from 'react';

export function PartnersSection() {
  const mainPartners = [
    { name: 'Jobgether.png' },
    { name: 'Muzzo.png' },
    { name: 'CodinGame.png' },
    { name: 'Tehtris.png' },
    { name: 'deepki.png' },
    { name: 'Agicap.png' },
    { name: 'LeMonde.png' },
    { name: 'Hapik.png' },
    { name: 'MSC.png' },
    { name: 'Vet Sécurité.png' },
    { name: 'Bonpoint.png' },
    { name: 'Beertime.png' },
    { name: 'Floa.png' },
    { name: 'LV.png' },
    { name: 'loreal.png' },
    { name: 'ParisTurf.png' },
    { name: 'CoderPad.png' },
    { name: 'Obat.png' }
  ];

  // Last row - to be centered
  const lastRowPartners = [
    { name: 'CybelAngel.png' },
    { name: 'France PareBrise.png' },
    { name: 'France Guyane black.png' },
    { name: 'France Antilles black.png' }
  ];

  return (
    <section className="w-full py-24 bg-[#F7F7F1]">
      <div className="max-w-[1600px] mx-auto px-[30px] lg:px-[30px] xl:px-[175px]">
        <div className="mb-20 flex flex-col items-center">
          <h2 className="text-[black] text-[18px] lg:text-[35px] font-bold text-center max-w-3xl mx-auto leading-tight">
            Votre entreprise, notre mission commune vers
            l'hy
            <span className="relative inline-block">
              percroissa
              <span className="absolute -bottom-1 left-0 w-full h-0.5 lg:h-1 bg-black"></span>
            </span>nce
          </h2>
        </div>

        {/* Main partners grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[10px] mb-[10px]">
          {mainPartners.map((partner) => (
            <div
              key={partner.name}
              className="bg-[#0000000D] rounded-xl py-4 px-6 flex items-center justify-center h-[75px]"
            >
              <img src={`/Assets/Logo clients et outils/${partner.name}`} alt={`${partner.name}`} className='max-h-[50px]' />
            </div>
          ))}
        </div>

        {/* Last row - centered */}
        <div className="flex justify-center gap-[10px] flex-wrap">
          {lastRowPartners.map((partner) => (
            <div
              key={partner.name}
              className="bg-[#0000000D] rounded-xl py-4 px-6 flex items-center justify-center h-[75px] w-[calc((100%-10px)/2)] sm:w-[calc((100%-20px)/3)] lg:w-[calc((100%-50px)/6)]"
            >
              <img src={`/Assets/Logo clients et outils/${partner.name}`} alt={`${partner.name}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}