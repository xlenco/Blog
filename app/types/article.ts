import type { ParsedContent } from '@nuxt/content'
import type { ReadTimeResults } from 'reading-time'

const _appConfig = useAppConfig()

export interface CustomArticleProps {
    title: string
    description: string
    link: string
    date: string
    updated: string
    categories: [ArticleCategory, ...string[]]
    tags: string[]
    type: 'tech' | 'story'
    image: string
    cover_revert: boolean
    hideInfo: boolean
    recommend: number | boolean
    references: { title: string, link: string }[]
    readingTime: ReadTimeResults
}

export type ArticleCategory = keyof typeof _appConfig.article.categories & string
export type ArticleOrderType = keyof Pick<CustomArticleProps, 'date' | 'updated'>

export default interface ArticleProps extends Partial<CustomArticleProps>, Partial<ParsedContent> {}
