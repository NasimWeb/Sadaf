import React, { useEffect , useState } from 'react'
import './SingleCategory.css'
import Loader from '../../../Components/loader/loader';
import Swal from 'sweetalert2'
import {  useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {getCategoriesFromServer} from '../../../Redux/store/categories' 



export default function SingleCategory() {

  const categoryId = useParams()
  const dispatch = useDispatch()

  
  useEffect(()=>{
         dispatch(getCategoriesFromServer('https://redux-cms.iran.liara.run/api/categories/'))
  },[])



  const {data, loading, error} = useSelector(state => state.Categories)

  const mainCategory =  data.find(category => {
   return category._id === categoryId.categoryId
  })

   const [titleCategory , setCategoryTitle] = useState(localStorage.getItem('titleCategory') || mainCategory.title)

   useEffect(()=>{
    if(mainCategory){
      setCategoryTitle(mainCategory.title)
    }
   },[])


   useEffect(()=>{
    localStorage.setItem('titleCategory',titleCategory)
   },[titleCategory])


   {
    if(loading) {
      <Loader />
    }
   }


   {
    if(error) {
      Swal.fire({
        icon: 'error',
        title: {error},
        showConfirmButton : true
      })
    }
   }

  return (
    <div className='product'>

    <div className='productTitleContainer'>
        <h1 className='productTitle'>Categories</h1>
    </div>

    <div className="productTop">
        {/* <div className="productTopLeft">
            
        </div> */}

        <div className="productTopRight">
            <div className="productInfoTop items-end gap-5 flex-wrap">
                <div className="productInfoItem">
              <div class="flex justify-center gap-3 flex-wrap max-w-full">
                <label htmlFor="username" className="productInfoKey">
                  title
                </label>
                <input
                  type="text"
                  className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-Indigo-300 text-sm rounded-lg focus:ring-indigo-500  focus:border-indigo-500 block w-64 p-2.5 checked:bg-emerald-500"
                  placeholder="username"
                  value={titleCategory}
                  onChange={(e) => setCategoryTitle(e.target.value)}
                />
              </div>
            </div>
            <button class="button mt-5">edit</button>
            </div>

            <div className="productInfoBottom" style={{marginLeft : '43px'}}>
           
             
             
            </div>
        </div>
    </div>

    <div className="productBottom">
        <form className="productForm">
            <div className='productFormLeft'>
              
               
            </div>

            <div className='productFormRight'>
                {/* <div className='productUploader'>
                    <img src={mainProduct.avatar} alt="profile photo" className='productUploaderImg' />
                    <label>
                        <PublishIcon />
                    </label>
                    <input type="file" style={{ display: "none" }} />
                </div>
                <button className='productButton'>Upload (Edit)</button> */}
            </div>
        </form>
    </div>
</div>
  )
}
