
import PropTypes from "prop-types";

export default function Display({data, saveTeam}) {
    console.log(data)
  return (
    <>
    <div className="top">
    <h1>Teams</h1>
    <input type="text" placeholder="search a team"/>
    </div>
    <h1>Clubs</h1>
      <div className="clubs">
        {data.clubs.map((team, index) => (
          <div className="club" key={index}>
           
            <img src={team.url} alt={team.name} onClick={()=>saveTeam(team)}/>
            <p>{team.name}</p>
          </div>
        ))}
        
      </div>
      <h1>Countries</h1>
      <div className="countries">
        {data.countries.map((team, index) => (
          <div className="country" key={index}>
           
            <img src={team.url} alt={team.name} onClick={()=>saveTeam(team)}/>
            <p>{team.name}</p>
          </div>
        ))}
        
      </div>
    </>
  );
}

Display.propTypes = {
    saveTeam: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}