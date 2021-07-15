import logo from './logo.svg';
import './App.css';
import {Button, Typography, Container, Checkbox, TextField, Paper, Grid, AppBar, Toolbar, IconButton} from '@material-ui/core'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import MenuIcon from '@material-ui/icons/Menu'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import 'fontsource-roboto';

import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {orange, green} from '@material-ui/core/colors'


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: '15',
    marginBottom: '15',
    color: 'white',
    padding: "0 3px"
  }
})


function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

const theme = createMuiTheme({
  typography : {
    h2 : {
      fontSize: 36,
      marginBottom: 15, 
    }
  },
  palette : {
    primary: {
      main : orange[500],
    },
    secondary : {
      main : green[500]
    }
  }
})

function CheckboxExample(){
  const [checked, setChecked] = React.useState(true)
  return (
    <div>
      <FormControlLabel
      control={<Checkbox 
        checked={checked}
        icon={<DeleteIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e)=>setChecked(e.target.checked)}
        inputProps={{
          'aria-label' : 'secondary checkbox'
        }}
        color="primary"
        />}
        label="Testing Checkbox"
      />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
    <div className="App"> 
      <header className="App-header">
        <AppBar color="secondary">
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">MUI Themeing</Typography>
            <Button>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Typography variant="h2" component="div">Welcome to MUI</Typography>
        <Typography variant="body1">Learn how to use Material UI</Typography>
      <ButtonStyled />
      <Grid container spacing={5} justify="center">
          <Grid item xs={3}>
            <Paper style={{height: 75, width: '100%'}}/>
          </Grid>
          <Grid item xs={3}>
            <Paper style={{height: 75, width: '100%'}}/>
          </Grid>
          <Grid item xs={3}>
            <Paper style={{height: 75, width: '100%'}}/>
          </Grid>
        </Grid>
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
              <Button 
            startIcon={<SaveIcon />}
            >Save</Button>
            <Button 

              startIcon={<DeleteIcon />}
              >Discard
            </Button>
        </ButtonGroup>
      
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
