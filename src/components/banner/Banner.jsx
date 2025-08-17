import banner from '../../assets/images/more/3.png'

export default function Banner() {
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-end px-5 lg:px-20 text-white"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="max-w-lg 2xl:min-w-6xl">
          <h1 className="text-4xl 2xl:text-7xl">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-sm font-extralight my-2">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-[#E3B577] px-5 py-1 text-[#242222]">
            Learn More
          </button>
        </div>
      </div>
    </>
  )
}
