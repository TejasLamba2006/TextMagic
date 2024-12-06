import { ThemeProvider } from "../components/ThemeProvider";
import { Header } from "../components/Header";
import { TextConverter } from "../components/TextConverter";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className=" bg-white dark:bg-gray-950 transition-colors duration-200">
        <TextConverter />
        <Features />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
