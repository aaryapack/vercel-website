import Link from 'next/link'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function Layout({ children, categories }) {
  if (categories.length > 5) {
    categories = categories.slice(0, 5)
  }
  return (
    <div>

      {/* Navbar */}
      <nav>
        <div className="flex justify-center">
          <div className="
            mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0
            px-4 pt-8 flex flex-col w-fw
          ">
            <div className="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
              <Link href="/">
                <a aria-label="Home">
                  <img src="logo.png" alt="logo" className="h-16 lg:h-20" />
                </a>
              </Link>
            </div>
            <div className="flex flex-wrap mt-1" style={{alignItems: 'center', justifyContent:'center'}}>
              
              <Link href="/">
                <a aria-label="Home">
                  <p className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4
                  ">
                  Home
                  </p>
                </a>
              </Link>

              <Link href="/about">
                <a aria-label="About">
                  <p className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4
                  ">
                  About
                  </p>
                </a>
              </Link>
             
              <Link href="/categories">
                <a aria-label="All categories">
                  <p className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4 
                  ">
                  All Products
                  </p>
                </a>
              </Link>

              <Link href="/contact">
                <a aria-label="All categories">
                  <p className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4 
                  ">
                  Contact Us
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>


{/* Main Content */}
      <div className="mobile:px-10 px-4 pb-10 flex justify-center">
        <main className="w-fw">{children}</main>
      </div>


{/* Footer */}
      <footer className="flex justify-center">
        <div className="
        sm:flex-row sm:items-center
        flex-col
        flex w-fw px-12 py-8
        desktop:px-0
        border-solid
        border-t border-gray-300">
          <span className="block text-gray-700 text-xs">Copyright © Aarya Pack. All rights reserved.</span>
        </div>
      </footer>
      <ToastContainer autoClose={3000} toastStyle={{ backgroundColor: "#a3c8f1", color:'black' }} />
    </div>
  )
}