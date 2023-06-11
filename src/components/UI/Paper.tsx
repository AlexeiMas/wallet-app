import React from 'react'
import styled from "styled-components"
import {TPaper} from "@/types/general"

const PaperWrapper = styled.div<Pick<TPaper, "p0" | "areaName">>`
  background-color: var(--bg-color-paper);
  padding: ${({p0}) => p0 ? 0 : "var(--p-basic)"};
  border-radius: 10px;
  grid-area: ${({areaName}) => areaName ?? "unset"};
`

const Paper = ({children, areaName, p0}: React.PropsWithChildren<TPaper>) => {
  return (
    <PaperWrapper areaName={areaName} p0={p0}>
      {children}
    </PaperWrapper>
  )
}

export default Paper