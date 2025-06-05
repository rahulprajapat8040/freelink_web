import { Icon } from "@/components/assets/icons";
import HomePortfolio from "@/components/portfolio/HomePortfolio";
import HomeProjects from "@/components/projects/HomeProjects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-background w-full min-h-dvh">
        {/* Content Section */}
        <div className="relative overflow-hidden">
          <div className="flex justify-between py-2 bg-sky-light z-10 pb-16">
            <div className="flex max-w-6xl py-5 mx-auto items-center justify-center sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
                <div className="text-center lg:text-left flex-1">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Are you looking for Freelancers?
                  </h1>
                  <p className="max-w-sm px-2 lg:mx-0 my-3 text-gray-dark text-sm sm:text-base">
                    Hire Great Freelancers, Fast. Spacelance helps you hire elite freelancers at a moment's notice
                  </p>
                  <div className="flex flex-col px-2 sm:flex-row gap-3 items-center justify-center lg:justify-start">
                    <button className="bg-blue-primary px-5 md:px-2.5 text-nowrap py-3 text-white font-medium rounded-md w-full sm:w-auto">
                      Hire a freelancer
                    </button>
                    <div className="bg-white shadow rounded-2xl flex items-center px-3 py-1.5 w-full sm:w-auto max-w-xs">
                      <input
                        type="text"
                        placeholder="search freelance work"
                        className="h-full outline-none rounded-2xl flex-1 min-w-0 text-sm"
                      />
                      <button className="bg-blue-primary p-2 rounded-full ml-2">
                        <Icon.Search />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end">
                  <Image
                    src={'/assets/img/HomeImg.png'}
                    alt="home-image"
                    width={500}
                    height={500}
                    className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Zig-Zag SVG Divider */}
          <svg
            className="absolute bottom-0 left-0 w-full h-8 sm:h-12 lg:h-16 z-0"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L50,100 L100,0 L150,100 L200,0 L250,100 L300,0 L350,100 L400,0 L450,100 L500,0 L550,100 L600,0 L650,100 L700,0 L750,100 L800,0 L850,100 L900,0 L950,100 L1000,0 L1050,100 L1100,0 L1150,100 L1200,0 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Features Section */}
        <div className="flex bg-white min-h-56 border border-gray-light my-3 shadow-lg py-6 max-w-5xl w-full mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="text-center flex flex-col items-center justify-center">
              <div className="bg-sky-light p-4 rounded-full">
                <Icon.Lock />
              </div>
              <h3 className="text-lg sm:text-xl mt-2 font-medium">Create Account</h3>
              <p className="max-w-2xs text-gray-dark px-1 text-sm sm:text-base">
                First you have to create a account here
              </p>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div className="bg-sky-light p-4 rounded-full">
                <Icon.ListSearch />
              </div>
              <h3 className="text-lg sm:text-xl mt-2 font-medium">Search work</h3>
              <p className="max-w-2xs text-gray-dark px-1 text-sm sm:text-base">
                Search the best freelance work here
              </p>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div className="bg-sky-light p-4 rounded-full">
                <Icon.Save />
              </div>
              <h3 className="text-lg sm:text-xl mt-2 font-medium">Save and apply</h3>
              <p className="max-w-2xs text-gray-dark px-1 text-sm sm:text-base">
                Apply or save and start your work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <div className="relative overflow-hidden">
          <div className="flex justify-between py-2 bg-white z-10 pb-16">
            <div className="flex max-w-6xl py-5 mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
                <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                  <div className="relative max-w-md mx-auto lg:max-w-none">
                    <Image
                      src={'/assets/img/about.png'}
                      alt="home-image"
                      width={500}
                      height={500}
                      className="w-full"
                    />
                    <div className="w-32 sm:w-36 lg:w-44 absolute z-10 text-lg sm:text-xl lg:text-2xl text-gray-dark flex-col rounded-lg flex items-center justify-center top-2 sm:top-0 right-1/2 translate-x-1/2 h-16 sm:h-20 lg:h-24 bg-white shadow">
                      <span className="text-blue-primary inline-block font-semibold text-center text-xl sm:text-2xl lg:text-3xl">
                        500+
                      </span>
                      <span className="text-xs sm:text-sm lg:text-base">freelancers</span>
                    </div>
                    <div className="px-2 absolute z-10 text-sm sm:text-base lg:text-lg py-2 lg:py-4 text-nowrap text-gray-dark flex-col rounded-lg flex items-center justify-center bottom-1/2 translate-y-1/2 -right-2 sm:right-0 h-16 sm:h-20 lg:h-24 bg-white shadow">
                      <span className="text-blue-primary text-xl sm:text-2xl lg:text-3xl inline-block font-semibold text-center">
                        300+
                      </span>
                      <span className="text-xs sm:text-sm lg:text-base">freelance work Posted</span>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-right order-1 lg:order-2">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                    Find The Best <span className="text-blue-primary">Freelancers</span> Here
                  </h2>
                  <p className="my-3 text-gray-dark text-sm sm:text-base max-w-2xl mx-auto lg:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat bibendum ornare urna, cursus eget convallis. Feugiat imperdiet posuere justo, ultrices interdum
                    sed orci nunc, mattis. Ipsum viverra viverra neque adipiscing arcu, quam dictum. Dui mi viverra dui, sit accumsan, tincidunt massa. Dui cras magnis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeProjects />

      {/* Categories Section */}
      <section className="py-4 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h4 className="text-2xl sm:text-3xl lg:text-4xl text-center py-3 font-semibold">
              Choose Different <span className="text-blue-primary">Category</span>
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-5 py-4 place-items-center">
            {[...Array(7)].map((_, index) => (
              <div key={index} className="relative w-full max-w-xs">
                <Image
                  src={'/assets/img/cartoon-animation.png'}
                  alt="cartoon-img"
                  width={220}
                  height={100}
                  className="w-full h-auto rounded-xl"
                />
                <div className="bg-black/35 rounded-xl absolute inset-0 flex items-center justify-center text-white w-full h-full">
                  <span className="text-sm sm:text-base lg:text-lg font-semibold text-center px-2">
                    Cartoon Animation
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mx-auto">
            <button className="bg-blue-primary my-4 max-w-[170px] py-3 text-white font-semibold rounded-lg w-full text-sm sm:text-base">
              More Categories
            </button>
          </div>
        </div>
      </section>

      <HomePortfolio />

      {/* Newsletter Section */}
      <section className="bg-sky-light w-full mt-4 py-8 sm:py-12">
        <div className="max-w-6xl w-full mx-auto flex flex-col justify-center items-center py-5 px-4 sm:px-6">
          <div className="text-center space-y-3 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
              Newsletter Subscription
            </h3>
            <p className="text-gray-dark text-sm sm:text-base">
              Subscribe to our newsletter to get new freelance work and projects
            </p>
          </div>
          <div className="w-full max-w-md mt-6">
            <div className="flex flex-col items-center gap-4">
              <input
                placeholder="Enter your email address"
                type="email"
                className="bg-white w-full text-center outline-none py-3 px-4 rounded-lg shadow border-gray-light border text-sm sm:text-base"
              />
              <button className="bg-blue-primary text-white font-medium rounded-lg px-6 py-3 w-full sm:w-auto min-w-[130px] text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}