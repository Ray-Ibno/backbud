import React, { useState } from 'react'

export const EstimatedTotalContext = React.createContext()

const EstimatedTotalContextProvider = ({ children }) => {
  const [estimatedTotal, setEstimatedTotal] = useState(0)
  return (
    <EstimatedTotalContext.Provider value={[estimatedTotal, setEstimatedTotal]}>
      {children}
    </EstimatedTotalContext.Provider>
  )
}

export default EstimatedTotalContextProvider
