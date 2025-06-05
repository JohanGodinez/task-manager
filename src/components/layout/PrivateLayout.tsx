import React from "react"

interface Props {
  children: React.ReactNode
}

export const PrivateLayout: React.FC<Props> = ({children}) => {
  return (
    <>{children}</>
  )
}
