import React from 'react'
import styled from "styled-components"
import CardBalance from "@/components/BriefSummary/CardBalance"
import NoPaymentDue from "@/components/BriefSummary/NoPaymentDue"
import DailyPoints from "@/components/BriefSummary/DailyPoints"

const BriefSummaryWrapper = styled.section`
  display: grid;
  grid-template-areas: 
          "card1 card2" 
          "card3 card2";
  gap: .5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-bottom: 2rem;
`

const BriefSummary = () => {
  return (
    <BriefSummaryWrapper>
      <CardBalance areaName={"card1"}/>
      <NoPaymentDue areaName={"card2"}/>
      <DailyPoints areaName={"card3"}/>
    </BriefSummaryWrapper>
  )
}

export default BriefSummary