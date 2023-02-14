import { Link } from 'react-router-dom';
import 'styles/Error.scss';

export default function Error() {
  return (
    <div className="errorPage">
      <div>Error 404</div>
      <div>Seems you`ve lost in Nothing</div>
      <div>
        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
}
