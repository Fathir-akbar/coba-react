import NBAPlayers from "./data/NBAPlayers";

function PlayerCard ({ name, photo_url, club, height}) {
  return (
    <div className="card bg-slate-50 border border-slate-200 p-3">
      <img src={photo_url} alt="" />
      <h3>{name}</h3>
      <p>{club}</p>
      <p>{height} cm</p>
    </div>
  );
}

export default function App() {
   return (
    <section className="Player-list flex gap-5">
      {
        NBAPlayers.map((Player) => (
          <PlayerCard 
          key={Player.id} 
          name={Player.name}
          club={Player.club}
          photo_url={Player.photo_url}
          height={Player.height}
          />
        ))}
    </section>
   );
}