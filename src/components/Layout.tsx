import React, { useEffect } from 'react'
import { Info } from './Info'


interface LayoutProps {
    children?: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const mouseMove = (e: any) => {
        let shadow = document.querySelector<HTMLElement>("#cursor-shadow")
        if (shadow) {
            shadow!.style.top = e.pageY + 'px'
            shadow!.style.left = e.pageX + 'px'
        }
    }

    return (
        <div className='layout' onMouseMove={(event) => mouseMove(event)}>
            <div className="layout_left">
                <Info />
            </div>
            <div className="layout_right">
                {children}
            </div>
            <div id='cursor-shadow'></div>
        </ div>
    )
}