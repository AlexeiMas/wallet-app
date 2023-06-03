import React from 'react'
import styled from "styled-components"

const ContainerWrapper = styled.div`
  width: min(100%, 428px);
  min-height: 100vh;
  margin: 0 auto;
  padding: var(--p-basic);
  background-color: var(--bg-color);
`

const Container = ({children}: React.PropsWithChildren) => {
  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  )
}

export default Container