import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () =>(
    <Stack direction= 'row' alignItems= 'center' p={2} 
    sx={{position:'sticky', background:'#F8F8FF', top:0, justifyContent:'space-between',  boxShadow: "0 0px 5px 0 rgba(0, 0, 0, 0.1)"}}>
      <Link to= "/" style={{display:'flex', alignItems:'center'}}>
         <img src={logo} alt="logo" height={45} width={125}/>
      </Link>
      <SearchBar/>
    </Stack>
  )


export default Navbar;