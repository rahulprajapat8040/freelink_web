export interface UserInterface {
    id: string
    firstName: string
    lastName: string
    email: string
    role: string
    password: string
    isAgree: boolean
    profilePhoto: string
    title: string
    isSubscribed: boolean
    countryCode: string
    hourlyRate: number
    aboutUser: string
    responseTime: string
    createdAt: string
    updatedAt: string
    deletedAt: any
    certifications: Certification[]
    workHistory: WorkHistory[]
    languages: Language[]
    skills: Skill[]
}

export interface Certification {
    id: string
    certificateImage: string
    certificateName: string
    issuer: string
    year: string
    userId: string
    createdAt: string
    updatedAt: string
    deletedAt: any
}

export interface WorkHistory {
    id: string
    companyName: string
    startDate: string
    endDate: any
    isPresent: boolean
    role: string
    description: string
    userId: string
    createdAt: string
    updatedAt: string
    deletedAt: any
}

export interface Language {
    id: string
    language: string
    proficiency: string
    userId: string
    createdAt: string
    updatedAt: string
    deletedAt: any
}

export interface Skill {
    id: string
    skillName: string
    level: string
    userId: string
    createdAt: string
    updatedAt: string
    deletedAt: any
}
