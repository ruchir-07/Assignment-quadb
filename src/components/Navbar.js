import React, { useContext } from 'react'
import EntryContext from '../context/EntryContext'

const Navbar = () => {
    const context = useContext(EntryContext);
    const { getEntries, storedata, getfirsts } = context;

    return (
        <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">HODLINFO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item m-2">
                            <button type="button" className="btn btn-light" onClick={()=>{storedata()}}>Store in Database</button>
                        </li>
                        <li className="nav-item m-2">
                            <button type="button" className="btn btn-light" onClick={()=>{getfirsts()}}>Display Top 10</button>
                        </li>
                        <li className="nav-item m-2">
                            <button type="button" className="btn btn-light" onClick={()=>{getEntries()}}>Display All</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav></div>
    )
}

export default Navbar