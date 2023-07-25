import React from 'react'

type Props = {
  children: React.ReactNode;
  size: string;
}

const Htext = ({children, size}: Props) => {
  return (
    <h1 className={`basis-3/5 font-montserrat ${size} font-bold`}>
      {children}
    </h1>

  )
}

export default Htext