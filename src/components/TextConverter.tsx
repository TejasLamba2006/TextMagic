"use client";

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faUpload } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence, type HTMLMotionProps } from "framer-motion";

const initialFontStyles = [
  { name: "Fancy", class: "font-serif" },
  { name: "Bold", class: "font-bold" },
  { name: "Cursive", class: "font-cursive" },
  { name: "Monospace", class: "font-mono" },
  { name: "Double", class: "tracking-wide" },
  { name: "Handwritten", class: "font-handwritten" },
  { name: "Elegant", class: "font-elegant" },
  { name: "Playful", class: "font-playful" },
];

export function TextConverter() {
  const [input, setInput] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [customFonts, setCustomFonts] = useState<
    Array<{ name: string; class: string }>
  >([]);
  const [fontStyles, setFontStyles] = useState(initialFontStyles);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(input);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          const fontName = `CustomFont_${Date.now()}`;
          const fontFace = new FontFace(fontName, `url(${result})`);
          fontFace
            .load()
            .then((loadedFace) => {
              document.fonts.add(loadedFace);
              const newCustomFont = {
                name: file.name.split(".")[0],
                class: `font-${fontName}`,
              };
              setCustomFonts((prev) => [...prev, newCustomFont]);
              setFontStyles((prev) => [...prev, newCustomFont]);
              setSelectedStyle(newCustomFont.class);

              const style = document.createElement("style");
              style.textContent = `
              .${newCustomFont.class} {
                font-family: '${fontName}', sans-serif;
              }
            `;
              document.head.appendChild(style);
            })
            .catch((error) => {
              console.error("Error loading font:", error);
              alert("Error loading font. Please try a different file.");
            });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
      {...({} as HTMLMotionProps<"div">)}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
          {...({} as HTMLMotionProps<"div">)}
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your text here..."
            className="w-full h-32 p-4 rounded-lg border border-pink-200 focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-800 dark:border-pink-800 dark:text-white"
          />

          <motion.div
            className="flex flex-wrap gap-2"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="show"
            {...({} as HTMLMotionProps<"div">)}
          >
            {fontStyles.map((style) => (
              <motion.button
                key={style.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                onClick={() => setSelectedStyle(style.class)}
                className={`px-4 py-2 rounded-full border border-pink-200 hover:bg-pink-50 dark:text-white dark:border-pink-800 dark:hover:bg-pink-900/50 
                  ${
                    selectedStyle === style.class
                      ? "bg-pink-500 text-white hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700"
                      : ""
                  }`}
              >
                {style.name}
              </motion.button>
            ))}
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 rounded-full border border-pink-200 hover:bg-pink-50 dark:text-white dark:border-pink-800 dark:hover:bg-pink-900/50"
            >
              <FontAwesomeIcon icon={faUpload} className="mr-2" />
              Upload Custom Font
            </motion.button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".ttf,.otf"
              className="hidden"
            />
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedStyle && (
            <motion.div
              key={selectedStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative"
              {...({} as HTMLMotionProps<"div">)}
            >
              <div
                className={`w-full min-h-[8rem] p-4 rounded-lg border border-pink-200 dark:border-pink-800 dark:bg-gray-800 ${selectedStyle}`}
              >
                <p className={`${selectedStyle} dark:text-white`}>
                  {input || "Transformed text will appear here..."}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCopy}
                className="absolute top-2 right-2 p-2 text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-500"
              >
                <FontAwesomeIcon icon={faCopy} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
