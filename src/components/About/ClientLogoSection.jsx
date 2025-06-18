import React from "react";
import Image from "next/image";

// const clients = [
//   { name: "Epihfermal", logo: "/About/logos/ephiermal1.png" },
//   { name: "Bluiera", logo: "/About/logos/bluiera.png" },
//   { name: "Vkopa", logo: "/About/logos/vkopa.png" },
//   { name: "Weinmela", logo: "/About/logos/weinmela.png" },
//   { name: "Blank", logo: "/About/logos/blank.png" },
//   { name: "Nitin", logo: "/About/logos/nitin.png" },
//   { name: "Bluiera", logo: "/About/logos/bluiera1.png" },
//   { name: "Epihfermal", logo: "/About/logos/ephiermal1.png" },
//   { name: "Nitin", logo: "/About/logos/nitin1.png" },
//   { name: "Bluiera", logo: "/About/logos/bluiera2.png" },
//   { name: "Epihfermal", logo: "/About/logos/ephiermal2.png" },
//   { name: "Blank", logo: "/About/logos/blank1.png" },
//   { name: "Nitin", logo: "/About/logos/nitin2.png" },
//   { name: "Vkopa", logo: "/About/logos/vkopa1.png" },
//   { name: "Blank", logo: "/About/logos/blank1.png" }, // reused because no blank2.png
//   { name: "Vkopa", logo: "/About/logos/vkopa1.png" }, // reused because no vkopa2.png
//   { name: "Locohim", logo: "/About/logos/locohim.png" },
//   { name: "Nitin", logo: "/About/logos/nitin2.png" }, // reused as fallback
//   { name: "Vkopa", logo: "/About/logos/vkopa1.png" }, // reused
//   { name: "Vkopa", logo: "/About/logos/vkopa1.png" }, // reused
//   { name: "Bluiera", logo: "/About/logos/bluiera2.png" }, // reused
// ];

// // This function can remain as is if you want fixed rows,
// // but for true responsiveness, you might reconsider hardcoding slice indices.
// const getThreeRows = (clients) => [
//   clients.slice(0, 9),
//   clients.slice(9, 16),
//   clients.slice(16, 21),
// ];

// const ClientLogo = ({ name, logo }) => (
//   <div className="client-logo-item flex items-center gap-2 px-4 py-2 hover:-translate-y-1 transition duration-200 cursor-pointer">
//     <div className="w-8 h-8 relative">
//       <Image
//         src={logo}
//         alt={name}
//         fill
//         className="rounded-full object-contain"
//       />
//     </div>
//     <span className="text-gray-800 text-sm sm:text-base">{name}</span>
//   </div>
// );

// const ClientLogoSection = () => {
//   const rows = getThreeRows(clients);

//   return (
//     <section className="py-16 text-center max-w-[1520px]">
//       <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="font-extrabold text-[#313332] text-4xl sm:text-5xl lg:text-6xl mb-4">
//           Our Clients & partners
//         </h1>
//         <p className="mt-4 text-base text-[#646966] leading-relaxed max-w-2xl mx-auto">
//           Effortlessly organize your task with intuitive prioritization tools,
//           ensuring you focus on what truly matters.
//         </p>

//         <div className="mt-16  max-w-[1480px] mx-auto flex flex-col items-center gap-6">
//           {rows.map((row, index) => (
//             <div
//               key={index}
//               className="flex justify-center flex-wrap gap-x-3 gap-y-2 sm:gap-x-5 sm:gap-y-3 lg:gap-x-8 lg:gap-y-4" // Adjusted gaps
//             >
//               {row.map((client, idx) => (
//                 <ClientLogo key={idx} {...client} />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


const clients = [
  { name: "Epihfermal", logo: "/About/logos/ephiermal1.png" },
  { name: "Bluiera", logo: "/About/logos/bluiera.png" },
  { name: "Vkopa", logo: "/About/logos/vkopa.png" },
  { name: "Weinmela", logo: "/About/logos/weinmela.png" },
  { name: "Blank", logo: "/About/logos/blank.png" },
  { name: "Nitin", logo: "/About/logos/nitin.png" },
  { name: "Bluiera", logo: "/About/logos/bluiera1.png" },
  { name: "Epihfermal", logo: "/About/logos/ephiermal1.png" },
  { name: "Nitin", logo: "/About/logos/nitin1.png" },
  { name: "Bluiera", logo: "/About/logos/bluiera2.png" },
  { name: "Epihfermal", logo: "/About/logos/ephiermal2.png" },
  { name: "Blank", logo: "/About/logos/blank1.png" },
  { name: "Nitin", logo: "/About/logos/nitin2.png" },
  { name: "Vkopa", logo: "/About/logos/vkopa1.png" },
  { name: "Blank", logo: "/About/logos/blank1.png" }, // reused because no blank2.png
  { name: "Vkopa", logo: "/About/logos/vkopa1.png" }, // reused because no vkopa2.png
  { name: "Locohim", logo: "/About/logos/locohim.png" },
  { name: "Nitin", logo: "/About/logos/nitin2.png" }, // reused as fallback
  { name: "Vkopa", logo: "/About/logos/vkopa1.png" }, // reused
  { name: "Vkopa", logo: "/About/logos/vkopa1.png" }, // reused
  { name: "Bluiera", logo: "/About/logos/bluiera2.png" }, // reused
];

const ClientLogo = ({ name, logo }) => (
  <div className="flex items-center gap-2 px-4 py-2 hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
    <div className="w-8 h-8 relative">
      <Image
        src={logo}
        alt={name}
        fill
        className="rounded-full object-contain"
      />
    </div>
    <span className="text-[#1A202C] font-semibold font-inter text-[24px] sm:text-base md:text-sm">
      {name}
    </span>
  </div>
);


const ClientLogoSection = () => {
  return (
    <section className="py-16 text-center ">
      <div className=" mx-auto  flex flex-col gap-[16px] px-4 sm:px-6 lg:px-8">
        <h1 className="font-extrabold text-[#313332] text-3xl sm:text-5xl lg:text-5xl ">
          Our Clients & partners
        </h1>
        <p className="mt-4 text-base text-[#646966]  font-semibold leading-relaxed max-w-xl mx-auto">
          Effortlessly organize your task with intuitive prioritization tools,
          ensuring you focus on what truly matters.
        </p>

  
        <div className="mt-16 max-w-[1400px] mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 sm:gap-x-5 sm:gap-y-3 lg:gap-x-8 lg:gap-y-4">
            {clients.map((client, idx) => (
              <ClientLogo key={idx} {...client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoSection;