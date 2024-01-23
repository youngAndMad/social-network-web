export type Page<T> = {
    content: [T],
    totalElements: number
    isFirst: boolean
    isLast: boolean
    hasNext: boolean
    hasPrevious: number
    hasContent:boolean
    size: number
    number: number
    totalPages: number
  }
  