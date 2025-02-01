import styled from "styled-components"
import img1 from "../../Images/img1.jpg"
import img2 from "../../Images/img2.jpg"
import img3 from "../../Images/img3.jpg"

const Baner = styled.div`
  .carousel-item {
    max-height: 60vh;

    img {
      height: 50vh;
      width: 100%; 
      object-fit: cover;
    }

    @media (max-width: 768px) {
      img {
        height: 30vh

      }
    }
  }
`;



export function Banner() {
    return (
        <Baner>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </Baner>
    )
}