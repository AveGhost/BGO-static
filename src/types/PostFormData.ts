import { Field } from "./PostField"

export interface PostFormData {
    title: string
    thumbnail: string
    teaser: string
    content: Field[]
    summaryTitle: string
    summaryContent: string
    plusList: string[]
    minusList: string[]
    score: number
    publishDate: string
    author_id: number
    game_id: number
}