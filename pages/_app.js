import "../styles/index.css";

import { ThemeProvider } from "../context/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
