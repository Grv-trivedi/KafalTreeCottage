import './SlideShow.css';
export function SlideShow() {
    console.log("inside the component");
    let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
    return (
        <div>
            <h2>Automatic Slideshow</h2>
            <p>Change image every 2 seconds:</p>

            <div className="slideshow-container">

                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="images/scene1.jpg"  style={{width:"100%"}}/>
                    <div className="text">Caption Text</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src="images/scene2.jpg" style={{width:"100%"}} />
                    <div className="text">Caption Two</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src="images/scene3.jpg" style={{width:"100%"}} />
                    <div className="text">Caption Three</div>
                </div>

            </div>
            <br />

            <div style={{textAlign:"center"}}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

        </div>
    )
}