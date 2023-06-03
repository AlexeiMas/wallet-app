import React from 'react'
import styled from "styled-components"
import Loader from "@/components/UI/Loader"

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
`
type TFlexWrapper = {
  embedLoader?: boolean
}

const FlexWrapper = ({children, embedLoader}: React.PropsWithChildren<TFlexWrapper>) => {
  return (
    <Flex>
      {embedLoader && <Loader/>}
      {children}
    </Flex>
  )
}

export default FlexWrapper