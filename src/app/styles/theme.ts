import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  lineHeights: { base: "1.5" },
  defaultRadius: "sm",
  colors: {
    dark: [
      "#e0e0e0",
      "#c2c2c2",
      "#a3a3a3",
      "#202329",
      "#272b33",
      "#242424",
      "#1a1a1a",
      "#0d0d0d",
      "#000000",
      "#000000",
    ],
  },
  primaryColor: "dark",
  breakpoints: {
    xs: "480px", // Смартфоны
    sm: "768px", // Планшеты
    md: "1024px", // Небольшие ноутбуки
    lg: "1280px", // Десктопы
    xl: "1440px", // Большие экраны
  },
});
