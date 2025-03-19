import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex px-4 py-5 rounded-md focus:border-accent placeholder:text-white/60 border-white/10 bg-primary font-light h-[48px] border outline-none",
        className
      )}
      ref={ref}
      {...props} />
  );
})
Input.displayName = "Input"

export { Input }
