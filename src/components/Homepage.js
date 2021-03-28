import React from 'react'
import {Link} from "react-router-dom"

export default function Homepage() {
    return (
        <>
        <div>
            This is the home page
        </div>
        <div className="w-100 text-center mt-2">
                Already have an account?<Link to="/login"> Log In</Link>
        </div>
        <div className="w-100 text-center mt-2">
                Don't have an account?<Link to="/signup"> Sign Up</Link>
        </div>
        </>
    )
}


