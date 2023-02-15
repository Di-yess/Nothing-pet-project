import { Link } from 'react-router-dom';
import 'styles/Error.scss';
import { useAppSelector } from 'types/Apphooks';

export default function Error() {
  const serverError = useAppSelector((state) => state.user.error);
  const checkError = serverError === 'Network Error';

  return (
    <>
      {!checkError ? (
        <div className="errorPage">
          <div>Error 404</div>
          <div>Seems you`ve lost in Nothing</div>
          <div>
            <Link to="/">Go back home</Link>
          </div>
        </div>
      ) : (
        <div className="errorPage">
          <div>Error 500</div>
          <div>We are currenty off. Sorry.</div>
          {/* <div>
            <Link to="/">Go back home</Link>
          </div> */}
        </div>
      )}
    </>
  );
}
