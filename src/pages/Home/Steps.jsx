const Steps = () => {
    return (
      <div className="py-16 mt-20">
        {/* Title and Description */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2">
            <h1 className="text-3xl md:text-5xl font-bold text-center lg:text-left mb-8">
              Get Your <span className="text-fuchsia-800">Dream Job</span> Easily
              With Your Talent
            </h1>
          </div>
          <div className="md:w-80 mx-auto">
            <p className="text-gray-600 text-center lg:text-left">
              Welcome to Japan Jobs, your premier destination for exceptional hiring
              solutions! As a leading hiring agency in Japan, we specialize in connecting
              top talent with companies.
            </p>
          </div>
        </div>
  
        {/* Cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 md:pb-20 mt-20 rounded-lg">
          {/* Card 1 */}
          <div className="card bg-green-100 text-green-800 rounded-lg p-8 relative">
            <p className="card-title pb-3 font-semibold">Completed your Profile.</p>
            <p className="small-desc">
              Profile complete. Unlock job opportunities tailored for you. Elevate
              your career with us now!
            </p>
            <div className="go-corner absolute top-0 right-0 bg-fuchsia-100 text-fuchsia-800 rounded-tl-lg flex items-center justify-center w-12 h-12">
              <div className="go-arrow text-4xl font-extrabold">1</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card bg-green-100 text-green-800 rounded-lg p-8 relative">
            <p className="card-title pb-3 font-semibold">Directly Your CV Upload.</p>
            <p className="small-desc">
              Swiftly upload your CV. Seamless job matching awaits. Elevate your
              career instantly.
            </p>
            <div className="go-corner absolute top-0 right-0 bg-fuchsia-100 text-fuchsia-800 rounded-tl-lg flex items-center justify-center w-12 h-12">
              <div className="go-arrow text-4xl font-extrabold">2</div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card bg-green-100 text-green-800 rounded-lg p-8 relative">
            <p className="card-title pb-3 font-semibold">Scheduling Interview Session.</p>
            <p className="small-desc">
              Book interview slots effortlessly. Secure your opportunity. Elevate
              your career journey with us.
            </p>
            <div className="go-corner absolute top-0 right-0 bg-fuchsia-100 text-fuchsia-800 rounded-tl-lg flex items-center justify-center w-12 h-12">
              <div className="go-arrow text-4xl font-extrabold">3</div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card bg-green-100 text-green-800 rounded-lg p-8 relative">
            <p className="card-title pb-3 font-semibold">Selected Candidate Session.</p>
            <p className="small-desc">
              Congratulations! Access exclusive resources. Join our elite
              community. Elevate your career success today.
            </p>
            <div className="go-corner absolute top-0 right-0 bg-fuchsia-100 text-fuchsia-800 rounded-tl-lg flex items-center justify-center w-12 h-12">
              <div className="go-arrow text-4xl font-extrabold">4</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Steps;
  