import { Icon } from "@/components/assets/icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-background w-full min-h-dvh">
        {/* Content Section */}
        <div className="relative overflow-hidden">

          <div className="flex justify-between py-2 bg-sky-light z-10 pb-16">
            <div className="flex max-w-6xl py-5 mx-auto items-center justify-center">
              <div>
                <h1 className="text-6xl font-bold leading-18">
                  Are you looking for Freelancers?
                </h1>
                <p className="max-w-sm my-3 text-gray-dark">
                  Hire Great Freelancers, Fast. Spacelance helps you hire elite freelancers at a moment's notice
                </p>
                <div className="flex gap-3">
                  <button className="bg-blue-primary px-5 py-3 text-white font-medium rounded-md">
                    Hire a freelancer
                  </button>
                  <div className="bg-white shadow rounded-2xl flex items-center px-3 py-1.5">
                    <input
                      type="text"
                      placeholder="search freelance work"
                      className="h-full outline-none rounded-2xl" />
                    <button className="bg-blue-primary p-2 rounded-full">
                      <Icon.Search />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={'/assets/img/HomeImg.png'}
                  alt="home-image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* Zig-Zag SVG Divider */}
          <svg
            className="absolute bottom-0 left-0 w-full h-16 z-0"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L50,100 L100,0 L150,100 L200,0 L250,100 L300,0 L350,100 L400,0 L450,100 L500,0 L550,100 L600,0 L650,100 L700,0 L750,100 L800,0 L850,100 L900,0 L950,100 L1000,0 L1050,100 L1100,0 L1150,100 L1200,0 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex bg-white min-h-56 border border-gray-light my-3 shadow-lg py-3 max-w-5xl w-full items-center justify-center gap-3 mx-auto px-3">
          <div className="text-center flex flex-col items-center justify-center">
            <div className="bg-sky-light p-4 rounded-full">
              <Icon.Lock />
            </div>
            <h3 className="text-xl mt-2 font-medium">Create Account</h3>
            <p className="max-w-2xs text-gray-dark px-1">
              First you have to create a account  here
            </p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <div className="bg-sky-light p-4 rounded-full">
              <Icon.ListSearch />
            </div>
            <h3 className="text-xl mt-2 font-medium">Search work </h3>
            <p className="max-w-2xs text-gray-dark px-1">
              Search the best freelance work here
            </p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <div className="bg-sky-light p-4 rounded-full">
              <Icon.Save />
            </div>
            <h3 className="text-xl mt-2 font-medium">Save and apply</h3>
            <p className="max-w-2xs text-gray-dark px-1">
              Apply or save and start your work
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="relative overflow-hidden">
          <div className="flex justify-between py-2 bg-white z-10 pb-16">
            <div className="flex max-w-6xl py-5 mx-auto items-center justify-between">
              <div className="w-full relative">
                <Image
                  src={'/assets/img/about.png'}
                  alt="home-image"
                  width={500}
                  height={500}
                />
                <div className="w-44 absolute z-10 text-2xl text-gray-dark flex-col rounded-lg flex items-center justify-center top-0 right-1/2 translate-x-1/2 h-24 bg-white shadow">
                  <span className="text-blue-primary  inline-block font-semibold text-center">
                    500+
                  </span>
                  freelancers
                </div>
                <div className=" px-2 absolute z-10 text-lg py-4 text-nowrap text-gray-dark flex-col rounded-lg flex items-center justify-center bottom-1/2 translate-y-1/2 right-0 h-24 bg-white shadow">
                  <span className="text-blue-primary text-3xl inline-block font-semibold text-center">
                    300+
                  </span>
                  freelance work Posted
                </div>
              </div>
              <div className="w-full text-right">
                <h2 className="text-6xl  leading-18">
                  Find The Best <span className="text-blue-primary">Freelancers</span> Here
                </h2>
                <p className=" my-3 text-gray-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat bibendum ornare urna, cursus eget convallis. Feugiat imperdiet posuere justo, ultrices interdum
                  sed orci nunc, mattis. Ipsum viverra viverra neque adipiscing arcu, quam dictum. Dui mi viverra dui, sit accumsan, tincidunt massa. Dui cras magnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto">
          <div>
            <h4 className="text-4xl">
              The latest freelance work!
            </h4>
            <h4 className="text-5xl">
              Recently Posted <span className="text-blue-primary">Works</span>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
