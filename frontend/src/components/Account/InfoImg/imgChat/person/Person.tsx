import './Person.scss';

export default function Person() {
  return (
    <div className="person">
      <div className="message-counter">
        <div className="message-counter-number">5</div>
      </div>
      <div className="message-time">00:00AM</div>
      <div className="personInfo">
        <div className="personImg">{/* <img src="" alt="img" /> */}</div>
        <div className="person-name-message">
          <div className="person-name">Name</div>
          <div className="person-message">Lorem ipsum lore...</div>
        </div>
      </div>
    </div>
  );
}
