import Paper from "@/components/UI/Paper"
import {TPaper} from "@/types/general"
import {currencyFormat, getCardState} from "@/features/helpers/functions"
import BriefCardBase from "@/components/BriefSummary/BriefCardBase"

const CardBalance = ({areaName}: TPaper) => {
  const props = areaName ? {areaName} : {}
  const {balance, available} = getCardState()
  const balanceFormatted = currencyFormat(balance)
  const availableFormatted = currencyFormat(available)

  return (
    <Paper {...props}>
      <BriefCardBase
        title={"Card balance"}
        amount={balanceFormatted}
        description={`${availableFormatted} Available`}
      />
    </Paper>
  )
}

export default CardBalance