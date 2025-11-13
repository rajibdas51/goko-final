// "use client"

// import type React from "react"

// interface ButtonProps {
//     children: React.ReactNode
//     variant?: "primary" | "secondary" | "outline"
//     size?: "sm" | "md" | "lg"
//     onClick?: () => void
//     className?: string
//     disabled?: boolean
// }

// export const Button: React.FC<ButtonProps> = ({
//     children,
//     variant = "primary",
//     size = "md",
//     onClick,
//     className = "",
//     disabled = false,
// }) => {
//     const baseStyles = "font-bold uppercase tracking-wide transition-all duration-200 rounded-[4px]"

//     const variantStyles = {
//         primary: "bg-gradient-to-r from-[#F4C542] to-[#D4A574] text-black hover:shadow-lg hover:scale-105",
//         secondary: "bg-[#4a4a3a] text-[#D4A574] border-2 border-[#D4A574] hover:bg-[#5a5a4a]",
//         outline: "bg-transparent text-[#D4A574] border-2 border-[#D4A574] hover:bg-[#D4A574] hover:text-black",
//     }

//     const sizeStyles = {
//         sm: "px-4 py-2 text-xs",
//         md: "px-6 py-3 text-sm",
//         lg: "px-8 py-4 text-base",
//     }

//     return (
//         <button
//             onClick={onClick}
//             disabled={disabled}
//             className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//         >
//             {children}
//         </button>
//     )
// }

export {}