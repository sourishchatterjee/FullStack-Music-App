// "use client";

// interface SliderProps {
//   value: number;
//   onChange: (value: number) => void;
// }

// const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onChange(Number(e.target.value));
//   };

//   return (
//     <input
//       type="range"
//       min="0"
//       max="1"
//       step="0.01"
//       value={value}
//       onChange={handleChange}
//       className="
//         w-full 
//         h-2 
//         bg-gray-300 
//         rounded-lg 
//         appearance-none 
//         focus:outline-none 
//         cursor-pointer
//       "
//       style={{
//         background: `linear-gradient(to right, #4CAF50 ${value * 100}%, #d3d3d3 ${
//           100 - value * 100
//         }%)`,
//       }}
//     />
//   );
// };

// export default Slider;




//


"use client";

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
  step?: number;
}

const Slider: React.FC<SliderProps> = ({ 
  value = 0, 
  onChange, 
  max = 1, 
  step = 0.1 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const getPercentage = () => (value / max) * 100;

  return (
    <input
      type="range"
      min="0"
      max={max}
      step={step}
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
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:w-4
        [&::-webkit-slider-thumb]:h-4
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-white
        [&::-webkit-slider-thumb]:cursor-pointer
      "
      style={{
        background: `linear-gradient(to right, #22c55e ${getPercentage()}%, #d3d3d3 ${getPercentage()}%)`,
      }}
    />
  );
};

export default Slider;
