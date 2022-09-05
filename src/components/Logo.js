/* eslint-disable global-require */
import { Link } from 'react-router-dom';




const Logo =  () => (
    <div>
      <Link to="/">
      <img style={{height: '5rem'}} src={require('../Assets/nupatlogo.png')}  alt="logo" />
      </Link>
    </div>
  )


export default Logo;
