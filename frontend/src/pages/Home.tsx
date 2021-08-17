import React, {useState, useEffect} from 'react';
import http from '../config/http';
import { Grid, TextField, Button } from '@material-ui/core';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    centralized: {
      margin: '0 auto',
      width: '80%',
    },
    searchContainer: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    inputSearch: {
      width: '100%',
    },


  }),
);

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Nome', width: 150 },
  { field: 'cpf', headerName: 'CPF', width: 150, },
  { field: 'email', headerName: 'E-mail', width: 200, },
];

interface Student {
  name: string;
  email: string;
  cpf: string;
}

function Home() {
  const classes = useStyles();

  const [state, setState] = useState<{
    students: Student[],
    searchFilter: string,
    loading: boolean
  }>({
    students: [],
    searchFilter: '',
    loading: true
  })

  useEffect(()=>{
    if(state.loading){
      http.get(`/getStudents${state.searchFilter ? '?search=' + state.searchFilter : ''}`).then((response) => {
          setState({
            ...state,
            students: response.data,
            loading: false
          })
      })
    }

  },[state, state.loading])

  return (
    <div className="App">
    
      <Grid className={classes.centralized} container spacing={3}>

        <Grid className={classes.searchContainer} item xs={12}>
          <TextField
            label="Pesquisa Avançada" 
            variant="outlined"
            className={classes.inputSearch} 
            value={state.searchFilter}
            onChange={(e) => setState({...state, searchFilter: e.target.value})}
          />
          <Button variant="contained" color="primary" onClick={() => setState({...state, loading: true})}>
            Pesquisar
          </Button>
        </Grid>

        <Grid item xs={12}>
          {state.loading ? 'Carregado...' : 
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={state.students}
                columns={columns}
                checkboxSelection
                disableSelectionOnClick
                rowsPerPageOptions={[]}
              />
            </div>
          }
          
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
