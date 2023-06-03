import React from 'react'
import styled from "styled-components"

const BadgeWrapper = styled.div`
  width: fit-content;
  padding: 2px 5px;
  background-color: #f2f2f6;
  color: #848489;
  font-size: .75rem;
  border-radius: 8px;
  text-align: center;
`

const Badge = ({children}: React.PropsWithChildren) => {
  return (
    <BadgeWrapper>
      {children}
    </BadgeWrapper>
  )
}

export default Badge