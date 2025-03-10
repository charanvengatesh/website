"use client";
import React from "react";
import LiquidChrome from "../../components/background/LiquidChrome";
import TextPressure from "../../components/text/pressure";

export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      <LiquidChrome
        baseColor={[0.06, 0.03, 0.02]}
        speed={0.4}
        amplitude={0.9}
        interactive={false}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          width: "70%",
        }}
      >
        <TextPressure
          text="Charan"
        //   fontFamily="EB-Garamond"
          fontUrl="/components/text/EB-variable.ttf"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#000000"
          minFontSize={26}
        />
        <div
          style={{
            width: "40%",
          }}
        >
          <TextPressure
            text="Vengatesh"
            flex={true}
            alpha={false}
            stroke={false}
            width={false}
            weight={false}
            italic={false}
            textColor="#ffffff"
            strokeColor="#000000"
            minFontSize={26}
          />
        </div>
      </div>
    </div>
  );
}
