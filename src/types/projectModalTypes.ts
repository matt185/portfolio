export interface ProjectIntro {
    background: string
    githubLink: string
    concept: string
    image?: string
    imageIsVertical?: boolean
    projectTechLogo?: string[]

}
export interface ProjectKeyFeature {
    image: string
    imageIsVertical?: boolean
    text: string
}

export interface ProjectContributionDescription {
    text: string
}

export interface ProjectContributions {
    image?: string
    imageIsVertical?: boolean
    description: ProjectContributionDescription[]
}


export interface ProjectModalData {
    backgroundImage?: string
    intro: ProjectIntro
    keyFeature: ProjectKeyFeature[]
    contributions: ProjectContributions[]
}

export interface SlidesData {
    projectId: number
    projectName: string
    backgroundImage?: string
    modalData: ProjectModalData[]
}