import { useState } from 'react';
import { useAppSelector } from '../../../../../types/Apphooks';
import SearchIcon from './icons/SearchIcon';
import InputSearch from './InputSearch/InputSearch';
import './Search.scss';
import ShowPeople from './showPeople/ShowPeople';

export default function Search() {
  const allUsers = useAppSelector((state) => state.allUsers.allUsers);
  const [showPeople, setShowPeople] = useState(false);
  const [showUsers, setShowUsers] = useState(allUsers);

  return (
    <div className="search">
      <InputSearch setShowPeople={setShowPeople} setShowUsers={setShowUsers} />
      <SearchIcon />
      {showPeople && <ShowPeople showUsers={showUsers} />}
    </div>
  );
}