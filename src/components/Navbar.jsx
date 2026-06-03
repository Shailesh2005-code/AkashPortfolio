import { useState } from "react"

function Navbar() {

  const [active, setActive] = useState("about")

  return (

   <div className="w-full flex justify-center absolute top-7 left-0 z-50">

      <div className="w-[95%] flex items-center justify-between">


        {/* LEFT LOGO */}

        <div className="pl-4">

          <h1 className="text-[28px] font-black leading-none text-black">
            Akash Guntamukkala
          </h1>

          <p className="text-[11px] tracking-[8px] text-[#50637c] mt-2 ml-[2px]">
            PORTFOLIO
          </p>

        </div>



        {/* CENTER GLASS NAVBAR */}

       <div
  className="
    fixed
    top-7
    left-1/2
    -translate-x-1/2

    overflow-hidden
    rounded-full

    border
    border-[#6699CC]

    px-14
    py-5

    bg-[linear-gradient(135deg,rgba(102,153,204,0.90),rgba(120,170,220,0.85),rgba(102,153,204,0.90))]

    backdrop-blur-[12px]

    shadow-[0_18px_40px_rgba(70,100,150,0.22)]

    z-[9999]
  "
>


          {/* NAV ATMOSPHERE */}

          <div className="fixed inset-0 overflow-hidden">


            {/* LEFT BLUE SHADE */}

            <div
              className="
                absolute
                left-[20%]
                top-[-20px]
                w-[180px]
                h-[120px]
                bg-[#6e94c4]/35
                blur-[55px]
              "
            ></div>



            {/* CENTER WHITE LIGHT */}

            <div
              className="
                absolute
                left-[45%]
                top-[-30px]
                w-[180px]
                h-[90px]
                bg-white/20
                blur-[50px]
                rotate-[-10deg]
              "
            ></div>



            {/* METALLIC SHINE */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.10]
                bg-[linear-gradient(120deg,transparent,white,transparent)]
              "
            ></div>



            {/* TOP GLOSS */}

            <div
              className="
                absolute
                top-0
                left-0
                w-full
                h-[1px]
                bg-white/50
              "
            ></div>

          </div>



          {/* NAV LINKS */}

          <ul className="relative z-20 flex items-center gap-16 text-[16px] font-medium">

            <li>
              <a
                href="#about"
                onClick={() => setActive("about")}
                className={`${active === "about"
                  ? "text-[#efe8cf]"
                  : "text-[#111]"
                  } hover:text-[#1d5aa6] duration-300 cursor-pointer`}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setActive("skills")}
                className={`${active === "skills"
                  ? "text-[#efe8cf]"
                  : "text-[#111]"
                  } hover:text-[#1d5aa6] duration-300 cursor-pointer`}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setActive("projects")}
                className={`${active === "projects"
                  ? "text-[#efe8cf]"
                  : "text-[#111]"
                  } hover:text-[#1d5aa6] duration-300 cursor-pointer`}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setActive("contact")}
                className={`${active === "contact"
                  ? "text-[#efe8cf]"
                  : "text-[#111]"
                  } hover:text-[#1d5aa6] duration-300 cursor-pointer`}
              >
                Contact
              </a>
            </li>

          </ul>

        </div>



        {/* RIGHT GLASS BUTTON */}

        <a
  href="mailto:akashguntamukkala11@gmail.com"
  className="
    relative
    overflow-hidden
    rounded-[18px]
    border
    border-[#a8c0de]/45
    px-8
    py-4
    bg-[#6699cc]
    backdrop-blur-[12px]
    shadow-[0_15px_35px_rgba(70,100,150,0.22)]
    text-[18px]
    font-medium
    text-[#24384e]
    hover:scale-[1.03]
    duration-300
    inline-flex
    items-center
    justify-center
  "
>

  <div
    className="
      absolute
      inset-0
      opacity-[0.10]
      bg-[linear-gradient(120deg,transparent,white,transparent)]
    "
  ></div>

  <span className="relative z-20">
    Let’s Work Together ↗
  </span>

</a>
      </div>

    </div>

  )
}

export default Navbar