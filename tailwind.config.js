/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        soft: {
          primary: "#dc2626", // Corporate Brand Red
          primaryHover: "#b91c1c",
          accent: "#ef4444", // Vibrant Red
          lightBlue: "#f87171",
          skyBlue: "#dc2626",
          iceBlue: "#fef2f2",
          paleBlue: "#fff5f5",
          darkNavy: "#070b12",
          heroDark: "#090d16",
          cardDark: "#111827",
          footerBg: "#0b0f19",
          surface: "#f8fafc",
          border: "#e2e8f0",
          textMuted: "#64748b",
          textDark: "#0f172a",
        },
        ue: {
          ice: "#fff5f5",
          pale: "#fef2f2",
          navy: "#0f172a",
          deep: "#070b12",
          teal: "#dc2626",
          cyan: "#ef4444",
          mist: "#f8fafc",
          slate: "#64748b",
          lavender: "#fee2e2",
          card: "#ffffff",
          border: "#e2e8f0",
          surface: "#f8fafc",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Geist', 'system-ui', 'sans-serif'],
        cisco: ['"CiscoSans"', '"Cisco Sans"', '"Fira Sans"', 'Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px rgba(220, 38, 38, 0.14)',
        'soft-md': '0 8px 24px rgba(220, 38, 38, 0.20)',
        'soft-lg': '0 16px 40px rgba(220, 38, 38, 0.26)',
        'soft-glow': '0 0 30px rgba(239, 68, 68, 0.45)',
        'card-3d': '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
      }
    },
  },
  plugins: [],
}
