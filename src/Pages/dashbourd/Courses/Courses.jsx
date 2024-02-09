import React, { useEffect } from 'react'
import './courses.css'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {getCoursesFromServer} from '../../../Redux/store/courses'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { deletCourseAcyion } from '../../../Redux/store/courses';
import Swal from 'sweetalert2'
import Loader from "../../../Components/loader/loader";


export default function Courses() {


  const dispatch = useDispatch()
  
 
  useEffect(()=> {
    dispatch(getCoursesFromServer('https://redux-cms.iran.liara.run/api/courses/'))
  },[])

  const courseDelete = (id) => {
    Swal.fire({
      title: "Are you sure to remove course?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deletCourseAcyion(`https://redux-cms.iran.liara.run/api/courses/${id}`))
      }
    });
  }

  const {data, loading, error} = useSelector(state => state.courses)

  const columns = [

    {
      field: 'title',
      headerName: 'title',
      width: 150,
      renderCell: (params) => {
        return (
          <Link to='/' className='link'>
            <div className='userListUser'>
              {params.row.title}
            </div>
          </Link>
        )
      }
    },
    {
      field: 'price',
      headerName: 'price',
      width: 200,
      renderCell: (user) => {
        return (
          <Link to='/' className='link'>
            <div className='userListUser'>
              {user.row.price}
            </div>
          </Link>
        )
      }
    },

    {
      field: 'category',
      headerName: 'category',
      width: 200,
      renderCell: (user) => {
        return (
          <Link to='/' className='link'>
            <div className='userListUser'>
              {user.row.category}
            </div>
          </Link>
        )
      }
    } , 

    {
      field: 'registersCount',
      headerName: 'registersCount',
      width: 160,
      renderCell:(param) => {
        return(
          <Link to='/' className='link'>
            <div className='userListUser'>
              {param.row.registersCount}
            </div>
          </Link>
        )
      }
    }, 

    {
      field: 'discount',
      headerName: 'discount',
      width: 150,
      renderCell:(param) => {
        return(
          <Link to='/' className='link'>
            <div className='userListUser'>
              {param.row.discount}
            </div>
          </Link>
        )
      }
    }, 

    {
      field: 'desc',
      headerName: 'desc',
      width: 150,
      renderCell:(param) => {
        return(
          <Link to='/' className='link'>
            <div className='userListUser'>
              {param.row.desc}
            </div>
          </Link>
        )
      }
    }, 

    {
      field : 'action' , 
      headerName : 'Action' , 
      width: 150,
      renderCell : (params) => {
        return(
        <>
        <Link to={`/courses/${params.row._id}`} className='link'>
           <button className='userListEdit'>Edit</button>
        </Link> 
        <DeleteOutlineIcon 
         className="userListDelete"
         onClick={() => courseDelete(params.row._id)}
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
          title:{error},
          icon:'error',
          showCancelButton : true
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
