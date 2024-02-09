import React, { useEffect, useState } from "react";
import "./SingleArticle.css";
import { Link, useParams } from "react-router-dom";
import PublishIcon from "@mui/icons-material/Publish";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesFromServer } from "../../../Redux/store/articles";
import Loader from "../../../Components/loader/loader";
import Swal from "sweetalert2";

export default function SingleArticle() {
  let params = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getArticlesFromServer(`https://redux-cms.iran.liara.run/api/articles/`)
    );
  }, []);

  const { data, loader, error } = useSelector((state) => state.articles);

  let mainArticle = data.find((article) => {
    return article._id == params.articelId;
  });

  const [title, setTitle] = useState(
    localStorage.getItem("title") || (mainArticle ? mainArticle.title : "")
  );
  const [category, setCategory] = useState(
    localStorage.getItem("category") ||
      (mainArticle ? mainArticle.category : "")
  );
  const [desc, setDesc] = useState(
    localStorage.getItem("desc") || (mainArticle ? mainArticle.desc : "")
  );

  useEffect(() => {
    if (mainArticle) {
      setTitle(mainArticle.title);
      setCategory(mainArticle.category);
      setDesc(mainArticle.desc);
    }
  }, [mainArticle]);

  useEffect(() => {
      localStorage.setItem("title", title),
      localStorage.setItem("category", category),
      localStorage.setItem("desc", desc);
  }, [title, category, desc]);

  {
    if (loader) {
      <Loader />;
    }
  }

  {
    if (error) {
      Swal.fire({
        icon: "error",
        title: { error },
        showConfirmButton: true,
      });
    }
  }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Articles</h1>
      </div>
      <div className="productTop">
        {/* <div className="productTopLeft">
                    
                </div> */}
        <div className="productTopRight ">
          <div className="productInfoBottom flex gap-10 flex-wrap items-end">
            <div className="productInfoItem">
              <div class="flex justify-center gap-3 flex-wrap max-w-full">
                <label htmlFor="username" className="productInfoKey">
                  title
                </label>
                <input
                  type="text"
                  className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-Indigo-300 text-sm rounded-lg focus:ring-indigo-500  focus:border-indigo-500 block w-64 p-2.5 checked:bg-emerald-500"
                  placeholder="username"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="productInfoItem">
              <div class="flex justify-center gap-3 flex-wrap max-w-full">
                <label htmlFor="username" className="productInfoKey">
                  category
                </label>
                <input
                  type="text"
                  className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-Indigo-300 text-sm rounded-lg focus:ring-indigo-500  focus:border-indigo-500 block w-64 p-2.5 checked:bg-emerald-500"
                  placeholder="username"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>
            <button class="button">edit</button>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm justify-start	items-baseline">
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
