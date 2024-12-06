import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLanguage,
  faPalette,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export function Features() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Transform Your Text
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center space-y-4">
          <FontAwesomeIcon
            icon={faLanguage}
            className="text-4xl text-pink-500"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Multiple Languages
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Support for various languages and character sets to enhance your
            text transformation experience.
          </p>
        </div>

        <div className="text-center space-y-4">
          <FontAwesomeIcon
            icon={faPalette}
            className="text-4xl text-pink-500"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Stylish Fonts
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Choose from a variety of beautiful font styles to make your text
            stand out.
          </p>
        </div>

        <div className="text-center space-y-4">
          <FontAwesomeIcon icon={faBolt} className="text-4xl text-pink-500" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Instant Preview
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            See your transformed text in real-time as you type and make style
            selections.
          </p>
        </div>
      </div>
    </section>
  );
}
