import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { selectFont, selectTheme, setFont, setTheme } from "@/redux/themeSlice";
import { fontsFamily } from "@/utils/constants";
import {
  HeaderElement,
  ThemeToggle,
  TogglesWrapper,
  ThemeToggleWrapper,
  FontToggle,
  FontTogglePopUp,
  FontTogglePopUpContainer,
  FontTogglePopUpItem,
  TogglesDivider,
} from "@/styles/Component.styled";

export function Header() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const font = useSelector(selectFont);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const fontToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("data-font", font);
  });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (fontToggleRef.current && !e.composedPath().includes(fontToggleRef.current)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <HeaderElement>
      <img src="/logo.svg" />
      <TogglesWrapper>
        <FontToggle
          ref={fontToggleRef}
          onClick={() => setIsVisible(isVisible === false ? true : false)}
        >
          <ChevronDown stroke="#A445ED" strokeWidth="1.5" />
          <AnimatePresence>
            {isVisible && (
              <FontTogglePopUp
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{
                  duration: 0.15,
                }}
              >
                <FontTogglePopUpContainer>
                  {fontsFamily.map((item) => (
                    <FontTogglePopUpItem
                      key={item.text}
                      font={item.font}
                      onClick={() => dispatch(setFont(item.text))}
                    >
                      {item.text}
                    </FontTogglePopUpItem>
                  ))}
                </FontTogglePopUpContainer>
              </FontTogglePopUp>
            )}
          </AnimatePresence>
        </FontToggle>
        <TogglesDivider />
        <ThemeToggleWrapper toggle={theme === "dark"}>
          <ThemeToggle
            toggle={theme === "dark"}
            onClick={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
          />
        </ThemeToggleWrapper>
        {theme === "light" ? (
          <Moon
            stroke="currentColor"
            onClick={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
          />
        ) : (
          <Sun
            stroke="currentColor"
            onClick={() => dispatch(setTheme(theme === "dark" ? "light" : "dark"))}
          />
        )}
      </TogglesWrapper>
    </HeaderElement>
  );
}
