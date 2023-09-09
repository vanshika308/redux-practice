import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authenticationAction } from '../store';

const Header = () => {

  const dispatch = useDispatch();

  const authentication = useSelector(state=> state.auth.isAuthenticated);
  
  const logoutHandler=()=>{
    dispatch(authenticationAction.logout())
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authentication && (<nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>)}
    </header>
  );
};

export default Header;
