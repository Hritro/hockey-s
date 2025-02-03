export default function Banner() {
  return (
    <div className="flex lg:flex-row flex-col justify-center mt-5 ">
      <div className="carousel relative w-full">
        <div id="slide1" className="carousel-item lg:h-3/4 relative w-full">
          <img
            src="https://taskph3.netlify.app/images/1.png"
            className="mx-auto w-full"
          />
          <div className="absolute lg:left-5 bottom-0 flex -translate-y-1/2 transform justify-between gap-10 left-[40%]">
            <a href="#" className="btn btn-circle bg-black text-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-black text-white">
              ❯
            </a>
          </div>

          <div className="absolute lg:block hidden w-[40%] bg-black text-white p-5 rounded-xl right-5 bottom-5">
            <h1 className="text-xl font-bold">Meet all the heroes from the field</h1>
            <p className="mt-2">
            Discover the remarkable stories of unsung heroes and trailblazers across various fields. Embark on a journey to meet extraordinary individuals making a difference in diverse fields.
            </p>
          </div>

        </div>


        <div id="slide2" className="carousel-item lg:h-3/4 relative w-full">
          <img
            src="https://taskph3.netlify.app/images/c1.jpg"
            className="mx-auto w-full"
          />
          <div className="absolute lg:left-5 bottom-0 flex -translate-y-1/2 transform justify-between gap-10 left-[40%]">
            <a href="#slide1" className="btn btn-circle bg-black text-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-black text-white">
              ❯
            </a>
          </div>

          <div className="absolute lg:blocl hidden w-[40%] bg-black text-white p-5 rounded-xl right-5 bottom-5 lg:block ">
            <h1 className="text-xl font-bold">Meet all the heroes from the field</h1>
            <p className="mt-2">
            Discover the remarkable stories of unsung heroes and trailblazers across various fields. Embark on a journey to meet extraordinary individuals making a difference in diverse fields.
            </p>
          </div>
        </div>

        
      </div>
      <div className="lg:hidden block mt-10 bg-black text-white p-5 rounded-xl right-5 bottom-5 ">
            <h1 className="text-xl font-bold">Meet all the heroes from the field</h1>
            <p className="mt-2">
            Discover the remarkable stories of unsung heroes and trailblazers across various fields. Embark on a journey to meet extraordinary individuals making a difference in diverse fields.
            </p>
          </div>
    </div>
  );
}
