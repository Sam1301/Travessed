import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import History from '../src/components/Slider';
import Countries from '../src/components/Countries';
import LoadingSpinner from '../src/components/Loading';
import Link from 'next/link';
import { Input } from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const InputExampleInput = () => <Input placeholder='Search...' />
const useStyles2 = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      padding: 24,
    },
    margin: {
      height: theme.spacing(3),
    },
    progress: {
        margin: theme.spacing(2),
    }
  }));


  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);

class Home extends React.Component {
    render() {
        const classes = useStyles;
        const classes2 = useStyles2;

        return (
            <div>
                <div style={{ width: '100%', height: 800, backgroundSize: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: "url('https://resources.depaul.edu/student-success/explore-your-purpose/PublishingImages/nature-sky-sunset-man-1600w.jpg')"}}>
                    <Typography gutterBottom style={{ color: '#ffffff', fontSize: 80}}>Inspire Me!</Typography>
                </div>

                <div style={{  display: 'flex', flexDirection: 'row'}}>
                    <Paper className={classes.root} style={{width: '15%', padding: 24}}>
                        <Typography gutterBottom>History and Landmarks</Typography>
                        <History valueLabelDisplay="auto" aria-label="Pretto slider" defaultValue={20} style={{color: '#f4730f'}} />
                    </Paper>

                    <Paper className={classes.root} style={{width: '15%', padding: 24}}>
                        <Typography gutterBottom>Entertainment</Typography>
                        <History valueLabelDisplay="auto" aria-label="Pretto slider" defaultValue={20} style={{color: '#ffb428'}} />
                    </Paper>

                    <Paper className={classes.root} style={{width: '15%', padding: 24}}>
                        <Typography gutterBottom>Nature and Adventure</Typography>
                        <History valueLabelDisplay="auto" aria-label="Pretto slider" defaultValue={20} style={{color: '#368268'}} />
                    </Paper>

                    <Paper className={classes.root} style={{width: '15%', padding: 24}}>
                        <Typography gutterBottom>Relaxation</Typography>
                        <History valueLabelDisplay="auto" aria-label="Pretto slider" defaultValue={20} style={{color: '#6898bf'}} />
                    </Paper>

                    <Paper className={classes.root} style={{width: '15%', padding: 24}}>
                        <Typography gutterBottom>Shopping</Typography>
                        <History valueLabelDisplay="auto" aria-label="Pretto slider" defaultValue={20} style={{color: '#2c7a9c'}} />
                    </Paper>

                    <Paper className={classes.root} style={{width: '15%', padding: 24}}>
                        <Typography gutterBottom>Food and Drink</Typography>
                        <History valueLabelDisplay="auto" aria-label="Pretto slider" defaultValue={20} style={{color: '#1f326c'}} />
                    </Paper>
                </div>

                
                
                <div style={{  display: 'flex', flexDirection: 'column', padding: 25}}>
                    <CssTextField className={classes.margin} id="custom-css-standard-input" label="Custom CSS" />

                    <CssTextField className={classes.margin} id="custom-css-standard-input" label="Custom CSS" />

                    <CssTextField className={classes.margin} id="custom-css-standard-input" label="Custom CSS" />

                    <CssTextField className={classes.margin} id="custom-css-standard-input" label="Custom CSS" />
                </div>
                

                <Link href='/inspire_next'>
                    <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                        Create itinerary
                    </Button>
                </Link>

            </div>
        );
    }
    
  }
  
  export default Home;