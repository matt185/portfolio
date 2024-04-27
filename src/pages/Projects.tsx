import React from 'react'
import { Grid } from '../components/Grid'

interface ProjectsProps {

}

export const Projects: React.FC<ProjectsProps> = ({ }) => {
    return (
        <div className="projects">
            <h1 >Projects</h1>
            <Grid />
        </div>)
}