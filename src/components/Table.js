import React, { useContext, useState, useEffect } from 'react'
import EnrtyContext from '../context/EntryContext';

const Table = (props) => {
    const context = useContext(EnrtyContext);
    const {entries, getEntries} = context;
    const {entry, setEntry} = useState({name: "", last: "", buy: "", volume: "", base_unit: ""});
    useEffect(() => {
        getEntries();
    }, [])
    return (
        <div>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last</th>
                        <th scope="col">Buy</th>
                        <th scope="col">Volume</th>
                        <th scope="col">Base Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((item, index) => (
                        <tr key={item._id}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.last}</td>
                            <td>{item.buy}</td>
                            <td>{item.volume}</td>
                            <td>{item.base_unit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table