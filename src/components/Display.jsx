import data from "../football.json";

export default function Display() {
  return (
    <>
    <div className="top">
    <h1>Teams</h1>
    <input type="text" placeholder="search a team"/>
    </div>
  
      <div className="teams">
        {data.clubs.map((team, index) => (
          <div className="club" key={index}>
            <img src={team.url} alt={team.name} />
            <p key={index}>{team.name}</p>
          </div>
        ))}
        <h1>Display</h1>
      </div>
    </>
  );
}
