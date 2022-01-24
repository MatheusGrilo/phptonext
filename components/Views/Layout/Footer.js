import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="footer relative border-b-2 border-blue-700">
        <div className="container mx-auto px-6">
          <div className="mt-2 border-t-2 border-gray-400 dark:border-gray-400 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-2">
              <p className="text-sm text-blue-700 font-bold mb-2 dark:text-blue-400">
                <Link href="/about" rel="noopener noreferrer">
                  Grilo 2022 - Hosted on Vercel{/*Heroku*/}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
