import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <div className="bg-potluck-bg min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center text-center px-6">
        <div className="max-w-md">
          <p className="text-5xl font-bold text-potluck-purple">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-potluck-light sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7 text-potluck-dark">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="inline-flex items-center justify-center h-12 px-8 bg-potluck-purple text-potluck-light font-semibold rounded-full hover:bg-potluck-purple/90 transition-colors">
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}