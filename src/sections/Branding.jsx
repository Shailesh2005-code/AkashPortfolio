function Branding() {
  return (

    <section
      id="branding"
      className="w-full flex justify-center px-10 mt-28"
    >

      <div className="w-full max-w-7xl bg-white/40 backdrop-blur-lg border border-white/30 rounded-[45px] p-14 shadow-xl">

        <div className="grid grid-cols-2 gap-16 items-center">


          {/* LEFT SIDE */}

          <div>

            <p className="text-blue-500 text-2xl mb-6 font-semibold">
              BRANDING
            </p>

            <h1 className="text-7xl font-black leading-tight">
              Creating
              Modern Visual
              Identity
            </h1>

            <p className="text-lg text-gray-700 leading-9 mt-10">
              Building unique and visually attractive brand
              experiences for businesses, products and digital
              platforms with modern creative strategies.
            </p>

            <button className="mt-12 bg-blue-500 hover:bg-blue-600 duration-300 text-white px-10 py-5 rounded-full shadow-lg">
              Explore More
            </button>

          </div>


          {/* RIGHT SIDE */}

          <div>

            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-[500px] object-cover rounded-[35px]"
            />

          </div>

        </div>

      </div>

    </section>

  )
}

export default Branding