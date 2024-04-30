import { SlidesData } from './projectModalTypes'


export interface Size {
    width: number | undefined
    height: number | undefined
}

export interface SkillLogo {
    name: string
    logo: string
    type: string
}

export interface Project {
    projectId: number
    name: string
    logo: string
    logoIsVertical?: boolean
    description: string
    techStack: string
    link: string
    route: string
    page: boolean
    home: boolean
}




export interface ProjectsInitialState {
    projects: Project[] | undefined
    filterdProjects: Project[] | undefined
    slidesData?: SlidesData[] | undefined
    projectSlideData?: SlidesData[] | undefined
}
