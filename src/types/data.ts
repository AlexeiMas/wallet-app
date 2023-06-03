export interface IData {
  id: string
  type: "Payment" | "Credit"
  amount: number
  title: string
  description: string
  date: string
  status: "Pending" | "Approved"
  authorized_user: string
  logo: string
}

export type TItem = {
  data: IData
}