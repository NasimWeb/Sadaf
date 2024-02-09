import {React , useState , useEffect, useContext} from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import './Users.css'
import {useDispatch, useSelector} from 'react-redux'
import { getUsersFromServer } from '../../../Redux/store/users';
import { deletUserAcion } from '../../../Redux/store/users';
import Swal from 'sweetalert2'
import Loader from '../../../Components/loader/loader'
import { darkmoodContext } from '../../../Contexts/darkmood';






export default function Users() {
  


  const dispatch = useDispatch()
  const {data, loading, error} = useSelector(state => state.users)
  const {darkMode , setDarkMode} = useContext(darkmoodContext)

 
  useEffect(()=>{
    dispatch(getUsersFromServer('https://redux-cms.iran.liara.run/api/users/'))
  },[])
  
  const userDelete = (userId) => {
    Swal.fire({
      title: "Are you sure to remove user?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deletUserAcion(`https://redux-cms.iran.liara.run/api/users/${userId}`))
      }
    });
  }

 

  const showInfo = (id) => {
   const  mainUser = data.filter(user => user._id === id)

     Swal.fire({
      icon: 'info',
      title: `${mainUser[0].username}'s Information`,
      html: `<div style="display:flex, flex-direction:column,">
      Email: <a href='mainto:${mainUser[0].email}' style="color:#000; display:flex; justify-content:center;"> ${mainUser[0].email}</a>
      <div style="color:#000; display:flex; justify-content:center;">Name: ${mainUser[0].firstname}</div>
      <div style="color:#000; display:flex; justify-content:center;">Family: ${mainUser[0].lastname}</div>
      <div style="color:#000; display:flex; justify-content:center;">city: ${mainUser[0].city}</div>
      <div style="color:#000; display:flex; justify-content:center;">age: ${mainUser[0].age}</div>
      </div> `,
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#F0F0FF",
     })
  }


  const columns = [
    {
      field: 'username',
      headerName: 'username',
      width: 120,
      renderCell: (params) => {
        return (
          <Link to='/' className={`link`}>
            <div className={`userListUser`}>
              {/* <img className='userListImg' src={params.row.image} /> */}
              {params.row.username}
            </div>
          </Link>
        )
      }
    },
    {
      field: 'firstname',
      headerName: 'firstname',
      width: 120,
      renderCell: (params) => {
        return (
          <Link to='/' className='link'>
            <div className='userListUser'>
              {/* <img className='userListImg' src={params.row.image} /> */}
              {params.row.firstname}
            </div>
          </Link>
        )
      }
    },
    {
      field: 'lastname',
      headerName: 'lastname',
      width: 150,
      renderCell: (params) => {
        return (
          <Link to='/' className='link'>
            <div className='userListUser'>
              {/* <img className='userListImg' src={params.row.image} /> */}
              {params.row.lastname}
            </div>
          </Link>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      renderCell: (user) => {
        return (
          <Link to='/' className='link'>
            <div className='userListUser'>
              {user.row.email}
            </div>
          </Link>
        )
      }
    },

    {
      field: 'city',
      headerName: 'city',
      width: 200,
      renderCell: (user) => {
        return (
          <Link to='/' className='link'>
            <div className='userListUser'>
              {user.row.city}
            </div>
          </Link>
        )
      }
    } , 
    {
      field: 'age',
      headerName: 'age',
      width: 160,
      renderCell:(param) => {
        return(
          <Link to='/' className='link'>
            <div className='userListUser'>
              {param.row.age}
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
        <Link to={`/users/${params.row._id}`} className='link'>
           <button className='userListEdit'>Edit</button>
        </Link> 
        
           <button className='userListEdit' onClick={ () =>showInfo(params.row._id)}>Info</button>
        
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

      loading && (
        <Loader />
      )
      
    }

    {
      error && (
        
         Swal.fire({
          icon: "error",
          title: `${error}`,
          showConfirmButton: true,
         })
     
      )
    }

    

  return (

    <div style={{  width: '100%', overflowX: 'auto' }}  className='userList' >
        {
          
          data ? (
            <DataGrid
              rows={data}
              getRowId={getRowId}
              columns={columns}
              disableSelectionOnClick
              pageSize={4}
              checkboxSelection
              
            />
          
          ) : null
        }


      </div>
   
   
  
  )
}
