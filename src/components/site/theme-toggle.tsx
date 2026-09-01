import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function apply(theme: "dark" | "light") {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const next = stored === "light" ? "light" : "dark";
    setTheme(next);
    apply(next);
  }, []);

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "روشن کردن تم" : "تاریک کردن تم"}
      onClick={() => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        apply(next);
      }}
      className="glass-panel grid size-11 place-items-center rounded-2xl text-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:text-primary active:translate-y-0"
    >
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
