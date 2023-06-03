import React from 'react'
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck} from "@fortawesome/free-solid-svg-icons"

const BriefCardBaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
const MainBlock = styled.div`
  margin: ${({my}) => my ? "auto 0" : "unset"};
  p {
    margin: 0;
  }
  p.title {
    text-transform: capitalize;
  }
  strong.amount {
    line-height: 2rem;
    font-size: 1.8rem;
  }
  p.description {
    color: var(--secondary-text);
  }
`

const AdditionalBlock = styled.div`
  display: grid;
  place-items: center;
  min-width: 50%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 1px solid #e1e1e3;
  background-color: #eeeeef;
  margin-left: auto
`

export type TBriefCardBase = {
  title: string
  amount?: Intl.NumberFormat
  description: string | number
  isAdditional?: boolean
}

const BriefCardBase = ({title, amount, description, isAdditional}: TBriefCardBase) => {
  return (
    <BriefCardBaseWrapper>
      <MainBlock my={!isAdditional}>
        <p className={"title"}>{title}</p>
        <strong className={"amount"}>{amount}</strong>
        <p className={"description"}>{description}</p>
      </MainBlock>
      {
        isAdditional &&
        <AdditionalBlock>
          <FontAwesomeIcon icon={faCheck} size={"2xl"}/>
        </AdditionalBlock>
      }
    </BriefCardBaseWrapper>
  )
}

export default BriefCardBase