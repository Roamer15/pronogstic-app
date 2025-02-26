import {createContext, useState} from 'react'
import PropTypes from 'prop-types';

export const FixtureContext = createContext()

export const FixtureProvider = ({children}) => {
    const [team, setTeam] = useState([]);
    return(
        <FixtureContext.Provider value={{team, setTeam}}>
            {children}
        </FixtureContext.Provider>
    )
}

FixtureProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FixtureProvider