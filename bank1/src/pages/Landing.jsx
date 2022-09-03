import React from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



export default function Landing() {

  const navigate= useNavigate()
  return (
    <>
    <Navbar />
      < main style={{
            
            marginLeft:"50px"
          }}
        >
        <div
          className="relative  pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
            marginLeft:"100px"
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFua3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container  relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-20">
                  <h1 className="text-white font-semibold text-5xl">
                 Banking System App for Large Companies.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    This is a simple banking system app through which you can
                    create an account and transfer money and see
                    the details of it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24" >
          <div className="container mx-auto px-4" onClick={()=>navigate("/add")}>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">1.Create Account</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Add the basic details about employee and some bank details
                      to open an account.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center" onClick={()=>navigate("/employees")}>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">2.Transfer Money</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Got to the Employees page and tranfer money to any person
                      by clicking on transfer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center" onClick={()=>navigate("/transactions")}>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      3.Transaction History
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Check the amount transfer amount in transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </section>


    
        </main>
        <Footer />
    </>
  );
}
        