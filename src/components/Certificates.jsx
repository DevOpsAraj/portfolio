import React from "react";
import AWSCert from "../assets/certificates/certificate1.png";
import cppCert from "../assets/certificates/certificate2.jpg";
import PythonCert from "../assets/certificates/certificate3.jpg";
import mlAiCert from "../assets/certificates/certificate4.jpeg";
import jsCert from "../assets/certificates/certificate5.jpg";
import pyCert from "../assets/certificates/certificate6.jpg";

const Certificates = () => {
  return (
    <div
      name="certificates"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            certificates
          </p>
          <p className="py-6">It is my certificates.</p>
        </div>

        {/* Container */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${AWSCert})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                AWS SUMMIT INDIA 2022
              </span>
              <div className="pt-8 text-center">
                <a href="https://aws.amazon.com/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    AWS
                  </button>
                </a>
                <a href="https://aws.amazon.com/events/summits/india/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cppCert})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                Master C++ Programming
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.udemy.com/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Udemy
                  </button>
                </a>
                <a href="https://www.udemy.com/course/master-cpp-byteboard/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${PythonCert})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                Python Developer: Python / Django
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.udemy.com/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Udemy
                  </button>
                </a>
                <a href="https://www.udemy.com/course/python-developer-pythondjangoflaskpostgresqlmysqlapi/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${mlAiCert})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                AI ML and MLOPS Webinar
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    CloudXLab
                  </button>
                </a>
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${jsCert})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                JavaScript Fundamentals
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.udemy.com/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Udemy
                  </button>
                </a>
                <a href="https://www.udemy.com/course/javascript-fundamentals-a-course-for-absolute-beginners/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${pyCert})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                Python Fundamentals for Beginners
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.mygreatlearning.com/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    GreatLearning
                  </button>
                </a>
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
