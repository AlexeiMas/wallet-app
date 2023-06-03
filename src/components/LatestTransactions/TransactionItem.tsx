import React from 'react'
import {currencyFormat, getDateFormat, getRandomDarkHexColor} from "@/features/helpers/functions"
import styled from "styled-components"
import Badge from "@/components/UI/Badge"
import {Link} from "react-router-dom"
import {TItem} from "@/types/data"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight, faAppleAlt, faCashRegister} from "@fortawesome/free-solid-svg-icons"

const ItemWrapper = styled(Link)`
  display: grid;
  grid-template-columns: 15% calc(80% - 2rem) 5%;
  column-gap: 1rem;
  text-decoration: none;
  color: var(--primary-text);
`
const IconWrapper = styled.div`
  display: grid;
  place-items: center;
  align-self: center;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 8px;
  border: 1px solid #8e8e92;
  background-color: ${({color}) => color};

  img {
    display: block;
    width: 60%;
    height: 60%;
    user-select: none;
    -webkit-user-drag: none;
  }
`

const BlocksInLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContentWrapper = styled.div`
  p {
    margin: 0;
  }

  h3.title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }

  p.description, p.date {
    color: var(--secondary-text);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  p.price {
    font-size: 1.2rem;
  }
`

const TransactionItem = ({data}: TItem) => {
  const price = currencyFormat(data.amount)
  const date = getDateFormat(data.date)
  const color = getRandomDarkHexColor()

  return (
    <li>
      <ItemWrapper to={data.id}>
        <IconWrapper color={color}>
          <FontAwesomeIcon size={"xl"} style={{color: "white"}} icon={data.type === "Payment" ? faCashRegister: faAppleAlt}/>
        </IconWrapper>
          <ContentWrapper>
          <BlocksInLine>
            <h3 className={"title"}>{data.title}</h3>
            <p className={"price"}>{data.type === "Payment" && "+"}{price}</p>
          </BlocksInLine>
          <BlocksInLine>
            <p className={"description"}>{data.status === 'Pending' && "Pending - "}{data.description}</p>
            {data.type !== "Payment" && <Badge>{3}%</Badge>}
          </BlocksInLine>
          <p className={"date"}>{data.authorized_user && `${data.authorized_user} - `}{date}</p>
        </ContentWrapper>
        <div>
          <FontAwesomeIcon icon={faAngleRight} size={"lg"} style={{color: "var(--secondary-text)"}} />
        </div>
      </ItemWrapper>
    </li>
  )
}

export default TransactionItem