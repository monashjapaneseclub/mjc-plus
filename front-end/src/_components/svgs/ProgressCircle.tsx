type ProgressCircleProps = React.SVGProps<SVGSVGElement> & {
  progress: number;
};

const SvgProgressCircle: React.FC<ProgressCircleProps> = ({ progress, ...props }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      className="absolute inset-0 w-full h-full -rotate-90"
      viewBox="0 0 64 64"
      {...props}
    >
      <circle
        cx="32"
        cy="32"
        r={radius}
        fill="none"
        stroke="#fecaca"
        strokeWidth="3"
      />
      <circle
        cx="32"
        cy="32"
        r={radius}
        fill="none"
        stroke="#ef4444"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        className="transition-all duration-1000 ease-out"
      />
    </svg>
  );
};

export default SvgProgressCircle;
