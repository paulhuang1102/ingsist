import React, { useCallback, useEffect, useState} from 'react'

interface SizeValue {
  innerWidth: number
}

export const SizeContext = React.createContext<SizeValue>({
  innerWidth: 0
})

interface Props {
  children?: React.ReactNode
}

const SizeObserver: React.FC<Props> = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(0)
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    document.addEventListener('resize', handleResize, { passive: true})

    return () => document.removeEventListener('resize', handleResize)
  }, [handleResize])
  return (
    <div>
      {children}
    </div>
  )
}

export default SizeObserver