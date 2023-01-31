import { allUsersType } from '../../../../../../types/userInit';
import './ShowPeople.scss';
import ShowPerson from './ShowPerson/ShowPerson';

export default function ShowPeople({
  showUsers,
}: {
  showUsers: allUsersType[];
}) {
  return (
    <div className="showPeople">
      {showUsers.map((user) => (
        <ShowPerson user={user} key={user.id} />
      ))}
    </div>
  );
}
