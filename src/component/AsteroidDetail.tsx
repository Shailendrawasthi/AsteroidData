import React  from 'react';
import { Link,useLocation} from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';


  const AsteriodDetail =()=> {
     
    const {state}:any=useLocation();
    const data = state?.data;
    // const [name,setName]=useState<any>('');
    console.log(state);
    // useEffect(() => {
    // },[]);
    
    return (
        <div>
            <Container sx={{ minWidth: 300 }}>
                <Box 
                    style= {{ backgroundColor:"lightgrey",
                        display: 'flex',
                        flexDirection:'column',
                        alignItems: 'center',

                    }}>
                    <Typography variant='h4' data-testid='para'>Asteroid Data</Typography>
                    <div style={{ margin:"10px"}} >
                        <strong>Name :-</strong> 
                        {data?.name}
                    </div>
                    <div style={{ margin:"10px"}}>
                        <strong>Nasa Jpl Url :-</strong> 
                        {data?.nasa_jpl_url}
                    </div>
                    <div  style={{ margin:"10px"}}>
                        <strong>Is Potentially Hazardous Asteroid :-</strong>
                        {data.is_potentially_hazardous_asteroid ? 'true' : 'false'}
                    </div>
                    <Link  style={{textDecoration:'none'}} to= "/">
                        <Button 
                        style={{ margin:"10px"}}
                            variant="contained" id='back'>
                         Back
                        </Button>
                    </Link>
                </Box>
            </Container>
        </div>
    );
}

export default AsteriodDetail;
