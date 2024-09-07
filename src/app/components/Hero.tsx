'use client'

import Image from 'next/image'
import React from 'react'
import hero from '@/assets/herogambar1.png'

const Hero = () => {
  return (
    <div className="relative bg-custom-red py-16 pb-52">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 lg:px-0 relative z-10">
        {/* Kolom kiri untuk gambar */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <Image
            src={hero}
            alt="Cleo Products"
            className="w-full rounded-lg"
          />
        </div>

        {/* Kolom kanan untuk teks */}
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4 mt-2 bg-clip-text">
            Cleo Pure Water, Lebih Murni dengan Penyaringan Membran Hiperfiltrasi
          </h1>
          <p className="mb-4">
            Air murni Cleo disaring dengan teknologi penyaringan yang dikenal
            sebagai Hiperfiltrasi, melalui saringan yang sangat halus air diolah
            menjadi lebih murni dibandingkan air minum biasa.
          </p>
          <p>
            Menjadikan Cleo sebagai pilihan yang tepat untuk dikonsumsi sehari-hari
            dan menemani berbagai aktifitas. Air yang murni untuk hidup yang lebih
            sehat.
          </p>
        </div>
      </div>

      {/* Video dengan posisi absolute di atas semua elemen */}
      <div className="absolute inset-0 flex justify-center items-center top-full pt-52 z-20 ">
        <iframe
          className="w-full h-[315px] md:w-[560px] md:h-[315px] lg:w-[1080px] lg:h-[610px] rounded-2xl"
          src="https://www.youtube.com/embed/umdPLO4F5MM?start=14"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
