import { memo } from 'react';
import { useAppSelector } from '../../../../../../types/Apphooks';
import { allUsersType } from '../../../../../../types/userInit';
type inputSearchType = {
  setShowPeople: React.Dispatch<React.SetStateAction<boolean>>;
  setShowUsers: React.Dispatch<React.SetStateAction<allUsersType[]>>;
  groupSearch: boolean;
};

export default memo(function InputSearch({
  setShowPeople,
  setShowUsers,
  groupSearch,
}: inputSearchType) {
  const loggedUserId = useAppSelector((state) => state.user.id);
  const allUsers = useAppSelector((state) => state.allUsers.allUsers).filter(
    (user) => user.id !== loggedUserId
  );
  const chosenGroupUsers = useAppSelector(
    (state) => state.groupChat.users
  ).filter((user) => user.chosen).length;
  return (
    <>
      {!groupSearch ? (
        <input
          type="text"
          placeholder="Find a person"
          onFocus={() => setShowPeople(() => true)}
          onBlur={() => {
            setTimeout(() => {
              setShowPeople(() => false);
            }, 100);
          }}
          onChange={(e) => {
            setShowUsers(() => [
              ...allUsers
                .filter((user) =>
                  user.fullName
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                )
                .slice(0, 10),
            ]);
          }}
        />
      ) : (
        <input
          type="text"
          placeholder={chosenGroupUsers.toString() + ' users'}
          onFocus={() => setShowPeople(() => true)}
          onBlur={() => {
            setTimeout(() => {
              setShowPeople(() => false);
            }, 100);
          }}
          onChange={(e) => {
            
            setShowUsers(() => [
              ...allUsers
                .filter((user) =>
                  user.fullName
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                )
                .slice(0, 10),
            ]);
          }}
        />
      )}
    </>
  );
});
