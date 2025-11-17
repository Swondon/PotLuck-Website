import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#110a1f] border-t border-white/10 text-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8">
          <div className="col-span-2">
            <a href="/" className="text-potluck-light font-bold text-xl">
              Potluck Markets
            </a>
            <p className="mt-4 text-potluck-dark">
              The future of social prediction.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-potluck-light">Product</h3>
            <ul className="mt-4 space-y-3 text-xs">
              <li><a href="#" className="text-potluck-dark hover:text-potluck-light">Features</a></li>
              <li><a href="#" className="text-potluck-dark hover:text-potluck-light">How it Works</a></li>
              <li><a href="#" className="text-potluck-dark hover:text-potluck-light">Use Cases</a></li>
              <li><a href="#" className="text-potluck-dark hover:text-potluck-light">FAQ</a></li>
              <li><a href="#" className="text-potluck-dark hover:text-potluck-light">Regulatory</a></li>
              <li><a href="#" className="text-potluck-dark hover:text-potluck-light">Refer A Friend</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-potluck-light">Company</h3>
            <ul className="mt-4 space-y-3 text-xs">
              <li><a href="#" className="text-potluck-dark hover:text-potluck-light">About</a></li>
              <li><a href="#" className="text-potluck-dark hover:text-potluck-light">Press</a></li>
              <li><a href="#" className="text-potluck-dark hover:text-potluck-light">Contact</a></li>
              <li><a href="#" className="text-potluck-dark hover:text-potluck-light">Brand</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 xl:col-span-2">
            <h3 className="text-base font-semibold text-potluck-light">Socials</h3>
            <div className="flex space-x-5 mt-4">
              <a href="https://x.com/potluckmarkets" target="_blank" rel="noopener noreferrer" className="text-potluck-dark hover:text-potluck-light">
                <span className="sr-only">X</span>
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/potluckmarkets/" target="_blank" rel="noopener noreferrer" className="text-potluck-dark hover:text-potluck-light">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/potluck-markets/" target="_blank" rel="noopener noreferrer" className="text-potluck-dark hover:text-potluck-light">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center space-x-2 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-potluck-dark hover:text-potluck-light">System Status</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row-reverse items-center justify-between">
           <div className="flex space-x-4 text-xs">
              <a href="#" className="text-potluck-dark hover:text-potluck-light">Privacy</a>
              <a href="#" className="text-potluck-dark hover:text-potluck-light">Terms</a>
           </div>
          <p className="text-potluck-dark mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} Potluck Markets. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
