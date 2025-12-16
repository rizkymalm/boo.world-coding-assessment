export interface Option {
  id: string
  text: string
  votes: number
}

export interface Question {
  id: string
  title: string
  description: string
  options: Option[]
}