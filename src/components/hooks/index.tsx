import React, { createContext, useContext } from 'react'
import { ModalProvider } from './ModalProvider'
import { ToastProvider } from './ToastProvider'

type TAppData = {}

export const AppContext = createContext<TAppData>({} as TAppData)

export const AppProvider: React.FC<any> = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>
      <ToastProvider>
        <ModalProvider>{children}</ModalProvider>
      </ToastProvider>
    </AppContext.Provider>
  )
}

export const useApp = (): TAppData => useContext(AppContext)
