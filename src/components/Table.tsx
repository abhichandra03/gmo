import { Box } from '@mui/material';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import {useState, useEffect} from 'react';

interface RowData {
  userID: number,
  id:number,
  title:string,
  body:string
}

async function getData  () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!res.ok){
          throw new Error("Failed to fetch data")
        }
        return res.json();
      }
      
      
      
      
      
      
      const Table = () => {
        const [rows, setRows] = useState<RowData[]>([])
        
        useEffect(() => {
          (async() =>{
            const data = await getData()
            setRows(data)
          })()
          
        },[])
        
        const columns: GridColDef[] = [
          {field:'id', headerName: "id", width:150},  
          {field:'title', headerName: "Title", width:300},
          {field:'body', headerName: "Body", width:600}
        ]

  return (
    <Box sx={{width: screen, m:2}}>
      <DataGrid
        sx = {{m:4, p:2,  boxShadow: 20,}} 
        columns={columns}
        rows={rows}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default Table