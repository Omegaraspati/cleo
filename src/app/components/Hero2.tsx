'use client'

import React from 'react'
import Image from 'next/image'
import footer from '@/assets/footerloog.png'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const Hero2 = () => {
    return (
        <div>
            <div className="w-full h-64 bg-white">
                <div className="relative pt-96 top-full "></div> {/* Tambah padding di atas untuk memberi ruang bagi video */}
                <div className="relative pt-5 top-full bg-custom-red"> {/* Tambah padding di atas untuk memberi ruang bagi video */}
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-center text-3xl font-bold text-black mb-4">Event Tahunan CLEO</h2>

                        <div className="flex justify-center mb-8 ">
                            {/* Gambar event */}
                            <iframe
                                className="w-full h-[315px] md:w-[560px] md:h-[315px] lg:w-[1080px] lg:h-[610px] rounded-2xl"
                                src="https://www.youtube.com/embed/WNLl7pCCAHw?start=3"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            >
                            </iframe>
                        </div>

                        {/* Deskripsi event */}
                        <div className="text-left text-white">
                            <h3 className="text-2xl font-bold mb-4">PERAYAAN ULANG TAHUN CLEO KE 20 TAHUN</h3>
                            <p className="text-lg mb-4">
                                Cleo 20th Fest adalah puncak perayaan ulang tahun Cleo yang ke-20 Tahun. Melalui acara ini, Cleo ingin merayakan berbagai pencapaian selama 20 tahun yang telah memberikan Air Murni Terbaik untuk kehidupan keluarga Indonesia.
                            </p>
                        </div>

                    </div>
                        <footer className="z-40 bg-gradient-to-b from-orange-500 to-red-600 text-white py-10 max-w-[2000px]">
                            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

                                {/* Kolom 1: Logo */}
                                <div>
                                    <div className="mb-4">
                                        {/* Replace with your logo */}
                                        <Image src={footer} alt="Cleo Logo" width={150} height={50} />
                                    </div>
                                    <p className="text-lg font-semibold">Cleo Pure Water</p>
                                </div>

                                {/* Kolom 2: Link Navigasi */}
                                <div>
                                    <h3 className="font-bold mb-2">Layanan Pelanggan</h3>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="hover:underline">Produk Cleo</a></li>
                                        <li><a href="#" className="hover:underline">Brand</a></li>
                                        <li><a href="#" className="hover:underline">Tentang Cleo</a></li>
                                        <li><a href="#" className="hover:underline">Event Cleo</a></li>
                                    </ul>
                                </div>

                                {/* Kolom 3: Kontak dan Alamat */}
                                <div>
                                    <h3 className="font-bold mb-2">PT Sariguna Primatirta Tbk.</h3>
                                    <p>Jl. Raya A. Yani 41-43, Komplek Central Square Blok C-1, Gedangan - Sidoarjo, East Java 61254</p>
                                    <div className="flex space-x-4 mt-4">
                                        {/* Replace with actual icons/links */}
                                        <a href="#"><span className ="w-8 h-8 "><FaFacebook/></span></a>
                                        <a href="#"><span className ="w-8 h-8 "><FaInstagram/></span></a>
                                        <a href="#"><span className ="w-8 h-8 "><FaYoutube/></span></a>
                                        <a href="#"><span className ="w-8 h-8 "><FaTiktok/></span></a>
                                      
                                    </div>
                                </div>
                            </div>

                            <div className="text-center text-white mt-8">
                                <p>Copyright © 2023 - CLEO . Cleo Pure Water - Tanobel</p>
                            </div>

                            {/* WhatsApp Button */}
                            <div className="fixed bottom-4 right-4">
                                <a href="https://wa.me/1234567890" target="_blank" className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center space-x-2">
                                    <FaWhatsapp className="w-6 h-6" />
                                    <span>Halo CLEO</span>
                                </a>
                            </div>
                        </footer>
                </div>
            </div>
            {/* FOOTER */}

        </div>
    )
}

export default Hero2