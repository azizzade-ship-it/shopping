import React,{useEffect,useState} from "react"
import Box from '@mui/material/Box';
import LinearProgress ,{ linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

function Popularity({value}){
    
    const [progress, setProgress] = React.useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 68) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, value);
        });
      }, 500);
      return () => {
        clearInterval(timer);
      };
    }, []);
    return(
        <>
            <Box sx={{ width: '90%' }}>
                <BorderLinearProgress variant="determinate" color="success" value={progress}/>
            </Box>
            <span>{value}%</span>
        </>
    )
}
export default Popularity