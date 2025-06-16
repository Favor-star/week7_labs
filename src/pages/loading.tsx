import { Loader2Icon, LucideLoader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-[85svh] flex items-center justify-center">
      <Loader2Icon
        size={50}
        strokeWidth={1.3}
        className="animate-spin transition-all text-secondary"
      />
    </div>
  );
};

export default Loading;
