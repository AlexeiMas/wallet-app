import React from 'react'
import {Link} from 'react-router-dom'
import {currencyFormat, getDateFormat} from "@/features/helpers/functions"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import {TItem} from "@/types/data"

const HeadWrapper = styled.div`
  margin-bottom: 1rem;
`

const GroupWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  p.price {
    font-size: 4rem;
    font-weight: 700;
    margin: .5rem 0;
  }

  .title, .date {
    margin: 0;
    color: var(--secondary-text)
  }
`

const DetailHead = ({data}: TItem) => {
  const price = currencyFormat(data.amount)
  const date = getDateFormat(data.date)
  return (
    <HeadWrapper>
      <Link to={-1}>
        <FontAwesomeIcon icon={faAngleLeft} size={"2xl"} style={{color: "#007aff"}}/>
      </Link>
      <GroupWrapper>
        <p className={"price"}>{price}</p>
        <p className={"title"}>{data.title}</p>
        <p className={"date"}>{date}</p>
      </GroupWrapper>
    </HeadWrapper>
  )
}

export default DetailHead