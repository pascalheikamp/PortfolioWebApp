/*
 *   Copyright (c) 2025
 *   All rights reserved.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "dark-blue": "#321D2F",
      "blue-green": "#006884",
      "light-purple": "#51414F",
      blue: "#3D2E4F",
      "navy-blue": "#053D57",
      "blue-purple": "#4C5F7A",
      "light-blue": "#C2D9FF",
      "blue-galaxy": "#3a4c7a",
      "steal-blue": "#C5D9E9",
      "gray-white": "#f8f9fa",
      "ford-blue": "#100028",
      black: "#000",
      "off-white": "#FAF9F6",
      white: "#F2F1EF",
    },
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /col-start-\d+/,
    },
    {
      pattern: /row-start-\d+/,
    },
    {
      pattern: /col-span-\d+/,
    },
    {
      pattern: /row-span-\d+/,
    },
  ],
};

// 'white': '#F2F1EF',
//     'navy-blue': '#053D57',
//     'teal': '#97BCC7',
//     "dark-brown": '#2B2A2A',
//     'gray-green': '#869D9E',
//     'light-brown': '#7E767D',
//     'gray-purple':'#777C8C',
//     'steal-blue':'#C5D9E9'
