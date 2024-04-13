import data from './testdata.json';

const Stats = () => {
  return (
    <div>
      <h1>Track: {data.races[0].track.track_name}</h1>
      <h1>Start Position: {data.races[0].start_position}</h1>
      <h1>End Position: {data.races[0].finish_position}</h1>
    </div>
  );
};
export default Stats