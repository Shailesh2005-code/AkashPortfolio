import phoneIcon from "../assets/contact/1.svg"
import mailIcon from "../assets/contact/2.svg"
import instagramIcon from "../assets/contact/3.svg"
import linkedinIcon from "../assets/contact/4.svg"
import behanceIcon from "../assets/contact/5.svg"

function Contact() {
  return (

    <section
      id="contact"
      className="
        w-full
        px-[20px]
        py-[30px]
        bg-[#dce8f6]
      "
    >

      {/* HEADING */}

      <h1 className="
        text-[72px]
        font-black
        text-black
        mb-[26px]
      ">
        Contact
      </h1>



      {/* CONTACT GLASS BLOCK */}

      <div
        className="
          relative
          w-full
          min-h-[420px]

          rounded-[50px]
          border
            border-[#6ea1ea]
            shadow-[0_0_30px_rgba(59,108,184,0.45),0_0_80px_rgba(59,108,184,0.25)]

          overflow-hidden

          bg-[#6699cc]

         

          backdrop-blur-[12px]
        "
      >

        {/* TEXTURE */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.08]

            bg-[radial-gradient(circle,rgba(255,255,255,0.9)_1px,transparent_1px)]

            bg-[size:6px_6px]
          "
        ></div>



        {/* LIGHT GLOW */}

        <div
          className="
            absolute
            left-[180px]
            top-[-80px]

            w-[500px]
            h-[250px]

            bg-white/30

            blur-[80px]
          "
        ></div>



        {/* CONTENT */}

        <div className="relative z-10 p-[40px]">

          {/* PHONE */}

          <div className="flex items-center gap-5 mb-8">

            <img
              src={phoneIcon}
              alt="Phone"
              className="w-[42px] h-[42px] object-contain"
            />

            <a
              href="tel:7780615170"
              className="
                text-[24px]
                text-black
                hover:text-[#2b62b8]
                transition-all
              "
            >
              7780615170
            </a>

          </div>



          {/* EMAIL */}

          <div className="flex items-center gap-5 mb-8">

            <img
              src={mailIcon}
              alt="Mail"
              className="w-[42px] h-[42px] object-contain"
            />

            <a
              href="mailto:akashguntamukkal11@gmail.com"
              className="
                text-[24px]
                text-black
                hover:text-[#2b62b8]
                transition-all
              "
            >
              akashguntamukkal11@gmail.com
            </a>

          </div>



          {/* INSTAGRAM */}

          <div className="flex items-center gap-5 mb-8">

            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-[42px] h-[42px] object-contain"
            />

            <a
              href="https://instagram.com/crafix_creations"
              target="_blank"
              rel="noreferrer"
              className="
                text-[24px]
                text-black
                hover:text-[#2b62b8]
                transition-all
              "
            >
              instagram.com/crafix_creations
            </a>

          </div>



          {/* LINKEDIN */}

          <div className="flex items-center gap-5 mb-8">

            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-[42px] h-[42px] object-contain"
            />

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="
                text-[24px]
                text-black
                hover:text-[#2b62b8]
                transition-all
              "
            >
              linkedin.com/in/Akash-Guntamukkala
            </a>

          </div>



          {/* BEHANCE */}

          <div className="flex items-center gap-5">

            <img
              src={behanceIcon}
              alt="Behance"
              className="w-[42px] h-[42px] object-contain"
            />

            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              className="
                text-[24px]
                text-black
                hover:text-[#2b62b8]
                transition-all
              "
            >
              Behance.net/Akash-Guntamukkala
            </a>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Contact