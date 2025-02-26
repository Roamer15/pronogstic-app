import { useNavigate } from "react-router";
import Display from '../components/Display'
import data from "../football.json";
import { useContext } from "react";
import { FixtureContext } from "../context/fixtureContext";
export default function First() {
    const navigate = useNavigate()
    console.log(data)

    const {team, setTeam} = useContext(FixtureContext)
    console.log(team)
      const handleSaveTeam = (team) => {
        setTeam(team);
        console.log(team)
    
        if (team.length === 2){
          navigate('/download')
        }
      }
    return (
        <>
          <Display saveTeam={handleSaveTeam} data={data}/>
        </>
    )
}