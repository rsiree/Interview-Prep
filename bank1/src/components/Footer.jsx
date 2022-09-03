import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style ={{marginLeft:"50px",width:"100%"}} className="relative bg-gray-300 ">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
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
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Let's make transactions easy
            </h4>
           
            <div className="mt-6">
            <a href="https://www.onlinesbi.sbi/" target="_blank" >
              
                <img  style ={{width:"50px",height:"50px"}} src ="https://seeklogo.com/images/S/sbi-new-logo-C6BE84460F-seeklogo.com.png"/>
                {/* <i className="flex fab fa-instagram"></i> */}
             
              </a>
              <a href="https://www.hdfc.com/" target="_blank" >
              <img  style ={{width:"150px",height:"100px"}} src ="https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo-500x281.png"/>
                {/* <i className="flex fab fa-instagram"></i> */}
             
              </a>

              <a href="https://www.icici.com/" target="_blank" >
              <img  style ={{width:"100px",height:"60px"}} src ="https://i.pinimg.com/236x/05/77/0b/05770b37ae535a178b27ab0c666f8f88.jpg"/>
                {/* <i className="flex fab fa-instagram"></i> */}
             
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/customers" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Employees
                    </Link>
                  </li>
                  <li>
                    <Link to="/transactions" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                       >Transactions
                    </Link>
                  </li>
                  <li>
                    <Link to="/add" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >New Employees
                    </Link>
                  </li>

                </ul>
              </div>
           
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}{" "}
              <a
                href="*"
                className="text-gray-600 hover:text-gray-900"
              >
              
              </a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
