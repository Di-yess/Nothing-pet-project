import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { initState } from '../../../types/userInit';
import './InfoImg.scss';

export default function InfoImg({ user }: { user: initState }) {
  const accountId = useParams().id;
  const [newImg, setNewImg] = useState<File>();

  return (
    <div className="infoImg">
      <div className="userImg">
        <img
          src={
            user.avatar.link || accountId ? '../imgs/user.png' : 'imgs/user.png'
          }
          alt="userIcon"
        />
      </div>
      {newImg && <img src={URL.createObjectURL(newImg)} id="newImg" alt="not found" />}
      <input
        type="file"
        id="inputImg"
        name="img"
        accept="image/jpeg, image/png, image/jpg"
        onChange={(e) => {
          if (e.target.files) {
            console.log(e.target.files[0]);
            setNewImg(e.target.files[0]);
          }
        }}
        disabled
      />
      <div className="userName">{user.fullName}</div>
      <div className="userProfession">{user.profession}</div>
      <div className="userLocation">{user.adress}</div>
    </div>
  );
}
