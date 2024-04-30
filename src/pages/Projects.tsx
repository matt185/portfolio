import React, { useState } from 'react'
import { Grid } from '../components/Grid'
import { ProjectCard } from '../components/ProjectCard'
import { projectsList } from '../utils/projectsList'
import { Project } from '../types/types'
interface ProjectsProps {

}

export const Projects: React.FC<ProjectsProps> = ({ }) => {
    const [list, setList] = useState<Project[]>(projectsList)
    return (
        <div className="projects">
            <Grid >
                {projectsList.map((project, i) => {
                    return (<React.Fragment key={i}>
                        <ProjectCard data={project} />
                    </React.Fragment>)
                })}
            </Grid>
        </div>)
}