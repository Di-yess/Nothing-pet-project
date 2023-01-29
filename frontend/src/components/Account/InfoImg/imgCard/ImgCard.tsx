import React, { useState } from 'react';
import { initState } from '../../../../types/userInit';

export default function ImgCard({ user }: { user: initState }) {
  const [newImg, setNewImg] = useState<File>();

  return (
    <div className="infoImg">
      <div className="userImg">
        <img
          src={
            user.avatar.link
              ? `http://localhost:5005/avatars/${user.avatar.link}.jpg`
              : '../imgs/user.png'
          }
          alt="userIcon"
        />
      </div>
      {newImg && (
        <img src={URL.createObjectURL(newImg)} id="newImg" alt="not found" />
      )}
      <input
        type="file"
        id="inputImg"
        name="img"
        accept="image/jpeg, image/png, image/jpg"
        onChange={(e) => {
          if (e.target.files) {
            setNewImg(e.target.files[0]);
          }
        }}
        disabled
      />
      <div className="userName">{user.fullName}</div>
      <div className="userProfession">{user.profession || ' '}</div>
      <div className="userLocation">{user.adress || ' '}</div>
    </div>
  );
}
