import React from 'react';

const sponsors = [
  { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
  { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png' },
  { name: 'Spotify', logo: 'https://download.logo.wine/logo/Spotify/Spotify-Logo.wine.png' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png' },
];

const Sponsors = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-white rounded-lg shadow-md flex flex-wrap justify-center items-center gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="p-4 flex items-center justify-center h-24 w-40">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
