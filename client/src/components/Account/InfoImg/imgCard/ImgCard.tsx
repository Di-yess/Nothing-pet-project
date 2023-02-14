import { useState } from 'react';
import { initState } from 'types/userInit';
import { API } from '../../../../constants';
import CameraIcon from './Camera/CameraIcon';

export default function ImgCard({ user }: { user: initState }) {
  const [newImg, setNewImg] = useState<File>();

  return (
    <div className="infoImg">
      <div className="userImg">
        <img
          src={
            user.avatar.link
              ? `${API}/avatars/${user.avatar.link}.jpg`
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
      <CameraIcon />
      <div className="userName">{user.fullName || 'Your name'}</div>
      <div className="userProfession">{user.profession || 'Profession'}</div>
      <div className="userLocation">{user.adress || 'Address'}</div>
    </div>
  );
}
