export default function PointsTable() {
    const Drivers = [
    {name:"Max Verstappen",
     points:169,
     team:"RedBull"
    },
    {name:"Sergio Perez",
    points:107,
    team:"RedBull"
    },
    {name:"Lewis Hamilton",
    points:42,
    team:"Mercedes"
    },
    {name:"George Russell",
    points:54,
    team:"Mercedes"
    },
    {name:"Charles Leclerc",
    points:138,
    team:"Ferrari"
    },
    {name:"Carlos Sainz",
    points:108,
    team:"Ferrari"
    },
    {name:"Lando Norris",
    points:113,
    team:"McLaren"
    },
    {name:"Oscar Piastri",
    points:71,
    team:"McLaren"
    },
    {name:"Pierre Gasly",
    points:1,
    team:"Alpine"
    },
    {name:"Esteban Ocon",
    points:1,
    team:"Alpine"
    },
    {name:"Fernando Alonso",
    points:33,
    team:"AstonMartin"
    },
    {name:"Lance Stroll",
    points:11,
    team:"AstonMartin"
    }, 
    {name:"Daniel Ricciardo",
    points:5,
    team:"RacingBulls"
    },
    {name:"Yuki Tsunoda",
    points:19,
    team:"RacingBulls"
    },
    {name:"Valtteri Bottas",
    points:0,
    team:"KickSauber"
    },
    {name:"Zhou Guanyu",
    points:0,
    team:"KickSauber"
    },
    {name:"Alexander Albon",
    points:2,
    team:"Williams"
    },
    {name:"Logan Sargeant",
    points:0,
    team:"Williams"
    },
    {name:"Kevin Magnussen",
    points:1,
    team:"Haas"
    },
    {name:"Nico Hulkenberg",
    points:6,
    team:"Haas"
    },
    
  ]
  const Constructors = [
    { name:"RedBull",
      value: Drivers[0].points + Drivers[1].points },
      { name:"Mercedes",
      value: Drivers[2].points + Drivers[3].points },
      { name:"Ferrari",
      value: Drivers[4].points + Drivers[5].points },
      { name:"McLaren",
      value: Drivers[6].points + Drivers[7].points },
      { name:"Alpine",
      value: Drivers[8].points + Drivers[9].points },
      { name:"AstonMartin",
      value: Drivers[10].points + Drivers[11].points },
      { name:"RacingBulls",
      value: Drivers[12].points + Drivers[13].points },
      { name:"KickSauber",
      value: Drivers[14].points + Drivers[15].points },
      { name:"Williams",
      value: Drivers[16].points + Drivers[17].points },
      { name:"Hass",
      value: Drivers[18].points + Drivers[19].points },
  ];


  //console.log(Constructors.sort((a,b) => b.value-a.value).map(i => i.name))

  return (
    <div className="pointstable">
      <div className="wdc-table">
        <table>
          <tbody>
            <tr>
              <th>WDC </th>
            </tr>
            {
              Drivers.sort((a,b)=> b.points - a.points).map(i => <tr key={i}><td>{i.name}</td><td>{i.points}</td></tr> )
            }
          </tbody>
        </table>
      </div>
      <div className="wcc-table">
        <table>
          <tbody>
            <tr>
              <th>WCC</th>
            </tr>
            {Constructors.sort((a,b)=> b.value - a.value).map(i => <tr key={i}><td>{i.name}</td><td>{i.value}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
