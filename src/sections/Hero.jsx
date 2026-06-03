import profile from "../assets/profile.png"
import decor from "../assets/decor.svg"
import bluestroke from "../assets/bluestroke.svg"
import logo from "../assets/logo.svg"
import branding from "../assets/branding.svg"
import illustration from "../assets/illustration.svg"
import ad from "../assets/ad.svg"
import circle from "../assets/circle.svg"


const Hero = () => {
  return (
    <section 
    id = "about"
    className="relative w-full bg-[#dce8f6] overflow-hidden">

     {/* CUSTOM CIRCLE */}
<img
  src={circle}
  alt="circle"
  className="
    absolute
    left-[-50px]
    top-[80px]
    w-[600px]
    z-0
    opacity-70
    pointer-events-none
  "
/>
      {/* MAIN HERO */}
      <div className="relative h-[860px] w-full overflow-hidden">

        {/* PROFILE IMAGE */}
        <div className="absolute left-[0px] bottom-[210px] z-20">
          <img
            src={profile}
            alt="profile"
            className="w-[560px] object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="absolute left-[540px] top-[140px] z-20">

          {/* HELLO */}
<h2 className="text-[30px] font-black text-black leading-none relative top-[35px] left-[21px]">
  Hello, I'm Akash 👋
</h2>

          {/* MAIN TITLE */}
          <div className="leading-[0.84] mt-10">

            <h1 className="text-[#1f5cb3] text-[165px] font-black tracking-[-5px]">
              GRAPHIC
            </h1>

            <h1 className="text-[#1f5cb3] text-[165px] font-black tracking-[-px]">
              DESIGNER
            </h1>

          </div>

          {/* BLUE STROKE */}
          <div className="mt-[-290px] ml-2">
            <img
              src={bluestroke}
              alt="blue-stroke"
              className="w-[720px] object-contain"
            />
          </div>

        </div>

        {/* FLOATING DECOR */}
<div className="absolute right-[200px] top-[170px] z-20">
  <img
    src={decor}
    alt="decor"
    className="w-[95px] object-contain rotate-[10deg]"
  />
</div>

        {/* GLASS BAR */}
        <div
          className="
            absolute
            bottom-[25px]
            left-0
            w-full
            h-[185px]
            border
            border-[#6ea1ea]
           bg-[#486589]
            opacity-90
            backdrop-blur-[6px]
            shadow-[0_-8px_30px_rgba(59,108,184,0.45)]
            overflow-hidden
            z-30
          "
        >

          {/* DOT TEXTURE */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.12]
              bg-[radial-gradient(circle,rgba(255,255,255,0.8)_1px,transparent_1px)]
              bg-[size:11px_11px]
            "
          ></div>

          {/* DARK BLUR */}
          <div
            className="
              absolute
              left-[190px]
              top-[-70px]
              w-[300px]
              h-[200px]
              bg-[#1f2d46]
              blur-[70px]
              opacity-80
            "
          ></div>

          {/* CONTENT */}
          <div className="relative z-20 h-full flex items-center justify-between px-10 pt-1">

            {/* LEFT CONTENT */}
            <div className="w-[56%]">

              <p className="text-white tracking-[6px] text-[12px] uppercase mb-1">
                WHO AM I ?
              </p>

              <h2
                className="
                  text-white
                  text-[66px]
                  font-black
                  leading-none
                  tracking-[-2px]
                "
              >
                Akash Guntamukkala
              </h2>

              <p className="text-white/90 text-[15px] leading-[1.45] mt-2 max-w-[760px]">
                Passionate designer focused on creating clean, creative, and impactful visuals.
                Skilled in graphic design, branding, and digital content using tools like Photoshop and Canva,
                while continuously exploring UI/UX, product design, and motion design.
              </p>

            </div>

            {/* RIGHT CONTENT */}
            <div className="w-[39%] h-full flex items-center">

              {/* DIVIDER */}
              <div className="h-[74px] w-[1px] bg-white/40 mr-8"></div>

              <div>

                <p className="text-[#2d3c5b] text-[18px] font-semibold mb-4">
                  Specializations
                </p>

                <div className="flex gap-4">

                  {[
                    { image: logo, text: "Logo" },
                    { image: branding, text: "Branding" },
                    { image: illustration, text: "Illustration" },
                    { image: ad, text: "AdCreatives" },
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="
                        relative
                        w-[102px]
                        h-[102px]
                        rounded-[20px]
                        border
                        border-[#8fb3eb]
                        bg-[#dce8f6]/60
                        shadow-[0_4px_15px_rgba(0,0,0,0.16)]
                        flex
                        flex-col
                        items-center
                        justify-center
                      "
                    >

                     {/* ICON IMAGE */}
<img
  src={item.image}
  alt={item.text}
  className="
    w-[56px]
    h-[56px]
    object-contain
    mb-1
  "
/>

{/* TEXT */}
<p className="text-[13px] text-[#2d3c5b] font-medium tracking-tight">
  {item.text}
</p>
                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section >
  )
}

export default Hero