import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "Foundations/Colors",
} as Meta;

type Color = {
  name: string;
  color: string;
};

const colors = {
  appColors: [
    { name: "White", color: "#FFFFFF" },
    { name: "Black", color: "#000000" },
  ],
  default: [
    { name: "default-50", color: "#F2F3F4" },
    { name: "default-100", color: "#E5E6E8" },
    { name: "default-200", color: "#C9CBCE" },
    { name: "default-300", color: "#AFB1B4" },
    { name: "default-400", color: "#92969A" },
    { name: "default-500", color: "#5F6368" },
    { name: "default-600", color: "#4D5156" },
    { name: "default-700", color: "#404346" },
    { name: "default-800", color: "#2F3234" },
    { name: "default-900", color: "#232628" },
  ],
  primary: [
    { name: "primary-50", color: "#EFF6FF" },
    { name: "primary-100", color: "#DBEAFE" },
    { name: "primary-200", color: "#BFDBFE" },
    { name: "primary-300", color: "#93C5FD" },
    { name: "primary-400", color: "#60A5FA" },
    { name: "primary-500", color: "#3B82F6" },
    { name: "primary-600", color: "#2563EB" },
    { name: "primary-700", color: "#1D4ED8" },
    { name: "primary-800", color: "#1E40AF" },
    { name: "primary-900", color: "#1E3A8A" },
  ],
};

const ColorBox: React.FC<Color> = ({ name, color }) => {
  // Función para determinar si el color es oscuro o claro
  const isDarkColor = (color: string) => {
    // Convertir el color a RGB
    const rgb = parseInt(color.substring(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    // Calcular la luminosidad según la fórmula de luminosidad relativa
    const luminosity = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    // Si la luminosidad es menor o igual a 128, el color es oscuro
    return luminosity <= 128;
  };

  // Determinar el color del texto basado en si el color es oscuro o claro
  const textColor = isDarkColor(color) ? "white" : "black";

  return (
    <div style={{ margin: "10px", textAlign: "center" }}>
      <div
        style={{
          backgroundColor: color,
          width: "100px",
          height: "100px",
          borderRadius: "999px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: textColor, // Establecer el color del texto
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        <p>{color}</p>
      </div>
      <p>{name}</p>
    </div>
  );
};

type ColorSectionProps = {
  title: string;
  colors: Color[];
};

const ColorSection: React.FC<ColorSectionProps> = ({ title, colors }) => (
  <div style={{ marginBottom: "20px" }}>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {colors.map((color) => (
        <ColorBox key={color.name} {...color} />
      ))}
    </div>
  </div>
);

export const Colors: React.FC = () => (
  <div style={{ padding: "20px" }}>
    <ColorSection title="App Colors" colors={colors.appColors} />
    <ColorSection title="Default" colors={colors.default} />
    <ColorSection title="Primary" colors={colors.primary} />
  </div>
);
