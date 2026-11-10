import { Play } from "lucide-react";

const PlayIcon = ({ size = 24, className = "" }) => {
  return (
    <Play
      size={size}
      fill="currentColor"
      className={className}
    />
  );
};

export default PlayIcon;