export interface JobInterface {
    id: string
    projectName: string
    minPrice: number
    maxPrice: number
    description: string
    tags: string[]
    skillsRequired: string[]
    categoryId: any
    userId: string
    createdAt: string
    updatedAt: string
    deletedAt: any
}
