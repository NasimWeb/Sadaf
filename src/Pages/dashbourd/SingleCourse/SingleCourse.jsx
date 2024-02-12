import React, { useEffect, useState } from "react";
import "./SingleCourse.css";
import Loader from "../../../Components/loader/loader";
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getCoursesFromServer} from '../../../Redux/store/courses'
import { getCategoriesFromServer } from "../../../Redux/store/categories";

export default function SingleCourse() {

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getCoursesFromServer("https://redux-cms.iran.liara.run/api/courses/"));
    dispatch(getCategoriesFromServer('https://redux-cms.iran.liara.run/api/categories/'));
  }, []);

  
  const { data, loading, error } = useSelector((state) => state.courses);
  const categories = useSelector(state => state.Categories.data);

  

  const mainCourse = data.find((course) => {
    return course._id === params.courseId;
  });

 

  const [courseTitle, setCourseTitle] = useState(localStorage.getItem('courseTitle') || (mainCourse.title));
  const [coursePrice, setCoursePrice] = useState(localStorage.getItem('coursePrice') || (mainCourse.price));
  const [courseCategory, setCourseCategory] = useState(localStorage.getItem('courseCategory') || (mainCourse.category));
  const [discountCourse, setDiscountCourse] = useState(localStorage.getItem('discountCourse') || (mainCourse.discount));
  const [desc, setDissc] = useState(localStorage.getItem('courseDesc') || (mainCourse.desc));
  
  

 

  useEffect(() => {
     if(mainCourse) {
      setCourseTitle(mainCourse.title),
      setCoursePrice(mainCourse.price),
      setCourseCategory(mainCourse.category),
      setDiscountCourse(mainCourse.discount),
      setDissc(mainCourse.desc)
     }
  },[mainCourse])

  

  useEffect(() => {
    localStorage.setItem('courseTitle',courseTitle),
    localStorage.setItem('coursePrice',coursePrice),
    localStorage.setItem('courseCategory',courseCategory),
    localStorage.setItem('discountCourse',discountCourse),
    localStorage.setItem('courseDesc',desc)
  },[courseTitle,coursePrice,courseCategory,discountCourse,desc])


  if(loading) {
   return <Loader />
  }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Courses</h1>
      </div>
      <div className="productTop">
        {/* <div className="productTopLeft">
                  
              </div> */}
        <div className="productTopRight ">
          <div className="productInfoBottom flex flex-wrap gap-5 justify-center">
            <div className="productInfoItem">
              <div class="flex justify-center gap-3 flex-wrap max-w-full">
                <label htmlFor="username" className="productInfoKey">
                  title
                </label>
                <input
                  type="text"
                  className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-Indigo-300 text-sm rounded-lg focus:ring-indigo-500  focus:border-indigo-500 block w-64 p-2.5 checked:bg-emerald-500"
                  placeholder="username"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="productInfoItem">
              <div class="flex justify-center gap-3 flex-wrap max-w-full">
                <label htmlFor="username" className="productInfoKey">
                  category
                </label>
                <select className="border border-neutral-500 rounded-lg focus:ring-indigo-500  focus:border-indigo-500" name="" id=""  onChange={(e) => setCourseCategory(e.target.value)}>
                  <option value={localStorage.getItem('courseCategory') || mainCourse.category}>{localStorage.getItem('courseCategory') || mainCourse.category}</option>
                  {
                categories ? (
                  categories.map(category => {
                    return <option key={category._id} value={category.title}>{category.title}</option>
                  })
                ) : 'loading...'
                  }
                </select>
              </div>
            </div>
            <div className="productInfoItem">
              <div class="flex justify-center gap-3 flex-wrap max-w-full">
                <label htmlFor="username" className="productInfoKey">
                  discount
                </label>
                <input
                  type="text"
                  className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-Indigo-300 text-sm rounded-lg focus:ring-indigo-500  focus:border-indigo-500 block w-64 p-2.5 checked:bg-emerald-500"
                  placeholder="username"
                  value={discountCourse}
                  onChange={(e) => setDiscountCourse(e.target.value)}
                />
              </div>
            </div>
            <div className="productInfoItem">
              <div class="flex justify-center gap-3 flex-wrap max-w-full">
                <label htmlFor="username" className="productInfoKey">
                  price
                </label>
                <input
                  type="text"
                  className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-Indigo-300 text-sm rounded-lg focus:ring-indigo-500  focus:border-indigo-500 block w-64 p-2.5 checked:bg-emerald-500"
                  placeholder="username"
                  value={coursePrice}
                  onChange={(e) => setCoursePrice(e.target.value)}
                />
              </div>
            </div>
            <div className="productInfoItem">
              <div class="flex justify-center gap-3 flex-wrap max-w-full">
                <label htmlFor="username" className="productInfoKey">
                  description
                </label>
                <input
                  type="text"
                  className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-Indigo-300 text-sm rounded-lg focus:ring-indigo-500  focus:border-indigo-500 block w-64 p-2.5 checked:bg-emerald-500"
                  placeholder="username"
                  value={desc}
                  onChange={(e) => setDissc(e.target.value)}
                />
              </div>
            </div>
            <button class="button mt-5">edit</button>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm justify-start	items-baseline gap-10">
          <div className="productFormLeft"></div>
          <div className="productFormRight">
            <div className="productUploader">
              {/* <label>
                <PublishIcon />
              </label> */}
            </div>
          </div>
          {/* <div className="preview">
          <img className="max-w-full h-auto" src="" alt="user preview" />
        </div> */}
          
        </form>
      </div>
    </div>
  );
}
