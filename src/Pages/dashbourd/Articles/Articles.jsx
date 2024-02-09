import React, { useEffect } from 'react'
import './Articles.css'
import {useDispatch , useSelector} from 'react-redux' 
import { getArticlesFromServer } from '../../../Redux/store/articles'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import Swal from 'sweetalert2'
import {delteArticleAction}  from '../../../Redux/store/articles'
import Loader from '../../../Components/loader/loader'
 

export default function Articles() {


  const dispatch = useDispatch()
  const {data , loading , error} = useSelector(state => state.articles)

  useEffect(() => {
    dispatch(getArticlesFromServer('https://redux-cms.iran.liara.run/api/articles/'))
  } , [])

  const articleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to remove article?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(delteArticleAction(`https://redux-cms.iran.liara.run/api/articles/${id}`))
      }
    });
  }

  const columns = [

    {
      field: 'title',
      headerName: 'title',
      width: 300,
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
      field: 'category',
      headerName: 'category',
      width: 300,
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
      field: 'desc',
      headerName: 'desc',
      width: 450,
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
      width: 100,
      renderCell : (params) => {
        return(
        <>
        <Link to={`/articles/${params.row._id}`} className='link'>
           <button className='userListEdit'>Edit</button>
        </Link> 
        <DeleteOutlineIcon 
         className="userListDelete"
         onClick={() => articleDelete(params.row._id)}
        />
        </>
        )
      }
    }

  ]

    const getRowId = (row) => row._id;

    {
      loading && (
        <Loader />
      )
    }

    {
      error && (
        Swal.fire({
          icon: "error",
          title: {error},
          showConfirmButton : true
        })
      )
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
