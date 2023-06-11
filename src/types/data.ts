export enum EType {
  Payment = "Payment",
  Credit = "Credit"
}

export enum EStatus {
  Pending = "Pending",
  Approved = "Approved"
}


export interface IData {
  id: string
  type: keyof typeof EType,
  amount: number
  title: string
  description: string
  date: string
  status: keyof typeof EStatus
  authorized_user: string
  logo: string
}

export type TItem = {
  data: IData
}