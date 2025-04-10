import React, { useContext, useEffect} from 'react'
import noteContext from '../Context/notes/noteContext'

const About = () => {
   
    const k = useContext(noteContext)
    return (
        <div>
            This is about page
        </div>
    )
}

export default About