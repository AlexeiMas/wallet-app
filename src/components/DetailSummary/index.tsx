import React from 'react'
import Paper from "@/components/UI/Paper"
import {currencyFormat} from "@/features/helpers/functions"
import {TItem} from "@/types/data"
import styled from "styled-components"

const Summary = styled.div`
  margin: -1rem 0;
  
  h4 {
    margin-bottom: 0;
  }
  
  p.description {
    margin-top: .5rem;
    color: var(--secondary-text);
  }
  
  hr {
    background-color: var(--hr-color); 
    height: 1px; 
    border: 0;
  }
`

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 700;
    margin-top: .5rem;
  }
`

const DetailSummary = ({data}: TItem) => {
  const {status, description, amount} = data
  const price = currencyFormat(amount)

  return (
    <Paper>
      <Summary>
        <h4>Status: {status}</h4>
        <p className={"description"}>{description}</p>
        <hr/>
        <TotalWrapper>
          <p>Total</p>
          <p>{price}</p>
        </TotalWrapper>
      </Summary>
    </Paper>
  )
}

export default DetailSummary