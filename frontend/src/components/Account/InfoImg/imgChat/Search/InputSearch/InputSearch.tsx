import { useAppSelector } from '../../../../../../types/Apphooks';
import { allUsersType } from '../../../../../../types/userInit';
type inputSearchType = {
  setShowPeople: React.Dispatch<React.SetStateAction<boolean>>;
  setShowUsers: React.Dispatch<React.SetStateAction<allUsersType[]>>;
};

export default function InputSearch({
  setShowPeople,
  setShowUsers,
}: inputSearchType) {
  const allUsers = useAppSelector((state) => state.allUsers.allUsers);
  return (
    <input
      type="text"
      placeholder="Find a person"
      onFocus={() => setShowPeople(() => true)}
      onBlur={() => setShowPeople(() => false)}
      onChange={(e) => {
        setShowUsers(() => [
          ...allUsers
            .filter((user) =>
              user.fullName.toLowerCase().includes(e.target.value.toLowerCase())
            )
            .slice(0, 10),
        ]);
      }}
    />
  );
}
