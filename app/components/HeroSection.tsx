'use client';


import { Star, Award, Heart, ChevronDown, BarChart3, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';

export default function HeroSection() {
  //const [showMoreBio, setShowMoreBio] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50">
       


      {/* Hero Section */}
      <section className="overflow-hidden  min-h-screen  flex justify-center">
        <div className="max-w-[1400px] w-full relative">
        {/* Gerold the Pig Background Image */}
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <Image
            width={500}
            height={500}
            src="/gerold.jpeg"
            alt="Gerold the pig background"
            className="w-full  h-full  object-cover object-center"
          />
        </motion.div>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-yellow-800/40 to-blue-900/50"></div>

        <motion.div
          className="pt-20  container mx-auto px-6 relative z-10  flex flex-col justify-start   md:justify-start"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-xl ">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              GEROLD
            </motion.h1>

            <motion.p
              className="text-xl text-white mb-8 drop-shadow-md font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Meet the finest Yorkshire pig with exceptional posture and a championship smile
            </motion.p>
          </div>
        </motion.div>

       
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-white/80" />
        </motion.div>
        </div>
      </section>

       {/* Action Buttons */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-blue-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Explore Gerold&apos;s World
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover more about this exceptional Yorkshire pig through our gallery and learn how you can support his journey to championship.
              </p>
            </motion.div>
            
            <motion.div
              className="flex justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-6 max-w-lg w-full">
                <motion.a
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center group"
                  href="/gallery"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>📸</span>
                    <span className="group-hover:text-yellow-200 transition-colors">View Gallery</span>
                  </div>
                </motion.a>
                
                <motion.a
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center group"
                  href="/support"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>🏆</span>
                    <span className="group-hover:text-white transition-colors">Support Gerold</span>
                  </div>
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-sm text-gray-500">
                Join us in celebrating excellence in agriculture and FFA values
              </p>
            </motion.div>
          </div>
        </section>


      {/* About Gerold */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
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
                  in livestock shows. Gerold&apos;s dedication to maintaining perfect posture has earned
                  him recognition from judges and fellow competitors alike.
                </p>
                <div className="space-y-4">
                  <p>
                    Yorkshire pigs are known for their intelligence, hardiness, and excellent mothering abilities.
                    Gerold embodies all these traits while showcasing the breed&apos;s characteristic white coloring
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

            <motion.div
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-xl"
              
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-6xl">🐷</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Breed Characteristics</h3>
                <motion.div
                  className="space-y-3 text-left"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { label: 'Breed:', value: 'Yorkshire', color: 'text-blue-700' },
                    { label: 'Color:', value: 'Pure White', color: 'text-yellow-600' },
                    { label: 'Posture:', value: 'Exceptional', color: 'text-green-600' },
                    { label: 'Temperament:', value: 'Gentle & Calm', color: 'text-purple-600' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between"
                      
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-gray-600">{item.label}</span>
                      <span className={`font-semibold ${item.color}`}>{item.value}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Callout Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-yellow-500">
        <div className="container mx-auto px-6">
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Track Gerold&apos;s Journey
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Dive deep into the data behind Gerold&apos;s success! Explore detailed statistics, 
                growth charts, feed conversion ratios, and cost breakdowns of raising a champion Yorkshire pig.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/pigstats"
                  className="inline-flex items-center space-x-3 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <TrendingUp className="w-6 h-6" />
                  <span>View Detailed Statistics</span>
                </Link>
              </motion.div>
              <motion.p
                className="text-white/70 text-sm mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                See weight progression, feed efficiency, costs, and more!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-16 bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Achievements & Recognition
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Award,
                title: 'Perfect Posture',
                description: 'Recognized for maintaining exceptional stance and composure during shows',
                color: 'yellow'
              },
              {
                icon: Star,
                title: 'Breed Champion',
                description: 'Outstanding Yorkshire representative with pure bloodlines',
                color: 'blue'
              },
              {
                icon: Heart,
                title: 'Community Favorite',
                description: 'Beloved by judges and spectators for gentle nature',
                color: 'green'
              }
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  <motion.div
                    className={`w-16 h-16 bg-${achievement.color}-100 rounded-full mx-auto mb-4 flex items-center justify-center`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className={`w-8 h-8 text-${achievement.color}-600`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Owner Section */}
      <section id="owner" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Meet the Owner
            </motion.h2>
            <motion.div
              className="bg-gradient-to-r from-yellow-50 to-blue-50 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
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
                      agriculture and animal husbandry. As a freshman, she&apos;s already making her
                      mark in the FFA community.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div
                    className=""
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/savannah-head.jpeg"
                      alt="Savannah Silveira"
                      width={192}
                      height={192}
                      className="bg-gradient-to-br from-yellow-200 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                    />
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-lg p-4 shadow-md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-bold text-gray-800 mb-2">FFA Values</h4>
                    <motion.div
                      className="text-sm text-gray-600 space-y-1"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {[
                        'Dedication to Excellence',
                        'Responsible Animal Care',
                        'Academic Achievement',
                        'Community Leadership'
                      ].map((value, index) => (
                        <p
                          key={index}
                        >
                          • {value}
                        </p>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Footer */}
      <motion.footer
        className="bg-gray-800 text-white py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="flex items-center justify-center space-x-3 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-black font-bold">G</span>
            </motion.div>
            <span className="text-xl font-bold">Gerold - Yorkshire Champion</span>
          </motion.div>
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
      </motion.footer>
    </div>
  );
}