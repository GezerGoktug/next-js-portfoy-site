import { Playfair_Display } from "next/font/google";

const logo_font = Playfair_Display({ subsets: ["latin"] });

const Logo = () => {
  return (
    <h1
      className={`text-3xl xs:text-4xl font-bold row-center gap-2  ${logo_font.className}`}
    >
      <span className="text-gradient-r from-foreground-700 text-shadow-sm shadow-foreground-700  to-foreground-400/50">
        Göktuğ
      </span>
      <span className="text-gradient-r from-foreground-700  to-foreground-300">
        Gezer
      </span>
    </h1>
  );
};

export default Logo;
