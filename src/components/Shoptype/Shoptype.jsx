import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Products/ProductCard";
import "./Shoptype.css";
import { ProductContext } from "../ContextApi/ProductContext";
import ReactPaginate from "react-paginate";

function Shoptype({ products, loading, error }) {
  const [activeClass, setActive] = useState(0);
  const [type, setType] = useState("best-seller");
  const handleCategory = (id, type) => {
    setActive(id);
    setType(type);
    setPageNumber(0);
  };

  var checkCateType = (cates) => {
    for (let i = 0, l = cates.length; i < l; i++) {
      if (cates[i].slug === type) {
        return 1;
      }
    }
    return 0;
  };
  const cateLength = products.filter(
    (filter, index) => checkCateType(filter.categories) > 0
  );

  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 5;
  const pageCount = Math.ceil(cateLength.length / productsPerPage);
  const pageVisited = pageNumber * productsPerPage;

  const displayProducts = products
    .filter((filter, index) => checkCateType(filter.categories) > 0)
    .slice(pageVisited, pageVisited + productsPerPage)
    .map((product, index) => {
      if (loading) return <h1>Loading...</h1>;
      return (
        <div key={index} className="card">
          <div className="card-img-box">
            <img src={product.media.source} alt="" />
          </div>
          <div className="card-description">
            <div className="box">
              <Link to={`/page/product-detail/${product.id}`} className="link-name">
                <p className="name">{product.name}</p>
              </Link>
              <p className="description">description</p>
            </div>
            <p className="price">
              <span>50,000.00</span>
              {product.price.formatted_with_code.replace(".00", "")}
            </p>
          </div>
        </div>
      );
    });

  // console.log(displayProducts);
  // console.log(pageCount);
  const prevImages = () => {
    setPageNumber(pageNumber === 0 ? pageCount - 1 : pageNumber - 1);
  };
  const nextImages = () => {
    setPageNumber(pageNumber === pageCount - 1 ? 0 : pageNumber + 1);
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (error) {
    // 404 page here
  }
  if (loading) {
    return <h4 className="loading">Loading...</h4>;
  }
  return (
    <>
      <div className="shop-catagory-container">
        <div className="catagory-cards">
          <div className="card-item">
            <img
              src="https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/xpopular1.png.pagespeed.ic.IE1AhCO_A1.webp"
              alt=""
            />
            <Link to="#" className="shopnow-link shopnow-link-active">
              <button>Shop Now</button>
            </Link>
            <div className="transbox transbox-active">
              <p>ໂມງ</p>
            </div>
          </div>
          <div className="card-item">
            <img
              src="https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/xpopular3.png.pagespeed.ic.WBnvmQ9txi.webp"
              alt=""
            />
            <Link to="#" className="shopnow-link shopnow-link-active">
              <button>Shop Now</button>
            </Link>
            <div className="transbox transbox-active">
              <p>ໂມງ</p>
            </div>
          </div>
          <div className="card-item">
            <img
              src="https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/xpopular1.png.pagespeed.ic.IE1AhCO_A1.webp"
              alt=""
            />
            <Link to="#" className="shopnow-link shopnow-link-active">
              <button>Shop Now</button>
            </Link>
            <div className="transbox transbox-active">
              <p>ໂມງ</p>
            </div>
          </div>
          <div className="card-item">
            <img
              src="https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/xpopular2.png.pagespeed.ic.sEdxp71lst.webp"
              alt=""
            />
            <Link to="#" className="shopnow-link shopnow-link-active">
              <button>Shop Now</button>
            </Link>
            <div className="transbox transbox-active">
              <p>ໂມງ</p>
            </div>
          </div>
        </div>
        <div className="product-group">
          <div className="group-name">
            <Link to="#" className="link-type">
              <p
                onClick={() => handleCategory(0, "best-seller")}
                className={activeClass === 0 ? "cate-active" : ""}
              >
                ຂາຍດີ
              </p>
            </Link>
            <Link to="#" className="link-type">
              <p
                onClick={() => handleCategory(1, "new")}
                className={activeClass === 1 ? "cate-active" : ""}
              >
                ມາໃໝ່
              </p>
            </Link>
            <Link to="#" className="link-type">
              <p
                id="sale"
                onClick={() => handleCategory(2, "sale")}
                className={activeClass === 2 ? "cate-active" : ""}
              >
                Sale
              </p>
            </Link>
          </div>
          <div className="cards-grid">{displayProducts}</div>
          <ReactPaginate
            previousLabel={"ກັບຄືນ"}
            nextLabel={"ໄປໜ້າ"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"link prevBtn"}
            nextLinkClassName={"link nextBtn"}
            disabledClassNam={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </>
  );
}

export default Shoptype;
