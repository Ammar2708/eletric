'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "House Architecture Design in Los Angeles, CA",
    date: "20 Oct 2020",
    location: "Los Angeles",
    service: "Architecture",
    img: "/img2.png",
  },
  {
    title: "Modern Villa Project in California",
    date: "15 Jun 2021",
    location: "California",
    service: "Interior Design",
    img: "/img3.png",
  },
  {
    title: "Luxury Residence Design in New York",
    date: "10 Feb 2022",
    location: "New York",
    service: "Architecture",
    img: "/img4.png",
  },
]

export default function Page() {
  return (
    <div className="bg-white text-black ">

      {/* HERO */}
      <section className="pt-29 grid lg:grid-cols-2 gap-8 px-6 md:px-12 py-14 bg-black text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-xl">
          Take a look at our <br /> recent projects
        </h1>

        <p className="text-gray-400 text-base md:text-lg flex items-end max-w-lg">
          Explore our latest structural achievements, where modern design meets
          technical precision and uncompromising quality.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="px-6 md:px-12 py-14 space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group border-b border-gray-300 pb-8"
          >

            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={project.img}
                alt={project.title}
                width={1400}
                height={900}
                className="w-full h-[320px] md:h-[380px] object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col lg:flex-row justify-between gap-6 mt-6">
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-medium max-w-lg">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-8 text-xs md:text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-black">Date</p>
                  <p>{project.date}</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Location</p>
                  <p>{project.location}</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Service</p>
                  <p>{project.service}</p>
                </div>
              </div>

            </div>

          </motion.div>
        ))}
      </section>

    </div>
  )
}