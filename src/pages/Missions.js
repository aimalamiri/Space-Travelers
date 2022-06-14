import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { missionsListAction } from '../redux/missions/missions';
import Mission from '../components/Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(missionsListAction());
  }, []);

  return (
    <div>
      <div>Hello</div>
      {missions.map((mission) => (
        <Mission key={mission.mission_id} mission={mission} />
      ))}
    </div>
  );
};

export default Missions;
