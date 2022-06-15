import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Aqui dizemos que esse componente só deve ser mostrado
  // depois da página carregada. Isso evita que o ícone
  // errado apareça antes do next-themes saber se deve
  // carregar o tema dark ou o tema light
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Uma função simples para verificar qual tema está ativo
  function isDark() {
    return theme === "dark";
  }

  return (
    // E a logica em si
    <button
      className="h-6 w-6"
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="Theme toggle"
    >
      {isDark() ? <HiOutlineSun size={24} /> : <HiOutlineMoon size={24} />}
    </button>
  );
}
