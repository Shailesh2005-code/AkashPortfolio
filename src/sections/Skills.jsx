import photoshop from "../assets/skills/photoshop.svg"
import illustrator from "../assets/skills/illustrator.svg"
import affinity from "../assets/skills/affinity.svg"
import canva from "../assets/skills/canva.svg"
import autocad from "../assets/skills/autocad.svg"
import blender from "../assets/skills/blender.svg"
import monitor from "../assets/skills/computer.svg"
import person from "../assets/skills/person.svg"

function Skills() {
  return (

    <section 
    id="skills"
    className="w-full bg-[#dce8f6] px-[28px] pt-[10px] pb-[80px]">

      {/* HEADING */}

      <h1 className="
        text-[72px]
        font-black
        text-black
        leading-none
        mb-[26px]
      ">
        Skills
      </h1>



      {/* =============================== */}
      {/* TOOLS BLOCK */}
      {/* =============================== */}

      <div
        className="
  relative
  w-full
  rounded-[38px]
  border
border-[#6ea1ea]

shadow-[0_0_30px_rgba(59,108,184,0.45),0_0_80px_rgba(59,108,184,0.25)]
  
  overflow-hidden
  px-[42px]
  pt-[28px]
  pb-[30px]
  
  bg-[#6699cc]/95
  opacity-90
  backdrop-blur-[6px]
"
      >


       {/* ROUGH GLASS TEXTURE */}
<div
  className="
    absolute
    inset-0
    opacity-[0.16]
    mix-blend-soft-light
    bg-[radial-gradient(rgba(255,255,255,0.55)_0.8px,transparent_1px)]
    bg-[size:4px_4px]
  "
></div>

{/* SOFT GRAIN */}
<div
  className="
    absolute
    inset-0
    opacity-[0.08]
    bg-[radial-gradient(rgba(0,0,0,0.18)_0.6px,transparent_0.8px)]
    bg-[size:3px_3px]
  "
></div>

<div
  className="
    absolute
    inset-0
    bg-[#6699CC]
    backdrop-blur-[3px]
    border-[#6699CC]
    shadow-[0_0_30px_rgba(102,153,204,0.45),0_0_80px_rgba(102,153,204,0.25)]
  "
></div>
{/* TEXTURE */}

  <div
    className="
      absolute
      inset-0
      opacity-[0.07]
      bg-[radial-gradient(circle,rgba(255,255,255,0.9)_1px,transparent_1px)]
      bg-[size:9px_9px]
    "
  ></div>



        {/* LIGHT SHADE */}

        <div
          className="
            absolute
            left-[120px]
            top-[-60px]
            w-[420px]
            h-[220px]
            bg-white/35
            blur-[70px]
          "
        ></div>



        {/* TOOLS TITLE */}

        <div
          className="
            relative
            z-20
            flex
            items-center
            gap-[14px]
            mb-[34px]
          "
        >

          <img
            src={monitor}
            alt="monitor"
            className="w-[42px] h-[42px] object-contain"
          />

          <h2
            className="
              text-[42px]
              font-black
              text-black
              leading-none
            "
          >
            Tools I Use
          </h2>

        </div>



        {/* TOOLS */}

<div
  className="
    relative
    z-20
    flex
    items-center
    justify-center
    gap-[46px]
  "
>


  {/* TOOL 1 */}

  <div className="flex flex-col items-center">

    <div className="
      w-[140px]
      h-[140px]
      flex
      items-center
      justify-center
    ">

      <img
        src={photoshop}
        alt="Photoshop"
        className="w-[120px] h-[120px] object-contain"
      />

    </div>

    <p className="
      mt-2
      text-[22px]
      text-[#2d3f55]
      font-medium
    ">
      Photoshop
    </p>

  </div>



  {/* TOOL 2 */}

  <div className="flex flex-col items-center">

    <div className="
      w-[140px]
      h-[140px]
      flex
      items-center
      justify-center
    ">

      <img
        src={illustrator}
        alt="Illustrator"
        className="w-[120px] h-[120px] object-contain"
      />

    </div>

    <p className="
      mt-2
      text-[22px]
      text-[#2d3f55]
      font-medium
    ">
      Illustrator
    </p>

  </div>



  {/* TOOL 3 */}

  <div className="flex flex-col items-center">

    <div className="
      w-[140px]
      h-[140px]
      flex
      items-center
      justify-center
    ">

      <img
        src={affinity}
        alt="Affinity"
        className="w-[120px] h-[120px] object-contain"
      />

    </div>

    <p className="
      mt-2
      text-[22px]
      text-[#2d3f55]
      font-medium
    ">
      Affinity
    </p>

  </div>



  {/* TOOL 4 */}

  <div className="flex flex-col items-center">

    <div className="
      w-[140px]
      h-[140px]
      flex
      items-center
      justify-center
    ">

      <img
        src={canva}
        alt="Canva"
        className="w-[120px] h-[120px] object-contain"
      />

    </div>

    <p className="
      mt-2
      text-[22px]
      text-[#2d3f55]
      font-medium
    ">
      Canva
    </p>

  </div>



  {/* TOOL 5 */}

  <div className="flex flex-col items-center">

    <div className="
      w-[140px]
      h-[140px]
      flex
      items-center
      justify-center
    ">

      <img
        src={autocad}
        alt="Auto CAD"
        className="w-[120px] h-[120px] object-contain"
      />

    </div>

    <p className="
      mt-2
      text-[22px]
      text-[#2d3f55]
      font-medium
    ">
      Auto CAD
    </p>

  </div>



  {/* TOOL 6 */}

  <div className="flex flex-col items-center">

    <div className="
      w-[140px]
      h-[140px]
      flex
      items-center
      justify-center
    ">

      <img
        src={blender}
        alt="Blender"
        className="w-[135px] h-[135px] object-contain"
      />

    </div>

    <p className="
      mt-2
      text-[22px]
      text-[#2d3f55]
      font-medium
    ">
      Blender
    </p>

  </div>

</div>

      </div>



      {/* =============================== */}
      {/* BOTTOM AREA */}
      {/* =============================== */}

      <div className="
        mt-[34px]
        grid
        grid-cols-[1fr_0.9fr]
        gap-[42px]
        items-start
      ">

{/* PERSONAL SKILLS */}

<div
  className="
    relative
    rounded-[34px]
    border
    border-[#6699CC]
    shadow-[0_0_30px_rgba(102,153,204,0.45),0_0_80px_rgba(102,153,204,0.25)]
    overflow-hidden
    px-[26px]
    pt-[22px]
    pb-[28px]
    min-h-[360px]
    bg-[#6699cc]
    backdrop-blur-[12px]
  "
>

  {/* TEXTURE */}

  <div
    className="
      absolute
      inset-0
      opacity-[0.07]
      bg-[radial-gradient(circle,rgba(255,255,255,0.9)_1px,transparent_1px)]
      bg-[size:9px_9px]
    "
  ></div>



          {/* TITLE */}

          <div className="
            relative
            z-20
            flex
            items-center
            gap-3
            mb-[24px]
          ">

            <img
              src={person}
              alt="person"
              className="w-[38px] h-[38px] object-contain"
            />

            <h2 className="
              text-[44px]
              font-black
              text-black
            ">
              Personal Skills
            </h2>

          </div>



          {/* SKILL BUTTONS */}

          <div className="
            relative
            z-20
            grid
            grid-cols-2
            gap-x-[24px]
            gap-y-[18px]
          ">


            {[
              "Communication",
              "Creativity",
              "Sketching",
              "Team Work",
              "Problem Solving",
            ].map((skill, index) => (

              <div
                key={index}
                className="
                  h-[58px]
                  rounded-full
                  bg-[#edf3fb]
                  border
                  border-[#9eb7d6]
                  shadow-[0_6px_12px_rgba(0,0,0,0.18)]
                  flex
                  items-center
                  px-[24px]
                  text-[24px]
                  font-bold
                  text-[#2b3b4e]
                "
              >
                {skill}
              </div>

            ))}

          </div>

        </div>



        {/* RIGHT COLOR TAGS */}

        <div className="
          flex
          flex-col
          gap-[20px]
          pt-[14px]
        ">


          {/* ROW 1 */}

          <div className="flex gap-[24px]">

            <div className="
              flex-1
              h-[54px]
              rounded-full
              bg-[#d9e600]
              flex
              items-center
              justify-center
              text-[24px]
              font-black
              text-black
            ">
              Brand Design
            </div>

            <div className="
              flex-1
              h-[54px]
              rounded-full
              bg-[#0ea5ff]
              flex
              items-center
              justify-center
              text-[24px]
              font-black
              text-black
            ">
              Ad Creatives
            </div>

          </div>



          {/* ROW 2 */}

          <div className="flex gap-[24px]">

            <div className="
              flex-1
              h-[54px]
              rounded-full
              bg-[#ff6a00]
              flex
              items-center
              justify-center
              text-[24px]
              font-black
              text-white
            ">
              Logo Designing
            </div>

            <div className="
              flex-1
              h-[54px]
              rounded-full
              bg-[#9be355]
              flex
              items-center
              justify-center
              text-[24px]
              font-black
              text-black
            ">
              Sketching
            </div>

          </div>



          {/* ROW 3 */}

          <div className="
            w-[48.2%]
            h-[54px]
            rounded-full
            bg-[#7117f4]
            flex
            items-center
            justify-center
            text-[24px]
            font-black
            text-white
          ">
            Illustrations
          </div>



          {/* ROW 4 */}

          <div className="
            w-[48.2%]
            h-[54px]
            rounded-full
            bg-[#00e66d]
            flex
            items-center
            justify-center
            text-[24px]
            font-black
            text-black
          ">
            Mascot Design
          </div>

        </div>

      </div>

    </section>

  )
}

export default Skills