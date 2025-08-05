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
    <div className="min-h-screen">



      {/* Hero Section */}
      <section className="overflow-hidden  min-h-screen  flex justify-center bg-white">
        <div className="max-w-[1100px] w-full  relative  ">
          {/* Gerold the Pig Background Image */}
          <motion.div
            className="absolute inset-0"
            style={{ y: heroY }}
          >
            <Image
              width={1000}
              height={1000}
              src="/gerold.jpeg"
              alt="Gerold the pig background"
              className="w-full  h-full  object-cover   object-center"
            />
          </motion.div>

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-yellow-800/40 to-blue-900/50 "></div>

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
                Meet the finest Crossbred pig with exceptional posture.
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
              Discover more about this exceptional pig through our gallery
               showcasing his journey.
            </p>
          </motion.div>

            <motion.div
              className="flex justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex justify-center max-w-lg w-full">
                <motion.a
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center group"
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
              </div>
            </motion.div>          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
             
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
               Gerold is a barrow, white, crossbred pig. Throughout his journey, he has experienced both challenges and progress.
</p>
<p>
Gerold began his training in the showpen, demonstrating strong natural posture and a solid walking pace. In the early weeks, he made steady progress as he and his handler, Savannah, focused on building consistent technique. However, Gerold soon began to show signs of resistance-attempting to wander off, refusing to walk, and becoming increasingly stubborn.
</p>
<p>
After taking a short break and seeing no improvement, Savannah made the decision to stay committed and work through the difficulties. 
With patience and determination, she continued to guide Gerold, encouraging him to walk even short distances within the show pen,
 and around the farm. Several days of persistence and plenty of squealing, Gerold finally responded. He began walking again.
</p>
<p>
Now Gerold and Savannah train daily around the farm. He stays by her side, maintaining a steady pace, and showing improvement with each session. Together, they continue to practice, develop new skills, and prepare for the upcoming Tulare County Fair.
</p>
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
                    { label: 'Breed:', value: 'Barrow, Crossbred', color: 'text-blue-700' },
                    { label: 'Color:', value: 'White', color: 'text-yellow-600' },
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
                      Hello, I am Savannah Silveira, this is my first year raising a hog, and this was my experience.

Going into this journey is was terrified, thinking I wouldn't have the talent to do it, and wasn't experienced enough. Going into that, I was ending my 8th grade year, which would mean I would be with a bunch of high schoolers that I don't know. May 10th, picking day-oh my gosh was I nervous. So many things were going through my head that day, thinking about how this had to be the perfect pig, and if it wasn't I wouldn't be good enough. When I was picking I had my eye on a hampshire hog, and though it was perfect, but I looked way down at the end of the pen, and saw a Yorkshire hog. From that point on I knew he was the one. Once I picked him out I had no idea what to do, or even how to get him to his pen. He was in his pen, and was just looking at him making sure he looked good. I realized-wow I'm actually doing this. Day one of taking care of my pig, and I had no idea what to do, looking around at what experienced people were doing. First couple of weeks go by and I know mostly what to do, but still unsure of a couple things. Our first showmanship practice was coming up and I was so scared. I just knew my pig was going to run away from me, and I would get out first. But little did I know I was one of the last people in the pen. After that practice I felt so confident, knowing my pig probably didn't even need practice, but that's where it all went wrong.

 I didn't walk my pigh for about 4 weeks, almost a month. Didn't want to walk arond the farm, in the show pen, or even the direction I wanted him to go in. All he knew where to go was the wash pens, and his pen. I knew I made the biggest mistake of my journey. Thinking I should've walked him the first month I had him, but instead I didn't. So I decided to not let him get what he wants, and pushed him to his limits. That was a hard part, he knew that after I washed him he would get food. That day I didn't give him food right away, after washing him, and pushed him into the showmanship pen. He was breathing so heavy, and relized he was really out of shape. Driving home that day I just wanted to cry, knowing I would never be able to get him walking again. I was hopeless. A couple days later, I tried walking him, again, and again, he didn't want too. Little did I know that I just had to be more agresive with him, and would not let him choose where he wanted to go. After that day when I was hard on him, he finally started to listen. Sure enough he was walking around the pen, I coundn't believe my eyes. Yes, he was running half the time, but sure enough I got him to calm down. Next thing I know, he is walking right next to me, showing massive prograss. I finally felt achived in my journey, and that I could do anything. So if you every feel hopeless, and just want to give up, don't, because if you just keeping pushing yourself, you will feel acomplished in the end.
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