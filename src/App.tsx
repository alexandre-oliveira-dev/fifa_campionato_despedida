import {useState} from "react";
import "./App.css";
import milan from "./assets/milan.png";
import juventus from "./assets/juventus.png";
import bayer from "./assets/bayer.png";
import madri from "./assets/madri.png";

function App() {
  const [result, setResult] = useState<
    {player: string; team: string; img: string}[]
  >([]);

  const [open, setOpen] = useState(false);

  const europeanTeams = [
    {
      name: "Real Madrid",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    },
    {
      name: "Barcelona",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    },
    {
      name: "Manchester City",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    },
    {
      name: "Manchester United",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    },
    {
      name: "Liverpool",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    },
    {
      name: "Chelsea",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    },
    {
      name: "Arsenal",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    },
    {
      name: "Bayern de Munique",
      logo: bayer,
    },
    {
      name: "Borussia Dortmund",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    },
    {
      name: "Paris Saint-Germain",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    },
    {
      name: "Juventus",
      logo: juventus,
    },
    {
      name: "Inter de Milão",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
    },
    {
      name: "Milan",
      logo: milan,
    },
    {
      name: "Atlético de Madrid",
      logo: madri,
    },
    {
      name: "Benfica",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/SL_Benfica_logo.svg",
    },
    {
      name: "Tottenham",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
    },
  ];

  const players = [
    "Alexandre",
    "Vitor",
    "Lucas",
    "Igor",
    "Leonardo",
    "Rodrigo",
    "Gabriel",
    "Jefferson",
  ];

  function sort() {
    setResult(result.splice(0, result.length));
    const teams = [...europeanTeams];

    players.forEach(player => {
      const randomIndex = Math.floor(Math.random() * teams.length);
      const assignedTeam = teams[randomIndex];
      const currentIndex = teams.indexOf(assignedTeam);
      teams.splice(currentIndex, 1);

      result.push({
        player,
        team: assignedTeam.name,
        img: assignedTeam.logo,
      });
    });
    setResult(result);
    setOpen(true);
  }

  return (
    <>
      {open && (
        <dialog className="modal" open={open}>
          <h2 style={{fontSize: 50}}>Resultado do Sorteio</h2>
          <br />
          <br />
          <br />
          <ul style={{listStyle: "none"}}>
            {result.map(item => (
              <li key={item.player} style={{marginBottom: "10px"}}>
                <img
                  src={item.img}
                  alt={item.team}
                  style={{
                    width: "50px",
                    verticalAlign: "middle",
                    marginRight: "10px",
                  }}
                />
                <strong>{item.player}</strong> - {item.team}
              </li>
            ))}
          </ul>
        </dialog>
      )}

      <section>
        <h1>FIFA CUP - DESPEDIDA SOLTEIRO</h1>
        <br />
        <br />

        <div className="container">
          <div className="card">
            <h2>Jogadores</h2>
            <ul>
              {players.map(player => (
                <li key={player}>{player}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2>Times</h2>
            <ul>
              {europeanTeams.map(team => (
                <li key={team.name}>
                  <img
                    src={team.logo}
                    alt={team.name}
                    style={{
                      width: "30px",
                      verticalAlign: "middle",
                      marginRight: "10px",
                    }}
                  />
                  {team.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="btn" onClick={sort}>
          Sorteio
        </button>
      </section>
    </>
  );
}

export default App;
