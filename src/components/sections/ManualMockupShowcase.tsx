import React from 'react';

export const ManualMockupShowcase: React.FC = () => {
  return (
    <section className="w-full bg-stone-950 border-b border-stone-800">
      <div className="w-full relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.5/1] overflow-hidden">
        {/* Fullwidth background image with parallax or cover effect */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
          style={{ backgroundImage: 'url("/assets/box-mockup.png")' }}
        />
        
        {/* Subtle overlay for contrast if needed */}
        <div className="absolute inset-0 bg-stone-950/10 pointer-events-none" />
      </div>
    </section>
  );
};
