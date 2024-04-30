import React from 'react'
import { Project } from '../types/types'
import { AiFillGithub } from 'react-icons/ai'
interface ProjectCardProps {
    data: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
    const setImageDirections = (isVertical: boolean) => {
        if (isVertical) {
            return 'projectCard_image_vertical'
        }
        return 'projectCard_image_horizontal'
    }
    return (
        <div className="projectCard">
            <div className="projectCard_header">
                <h2 className="projectCard_header_title">{data.name}</h2>
            </div>
            <div className="projectCard_git">
                <a href={data.link} target='_blank'>
                    <AiFillGithub className="icon" />
                </a>
            </div>
            <div className="image">
                <img className={setImageDirections(data.logoIsVertical!)} src={data.logo} alt="" />
            </div>
            <div className="projectCard_description">
                <p>{data.description}</p>
            </div>
            <div className="projectCard_tech">
                <b>Tech:</b><p>{data.techStack}</p>
            </div>
            <a href={data.route}>more</a>
        </div>
    )
}