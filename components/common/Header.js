import { useEffect } from "react";
import useSound from "use-sound";
import Link from "next/link";
import { updateCommentsTheme } from "../../utils/comments";
import { isDarkMode } from "../../utils/theme";
import { filterPosts, getSearchInput } from "../../utils/filters";

export default function Header() {
  const [playOn] = useSound("/sounds/switch-on.mp3");
  const [playOff] = useSound("/sounds/switch-off.mp3");

  const toggleDarkMode = () => {
    if (process.browser) {
      const darkMode = isDarkMode();

      localStorage.theme = darkMode ? "light" : "dark";

      document.documentElement.classList = localStorage.theme;

      updateCommentsTheme(!darkMode);

      if (darkMode) {
        playOn();
      } else {
        playOff();
      }
    }
  };

  return (
    <header className="app-header">
      <div className="app-container">
        <div className="content">
          <Link href="/" passHref>
            <h2 className="logo">Dev blog</h2>
          </Link>

          <div className="content">
            <div className="darkMode" onClick={() => toggleDarkMode()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
