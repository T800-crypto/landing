import localFont from "next/font/local";

export const chakraPetch = localFont({ 
    src: [
        {
          path: "/fonts/ChakraPetch-Regular.ttf",
          weight: "400",
        },
        {
          path: "/fonts/ChakraPetch-Medium.otf",
          weight: "500",
        },
        {
          path: "/fonts/ChakraPetch-Semibold.otf",
          weight: "600",
        },
        {
          path: "/fonts/ChakraPetch-Bold.otf",
          weight: "700",
        },
      ],
      variable: "--font-chakra-petch",
});