import React, { useEffect } from 'react'
import './Categories.css'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesFromServer } from '../../../Redux/store/categories';
import Swal from 'sweetalert2'
import Loader from '../../../Components/loader/loader'

export default function Categories() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCategoriesFromServer(`https://redux-cms.iran.liara.run/api/categories/`))
    },[])


    const {data, loading, error} = useSelector(state => state.Categories)
    
    console.log(data);

    const columns = [
        {
          field: "id",
          headerName: 'ID',
          width: 100,
        },
       
    
      
        {
          field: 'title',
          headerName: 'title',
          width: 160,
          renderCell:(param) => {
            return(
              <Link to='/' className='link'>
                <div className='userListUser'>
                  {param.row.title}
                </div>
              </Link>
            )
          }
        }, 
    
        {
          field: 'created at',
          headerName: 'created at',
          width: 160,
          renderCell:(param) => {
            return(
              <Link to='/' className='link'>
                <div className='userListUser'>
                  2023.4.48
                </div>
              </Link>
            )
          }
        }, 


        {
          field: 'updated at',
          headerName: 'updated at',
          width: 160,
          renderCell:(param) => {
            return(
              <Link to='/' className='link'>
                <div className='userListUser'>
                  2023.4.47
                </div>
              </Link>
            )
          }
        }, 
        
    
        {
          field : 'action' , 
          headerName : 'Action' , 
          width: 200,
          renderCell : (params) => {
            return(
            <>
            <Link to={`/categories/${params.row._id}`} className='link'>
               <button className='userListEdit'>Edit</button>
            </Link> 
                        
            <DeleteOutlineIcon 
             className="userListDelete"
             onClick={() => userDelete(params.row._id)}
            />
            </>
            )
          }
        }
    
      ]
    
      
        const getRowId = (row) => row._id;


        {
          if(loading) {
            <Loader />
          }
        }

        {
          if(error) {
            Swal.fire({
              icon: "error",
              title: {error},
              showConfirmButton : true
            })
          }
        }

  return (
    <div  className='userList' style={{ width: '100%', overflowX: 'auto' }}>
    <DataGrid
          rows={data}
          getRowId={getRowId}
          columns={columns}
          disableSelectionOnClick
          pageSize={4}
          checkboxSelection
        />
        </div>
  )
}
