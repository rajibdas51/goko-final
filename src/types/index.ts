export interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface PresaleData {
  currentAmount: number
  targetAmount: number
  exchangeRate: number
  purchasedTokens: string
  stakedTokens: string
}

export type CurrencyType = "ETH" | "USDT"
