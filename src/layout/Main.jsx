
import {Outlet} from 'react-router-dom'
import Navbar from '../shared/Navbar/Navbar';

const Main = () => {
  return (
    <div className='mx-2 md:mx-4 lg:mx-8 my-2 md:my-4 lg:my-8'>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default Main;