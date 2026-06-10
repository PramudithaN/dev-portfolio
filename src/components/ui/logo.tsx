import { cn } from "@/lib/utils"

function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/White-AP.png"
      alt="Logo"
      className={cn("h-auto transition-opacity duration-300", className)}
    />
  )
}

export default Logo
