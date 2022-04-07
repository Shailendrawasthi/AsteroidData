import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React,{useState ,FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
 

// interface IState {
//   id: string
//   loading:boolean
// }
const Asteroid:FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [randomDatas ,setRandomDatas] =useState<any>();
  let navigate = useNavigate();
  
  let API_KEY = 'EIacThahaJ8nEqAoh5BrfACpzwiIwUxU3EfUckdN';
  const [id,setId]=useState<string>(""); 

    const [data,setData]=useState<any>([]);

  const randomData = async() => {
    setLoading(true);
    const response=await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`)

    let data=response.data.near_earth_objects;
   console.log(data,"data");
      const res = response.data.near_earth_objects
      [Math.floor(Math.random()*response.data.near_earth_objects.length)];
      setData(res);
     
      navigate('/asteroiddetails', {state:{data:res}});
  }


      // console.log(result);
       
    // }).catch(err => {
    //   // console.log(err);
    //   setLoading(false);
    // });
  // }
  const handleSubmit =async() => {
    const response=await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`);
    setRandomDatas(response.data); 
    console.log(response.data);
    navigate('/asteroiddetails', {state:{data:response.data}});
  }

  return (

    <Container maxWidth="xs"
      sx={{ marginTop: '100px', height: '400px', border: '1px solid black', bgcolor: "rgb(233, 224, 224)" }}
    >
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "50px" }}>

        <Typography variant="h4" id='asteroid' gutterBottom>Asteroid</Typography>
        <TextField sx={{ margin: "25px" }} label='Enter Asteroid ID'
          value={id}
          data-testid="input"
          onChange={(e) => setId(e.target.value)}
        ></TextField>
        <Button
          id="submit"
          data-testid='submit'
          style={{ padding: 10, paddingRight: '80px', paddingLeft: '80px' }}
          variant="contained"
          onClick={() => handleSubmit()}
          disabled={id === ''}>


          Submit</Button>

        <Button id="random-asteroid"
        
          style={{ marginTop: 25, marginBottom: 25, padding: 10, paddingRight: '40px', paddingLeft: '40px' }}
          onClick={randomData}
          title="Random"
          variant="contained">Random Asteroid</Button>
         
        {loading ?
            <CircularProgress /> :
          null}
          
      </Box>
    </Container>
  )
}
export default Asteroid;


// https://api.nasa.gov/planetary/apod?api_key=EIacThahaJ8nEqAoh5BrfACpzwiIwUxU3EfUckdN

// key-:EIacThahaJ8nEqAoh5BrfACpzwiIwUxU3EfUckdN
