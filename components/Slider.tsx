"use client";

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={value}
      onChange={handleChange}
      className="
        w-full 
        h-2 
        bg-gray-300 
        rounded-lg 
        appearance-none 
        focus:outline-none 
        cursor-pointer
      "
      style={{
        background: `linear-gradient(to right, #4CAF50 ${value * 100}%, #d3d3d3 ${
          100 - value * 100
        }%)`,
      }}
    />
  );
};

export default Slider;
