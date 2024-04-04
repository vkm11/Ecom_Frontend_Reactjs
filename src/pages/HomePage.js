import React from 'react'
import Layout from '../components/Layouts/Layout'
import { useAuth } from '../context/Auth'

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Best offers"}>
      <pre> {JSON.stringify(auth, null, 4)}</pre> 
      <div className='container-fluid px-0'>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img src="./images/ecom3.png" className="d-block shopimage" alt="ecom3" />
            </div>
            <div className="carousel-item">
              <img src="./images/shop12.png" className="d-block shopimage" alt="shop12" />
            </div>
            
            <div className="carousel-item">
              <img src="./images/shop3.png" className="d-block shopimage" alt="shop3" />
            </div>
            <div className="carousel-item">
              <img src="./images/shop5.png" className="d-block shopimage" alt="shop5" />
            </div>
            <div className="carousel-item">
              <img src="./images/shop6.png" className="d-block shopimage" alt="shop6" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage