import { useState } from "react";
import EntryContext from "./EntryContext";

const EntryState = (props) => {
    const host = 'http://localhost:5000'
    const entriesInitial = []
    const [entries, setentries] = useState(entriesInitial)

    //Get all entries
    const getEntries = async () => {

        const response = await fetch(`${host}/api/fetch/fetchdata`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        });
        const json = await response.json();
        setentries(json);
        console.log(json);
        // }
        // catch(error){
        //     console.error('Error fetching and fetching data:', error);
        // }
    }

    // Top 10 entries
    const getfirsts = async () => {
        // try {
        const response = await fetch(`${host}/api/fetch/fetchtopdata`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        });
        const json = await response.json();
        setentries(json);
        // } catch (error) {
        //     console.error('Error fetching and fetching data:', error);
        // }
    }

    // Fetch and Store in database
    const storedata = async () => {
        // try {
        const response = await fetch(`${host}/api/fetch/storedata`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        });
        body: JSON.stringify({ message: "Notes Added Successfully" });
        // } catch (error) {
        //     console.error('Error fetching and saving data:', error);
        // }
    }

    return (
        <EntryContext.Provider value={{ entries, getEntries, storedata, getfirsts }}>
            {props.children}
        </EntryContext.Provider>
    )
}

export default EntryState;