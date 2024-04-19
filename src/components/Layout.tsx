import React, { useEffect } from 'react'


interface LayoutProps {

}

export const Layout: React.FC<LayoutProps> = ({ }) => {
    const mouseMove = (event: any) => {
        let shadow = document.querySelector<HTMLElement>("#cursor-shadow")
        if (shadow) {
            shadow!.style.top = event.pageY + 'px'
            shadow!.style.left = event.pageX + 'px'
        }
    }

    return (
        <div className='layout' onMouseMove={(event) => mouseMove(event)}>
            <h1>layout</h1>
            <div id='cursor-shadow'></div>
        </ div>
    )
}