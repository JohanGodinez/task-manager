import React from "react"

interface Props {
  children: React.ReactNode
}

export const Select = ({ children }: Props) => {
  return (
    <select className="border border-gray w-full px-3 py-2 rounded-md focus:outline-none mt-2">
      {children}
    </select>
  )
}
