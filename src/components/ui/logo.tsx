import { cn } from "@/lib/utils"

function Logo({ className }: { className?: string }) {
  return (
    <>
      <img
        src="/Images/drk-AP.webp"
        alt="Logo"
        className={cn("h-auto transition-opacity duration-300 block dark:hidden", className)}
      />
      <img
        src="/White-AP.png"
        alt="Logo"
        className={cn("h-auto transition-opacity duration-300 hidden dark:block", className)}
      />
    </>
  )
}

export default Logo
