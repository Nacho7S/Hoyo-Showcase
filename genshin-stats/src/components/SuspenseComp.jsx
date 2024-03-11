import React, { Suspense } from 'react'

export const SupenseWrapper = ({children}) => {
  return (
    <Suspense>
      {children}
    </Suspense>
  )
}
