import React from 'react';
import DeleteIcon from '../functional/deleteIcon';

export default function DeleteBtn({
  setTellBtn,
}: {
  setTellBtn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className="feedFormDelete"
      onClick={() => {
        setTellBtn((prev) => !prev);
        document.querySelector('.feedBacks')?.classList.remove('blur');
      }}
    >
      <DeleteIcon />
    </div>
  );
}
