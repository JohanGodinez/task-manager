import React from "react"

interface Props {
  children: React.ReactNode
}

export const PublicLayout: React.FC<Props> = ({children}) => {
  return (
    <>{children}</>
  )
}
