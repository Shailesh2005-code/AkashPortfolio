import { useState } from "react"

import thumb1 from "../assets/Projects/Thumbnails/1.jpeg";
import thumb2 from "../assets/Projects/Thumbnails/2.jpeg";
import thumb3 from "../assets/Projects/Thumbnails/3.jpeg";

import ad1 from "../assets/Projects/Ad Creatives/1.webp";
import ad2 from "../assets/Projects/Ad Creatives/2.webp";
import ad3 from "../assets/Projects/Ad Creatives/3.webp"
import ad4 from "../assets/Projects/Ad Creatives/4.jpg"
import ad5 from "../assets/Projects/Ad Creatives/5.jpg"
import ad6 from "../assets/Projects/Ad Creatives/6.jpg"
import ad7 from "../assets/Projects/Ad Creatives/7.png"
import ad8 from "../assets/Projects/Ad Creatives/8.jpg"
import ad9 from "../assets/Projects/Ad Creatives/9.png"

import logo1 from "../assets/Projects/logos/1.webp"
import logo2 from "../assets/Projects/logos/2.jpg"
import logo3 from "../assets/Projects/logos/3.png"

import left from "../assets/Projects/left.png"
import right from "../assets/Projects/right.png"





function Projects() {

  const thumbnailImages = [thumb1, thumb2, thumb3]

  const adImages = [
    ad1,
    ad2,
    ad3,
    ad4,
    ad5,
    ad6,
    ad7,
    ad8,
    ad9
  ]

  const logoImages = [logo1, logo2, logo3]



  const [thumbIndex, setThumbIndex] = useState(0)
  const [adIndex, setAdIndex] = useState(0)
  const [logoIndex, setLogoIndex] = useState(0)



  const nextSlide = (index, setIndex, array) => {
    setIndex((index + 1) % array.length)
  }

  const prevSlide = (index, setIndex, array) => {
    setIndex((index - 1 + array.length) % array.length)
  }



  return (

    <section 
    id="projects"
    className="
      relative
      w-full
      bg-[#dce8f6]
      px-[32px]
      pt-[-20px]
      pb-[20px]
    ">

      {/* MAIN GLASS BLOCK */}

      <div
        className="
          relative
          w-full

          rounded-[48px]

          overflow-hidden

          border
         border-[#6ea1ea]

bg-[#6699cc]

shadow-[0_-8px_30px_rgba(59,108,184,0.45)]

          backdrop-blur-[12px]
        "
      >

        {/* TEXTURE */}

        <div
          className="
            absolute
            inset-0

           opacity-[0.12]

bg-[radial-gradient(circle,rgba(255,255,255,0.8)_1px,transparent_1px)]

bg-[size:11px_11px]
          "
        ></div>



        {/* LIGHT EFFECT */}

        <div
          className="
            absolute
            top-[-120px]
            left-[120px]

            w-[700px]
            h-[260px]

            bg-[#9ec4ff]/35

            blur-[100px]
          "
        ></div>



        {/* CONTENT */}

        <div className="
          relative
          z-10

          px-[55px]
          py-[55px]
        ">

          {/* MAIN HEADING */}

          <h1 className="
            text-[78px]
            font-black
            text-[#203858]

            leading-none

            mb-[90px]
          ">
            Projects
          </h1>



          {/* ================================================= */}
          {/* THUMBNAILS */}
          {/* ================================================= */}

          <div className="mb-[150px]">

            <h2 className="
              text-[44px]
              font-black
              text-black

              mb-[38px]
            ">
              Thumbnails
            </h2>



            <div className="
              relative

              w-full
              h-[420px]

              flex
              items-center
              justify-center

              overflow-visible
            ">

              {/* LEFT BUTTON */}

<button
  onClick={() =>
    prevSlide(
      thumbIndex,
      setThumbIndex,
      thumbnailImages
    )
  }
  className="
    absolute
    left-[15px]
    top-1/2
    -translate-y-1/2

    z-50

    w-[60px]
    h-[60px]

    rounded-full

    bg-white/85
    backdrop-blur-xl

    shadow-[0_8px_24px_rgba(0,0,0,0.18)]

    transition-all
    duration-300

    hover:scale-110
  "
>
  <img
    src={left}
    alt="Previous"
    className="w-[28px] h-[28px] object-contain mx-auto"
  />
</button>



{/* RIGHT BUTTON */}

<button
  onClick={() =>
    nextSlide(
      thumbIndex,
      setThumbIndex,
      thumbnailImages
    )
  }
  className="
    absolute
    right-[15px]
    top-1/2
    -translate-y-1/2

    z-50

    w-[60px]
    h-[60px]

    rounded-full

    bg-white/85
    backdrop-blur-xl

    shadow-[0_8px_24px_rgba(0,0,0,0.18)]

    transition-all
    duration-300

    hover:scale-110
  "
>
  <img
    src={right}
    alt="Next"
    className="w-[28px] h-[28px] object-contain mx-auto"
  />
</button>



              {/* LEFT PREVIEW */}

              <img
                src={
                  thumbnailImages[
                    (thumbIndex - 1 + thumbnailImages.length) %
                    thumbnailImages.length
                  ]
                }
                alt=""
                className="
                  absolute
                  left-[120px]

                  w-[360px]
                  h-[220px]

                  object-cover

                  rounded-[24px]

                  blur-[4px]
                  opacity-45

                  scale-[0.82]

                  transition-all
                  duration-700
                  ease-in-out
                "
              />



              {/* ACTIVE IMAGE */}

              <img
                src={thumbnailImages[thumbIndex]}
                alt=""
                className="
                  w-[760px]
                  h-[400px]

                  object-cover

                  rounded-[28px]

                  z-20

                  scale-[1]

                  transition-all
                  duration-700
                  ease-in-out

                  shadow-[0_24px_60px_rgba(0,0,0,0.22)]
                "
              />



              {/* RIGHT PREVIEW */}

              <img
                src={
                  thumbnailImages[
                    (thumbIndex + 1) %
                    thumbnailImages.length
                  ]
                }
                alt=""
                className="
                  absolute
                  right-[120px]

                  w-[360px]
                  h-[220px]

                  object-cover

                  rounded-[24px]

                  blur-[4px]
                  opacity-45

                  scale-[0.82]

                  transition-all
                  duration-700
                  ease-in-out
                "
              />

            </div>

          </div>



          {/* ================================================= */}
          {/* AD CREATIVES */}
          {/* ================================================= */}

          <div className="mb-[20px]">

            <h2 className="
              text-[44px]
              font-black
              text-black

              mb-[38px]
            ">
              Ad Creatives
            </h2>



            <div className="
              relative

              w-full
              h-[800px]

              flex
              items-center
              justify-center

              overflow-visible
            ">

             {/* LEFT BUTTON */}

<button
  onClick={() =>
    prevSlide(
      adIndex,
      setAdIndex,
      adImages
    )
  }
  className="
    absolute
    left-[15px]
    top-1/2
    -translate-y-1/2

    z-50

    w-[60px]
    h-[60px]

    rounded-full

    bg-white/85
    backdrop-blur-xl

    shadow-[0_8px_24px_rgba(0,0,0,0.18)]

    transition-all
    duration-300

    hover:scale-110
  "
>
  <img
    src={left}
    alt="Previous"
    className="w-[28px] h-[28px] object-contain mx-auto"
  />
</button>



{/* RIGHT BUTTON */}

<button
  onClick={() =>
    nextSlide(
      adIndex,
      setAdIndex,
      adImages
    )
  }
  className="
    absolute
    right-[15px]
    top-1/2
    -translate-y-1/2

    z-50

    w-[60px]
    h-[60px]

    rounded-full

    bg-white/85
    backdrop-blur-xl

    shadow-[0_8px_24px_rgba(0,0,0,0.18)]

    transition-all
    duration-300

    hover:scale-110
  "
>
  <img
    src={right}
    alt="Next"
    className="w-[28px] h-[28px] object-contain mx-auto"
  />
</button>



              {/* LEFT PREVIEW */}

              <img
                src={
                  adImages[
                    (adIndex - 1 + adImages.length) %
                    adImages.length
                  ]
                }
                alt=""
                className="
                  absolute
                  left-[140px]

                  max-w-[300px]
                  max-h-[580px]

                  object-contain

                  rounded-[28px]

                  blur-[5px]
                  opacity-40

                  scale-[0.84]

                  transition-all
                  duration-700
                  ease-in-out
                "
              />



              {/* ACTIVE */}

              <img
                src={adImages[adIndex]}
                alt=""
                className="
                  max-w-[520px]
                  max-h-[640px]

                  object-contain

                  rounded-[32px]

                  z-20

                  transition-all
                  duration-700
                  ease-in-out

                  shadow-[0_28px_70px_rgba(0,0,0,0.24)]
                "
              />



              {/* RIGHT PREVIEW */}

              <img
                src={
                  adImages[
                    (adIndex + 1) %
                    adImages.length
                  ]
                }
                alt=""
                className="
                  absolute
                  right-[140px]

                  max-w-[300px]
                  max-h-[580px]

                  object-contain

                  rounded-[28px]

                  blur-[5px]
                  opacity-40

                  scale-[0.84]

                  transition-all
                  duration-700
                  ease-in-out
                "
              />

            </div>

          </div>



          {/* ================================================= */}
          {/* LOGOS */}
          {/* ================================================= */}

          <div>

            <h2 className="
              text-[44px]
              font-black
              text-black

              mb-[38px]
            ">
              Logos
            </h2>



            <div className="
              relative

              w-full
              h-[320px]

              flex
              items-center
              justify-center

              overflow-visible
            ">

             {/* LEFT BUTTON */}

<button
  onClick={() =>
    prevSlide(
      logoIndex,
      setLogoIndex,
      logoImages
    )
  }
  className="
    absolute
    left-[15px]
    top-1/2
    -translate-y-1/2

    z-50

    w-[60px]
    h-[60px]

    rounded-full

    bg-white/85
    backdrop-blur-xl

    shadow-[0_8px_24px_rgba(0,0,0,0.18)]

    transition-all
    duration-300

    hover:scale-110
  "
>
  <img
    src={left}
    alt="Previous"
    className="w-[28px] h-[28px] object-contain mx-auto"
  />
</button>



{/* RIGHT BUTTON */}

<button
  onClick={() =>
    nextSlide(
      logoIndex,
      setLogoIndex,
      logoImages
    )
  }
  className="
    absolute
    right-[15px]
    top-1/2
    -translate-y-1/2

    z-50

    w-[60px]
    h-[60px]

    rounded-full

    bg-white/85
    backdrop-blur-xl

    shadow-[0_8px_24px_rgba(0,0,0,0.18)]

    transition-all
    duration-300

    hover:scale-110
  "
>
  <img
    src={right}
    alt="Next"
    className="w-[28px] h-[28px] object-contain mx-auto"
  />
</button>



              {/* LEFT PREVIEW */}

              <img
                src={
                  logoImages[
                    (logoIndex - 1 + logoImages.length) %
                    logoImages.length
                  ]
                }
                alt=""
                className="
                  absolute
                  left-[180px]

                  w-[230px]
                  h-[150px]

                  object-contain

                  blur-[4px]
                  opacity-35

                  scale-[0.74]

                  transition-all
                  duration-700
                  ease-in-out
                "
              />



              {/* ACTIVE */}

              <img
                src={logoImages[logoIndex]}
                alt=""
                className="
                  w-[340px]
                  h-[220px]

                  object-contain

                  z-20

                  transition-all
                  duration-700
                  ease-in-out

                  drop-shadow-[0_12px_30px_rgba(0,0,0,0.20)]
                "
              />



              {/* RIGHT PREVIEW */}

              <img
                src={
                  logoImages[
                    (logoIndex + 1) %
                    logoImages.length
                  ]
                }
                alt=""
                className="
                  absolute
                  right-[180px]

                  w-[230px]
                  h-[150px]

                  object-contain

                  blur-[4px]
                  opacity-35

                  scale-[0.74]

                  transition-all
                  duration-700
                  ease-in-out
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Projects