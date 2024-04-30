import React from 'react'
import { Grid } from '../components/Grid'
import { webComponentsList } from '../utils/webComponetsList'
import { ProjectCard } from '../components/ProjectCard'

interface WebComponentsProps {

}

export const WebComponents: React.FC<WebComponentsProps> = ({ }) => {
    return (
        <div className="web_Components">
            <h1 className="web_compnents_title">components</h1>
            <Grid>
                {webComponentsList?.map((data, i) => {
                    return <React.Fragment key={i}>
                        <ProjectCard data={data} />
                    </React.Fragment>
                })}
            </Grid>
        </div>
    )
}