import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function formatError(error: any){
// if(error.name === 'ZodError'){
//   // Handle Error
// } else if (){
//   // Handle Prisma error
// }
// }
