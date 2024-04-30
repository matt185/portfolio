import React, { useEffect, useState } from 'react'

import { FaLinkedin, FaGithub } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

interface InfoProps {

}

export const Info: React.FC<InfoProps> = ({ }) => {
    const [activeLink, setActiveLink] = useState<number | undefined>(undefined)
    const handleLinks = (value: number) => {
        setActiveLink(value)
    }
    const handleLinksClass = (value: number) => {
        return (value === activeLink) ? "active" : ""
    }
    return (
        <div className="info">
            <div className="info_content">
                <div className="info_content_profile">
                    <h1 className="info_content_title">Mattia Marcenta</h1>
                    <p className="info_content_description"> Frontend engineer</p>
                </div>
                <div className="info_content_menu">
                    <NavLink className={handleLinksClass(1)} to="/" onClick={() => handleLinks(1)}>about</NavLink>
                    <NavLink className={handleLinksClass(2)} to="/projects" onClick={() => handleLinks(2)}>Projects</NavLink>
                    <NavLink className={handleLinksClass(3)} to="/contacts" onClick={() => handleLinks(3)}>Contacts</NavLink>
                </div>
                <div className="info_content_links">
                    <a href="" target='_blank'><FaLinkedin /></a>
                    <a href="" target='_blank'><FaGithub /></a>
                </div>
            </div>
        </div>
    )
}