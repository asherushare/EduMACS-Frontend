import banner from '../../public/bannerImage.png';

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl containter mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 md:mt-32 mt-12 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Welcome to EduMACS, your one-stop hub for notes, resources, and
              exploring new ideas{" "}
              <span className="text-pink-500">every day.</span>
            </h1>
            <p>
              This platform is created by and for students of the MACS
              department at NITK Surathkal. Whether you're pursuing MCA, MSc, or
              PhD, you’ll find well-organized notes, previous year papers,
              assignments, project resources, and coding references — all in one
              place. Our goal is to support every student with reliable,
              easy-to-access academic material to help you learn efficiently and
              stay ahead in your courses.
            </p>
            <fieldset className="fieldset">
              <legend className="text-lg">Help us improve...</legend>
              <input
                type="text"
                className="input focus-within:outline-none focus-within:ring-0"
                placeholder="Share your thoughts or suggestions..."
              />
              <p className="label">
                <button className="btn btn-outline btn-secondary">
                  Submit Feedback
                </button>
              </p>
            </fieldset>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1">
          <img src={banner} alt="Banner Image" />
        </div>
      </div>
    </>
  );
}

export default Banner
