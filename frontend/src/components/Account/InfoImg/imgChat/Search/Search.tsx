import { useState } from 'react';
import { useAppSelector } from '../../../../../types/Apphooks';
import { allUsersType } from '../../../../../types/userInit';
import useSearch from './functional/useSearch';
import SearchIcon from './icons/SearchIcon';
import './Search.scss';
import ShowPeople from './showPeople/ShowPeople';

export default function Search() {
  const allUsers = useAppSelector((state) => state.allUsers.allUsers);
  const [showPeople, setShowPeople] = useState(false);
  const [showUsers, setShowUsers] = useState(allUsers);

  useSearch();

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Find a person"
        onFocus={() => setShowPeople(true)}
        onBlur={() => setShowPeople(false)}
        onChange={(e) => {
          setShowUsers(() => [
            ...allUsers.filter((user) =>
              user.fullName.toLowerCase().includes(e.target.value.toLowerCase())
            ),
          ]);
        }}
      />
      <div className="searchIcon">
        <SearchIcon />
      </div>
      {showPeople && <ShowPeople showUsers={showUsers} />}
    </div>
  );
}
