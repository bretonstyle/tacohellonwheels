import data from './testdata.json';
console.log(data);
const Stats = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Track</th>
          <th>Start Position</th>
          <th>End Position</th>
        </tr>
      </thead>
      <tbody>
        {data.races.map((race, index) => (
          <tr key={index}>
            <td>{race.track.track_name}</td>
            <td>{race.start_position}</td>
            <td>{race.finish_position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Stats