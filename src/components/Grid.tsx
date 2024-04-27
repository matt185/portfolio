import React from 'react'

interface gridProps {
    children?: React.ReactNode
}

export const Grid: React.FC<gridProps> = ({ children }) => {
    return (
        <div className="grid">
            {children}
        </div>
    )
}