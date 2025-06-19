'use client';

import React, { useState } from 'react';
import { Star, Award, Users, Heart, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const [showMoreBio, setShowMoreBio] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-black shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">G</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-yellow-400">Gerold</h1>
                <p className="text-yellow-200 text-sm">Prize Yorkshire Pig</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-yellow-300 hover:text-yellow-100 font-medium transition-colors">About</a>
              <a href="#achievements" className="text-yellow-300 hover:text-yellow-100 font-medium transition-colors">Achievements</a>
              <a href="#owner" className="text-yellow-300 hover:text-yellow-100 font-medium transition-colors">Owner</a>
              <a href="#contact" className="text-yellow-300 hover:text-yellow-100 font-medium transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative md:py-20 py-10 overflow-hidden md:min-h-screen">
        {/* Gerold the Pig Background Image */}
        <div className="absolute inset-0">


          <img
            src="/gerold.jpeg" // Replace with your uploaded pig image path
            alt="Gerold the pig background"
            className="w-full h-full object-cover object-center"
          />

        </div>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-yellow-800/40 to-blue-900/50"></div>

        {/* Additional subtle overlay for better contrast */}
        <div className="absolute inset-0 "></div>

        <div className="container  mx-auto  px-6 relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-yellow-100/90 text-blue-900 px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              <Award className="w-4 h-4" />
              <span>FFA Champion</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 mb-6 drop-shadow-lg">
              GEROLD
            </h1>
            <p className="text-2xl text-white mb-8 drop-shadow-md font-medium">
              Meet the finest Yorkshire pig with exceptional posture and championship bloodlines
            </p>
            <div className="h-[200px] pt-34 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-900/90 hover:bg-blue-800 text-xl text-yellow-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm">
                View Gallery
              </button>
              <button className="bg-yellow-600/90 hover:bg-yellow-500 text-xl text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm">
                Support  Gerold Today!
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div>
      </section>

      {/* About Gerold */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Gerold</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Gerold is a magnificent Yorkshire pig known throughout the FFA community for his
                  <span className="text-yellow-600 font-semibold"> exceptional posture</span> and pristine white coat.
                  As a purebred Yorkshire, he represents the finest qualities of this remarkable breed.
                </p>
                <p>
                  His outstanding conformation and gentle temperament make him a standout competitor
                  in livestock shows. Gerold's dedication to maintaining perfect posture has earned
                  him recognition from judges and fellow competitors alike.
                </p>
                <div className="space-y-4">
                  <p>
                    Yorkshire pigs are known for their intelligence, hardiness, and excellent mothering abilities.
                    Gerold embodies all these traits while showcasing the breed's characteristic white coloring
                    and erect ears that make Yorkshire pigs so distinctive.
                  </p>
                  <p>
                    Under the careful care and training of Savannah Silveira, Gerold has developed into
                    a champion-quality pig that represents the best of agricultural excellence and
                    FFA values of hard work, dedication, and responsible animal husbandry.
                  </p>
                </div>

              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-6xl">🐷</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Breed Characteristics</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Breed:</span>
                    <span className="font-semibold text-blue-700">Yorkshire</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Color:</span>
                    <span className="font-semibold text-yellow-600">Pure White</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Posture:</span>
                    <span className="font-semibold text-green-600">Exceptional</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temperament:</span>
                    <span className="font-semibold text-purple-600">Gentle & Calm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-16 bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Achievements & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Perfect Posture</h3>
                <p className="text-gray-600">Recognized for maintaining exceptional stance and composure during shows</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Breed Champion</h3>
                <p className="text-gray-600">Outstanding Yorkshire representative with pure bloodlines</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Community Favorite</h3>
                <p className="text-gray-600">Beloved by judges and spectators for gentle nature</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section id="owner" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet the Owner</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-blue-50 rounded-2xl p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Savannah Silveira</h3>
                  <div className="space-y-3 text-lg text-gray-600">
                    <p><span className="font-semibold text-yellow-600">Freshman</span> at Tulare Union High School</p>
                    <p><span className="font-semibold text-blue-700">Great Student</span> with excellent academic performance</p>
                    <p><span className="font-semibold text-green-600">Very Consistent</span> in all her endeavors</p>
                  </div>
                  <div className="mt-6">
                    <p className="text-gray-700 leading-relaxed">
                      Savannah is dedicated to excellence in both academics and FFA. Her consistent
                      approach to caring for Gerold demonstrates her commitment to responsible
                      agriculture and animal husbandry. As a freshman, she's already making her
                      mark in the FFA community.
                    </p>
                  </div>
                </div>
                <div className="text-center">

                  <div className="">
                    <Image
                      src="/savannah-head.jpeg" // Replace with your uploaded image path
                      alt="Savannah Silveira"
                      width={192}
                      height={192}
                      className=" bg-gradient-to-br from-yellow-200 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                    />

                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-bold text-gray-800 mb-2">FFA Values</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>• Dedication to Excellence</p>
                      <p>• Responsible Animal Care</p>
                      <p>• Academic Achievement</p>
                      <p>• Community Leadership</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-900 to-yellow-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Interested in learning more about Gerold or connecting with our FFA program?
            We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Schedule Visit
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-yellow-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Join FFA Program
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">G</span>
            </div>
            <span className="text-xl font-bold">Gerold - Yorkshire Champion</span>
          </div>
          <p className="text-gray-400 mb-4">
            Proudly representing Tulare Union High School FFA
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2025 Savannah Silveira</span>
            <span>•</span>
            <span>Future Farmers of America</span>
            <span>•</span>
            <span>Tulare Union High School</span>
          </div>
        </div>
      </footer>
    </div>
  );
}