import { createContext, ReactNode, useContext } from 'react'
import useZknetContract from '../hooks/useZknetContract'

// Create ContactContext
const ZkContext = createContext<any>(undefined)

interface ZkContextProviderProps {
    children: ReactNode
  }

// ThemeProvider component
export const ZkContextProvider = ({ children }: ZkContextProviderProps) => {
  const state = useZknetContract()

  return (
    <ZkContext.Provider
      value={{...state}}
    >
      {children}
    </ZkContext.Provider>
  )
}

// Custom hook for using the theme
export const useZkContext = () => {
  const context = useContext(ZkContext)
  if (!context)
    throw new Error(
      'useZkContext must be used within a ZkContextProvider'
    )
  return context
}
