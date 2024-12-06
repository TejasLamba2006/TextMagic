import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-pink-100 dark:border-pink-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">
              TextMagic
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Transform your text into beautiful, stylized formats instantly
              with our modern text converter.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-800 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  Convert
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  Font List
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-800 dark:text-white">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-800 dark:text-white">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-pink-100 dark:border-pink-900 text-center text-gray-600 dark:text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} TextMagic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
