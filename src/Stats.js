import data from './data/testdata.json';
console.log(data);
const Stats = () => {
  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th>Track</th>
          <th>Start Position</th>
          <th>End Position</th>
          <th>Laps</th>
          <th>Strength of Field</th>
        </tr>
      </thead>
      <tbody>
        {data.races.map((race, index) => (
          <tr key={index}>
            <td>{race.track.track_name}</td>
            <td>{race.start_position}</td>
            <td>{race.finish_position}</td>
            <td>{race.laps}</td>
            <td>{race.strength_of_field}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Stats