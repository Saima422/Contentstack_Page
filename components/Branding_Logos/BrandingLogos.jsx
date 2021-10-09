import Slider from "react-slick";
import styles from './Branding_Logos.module.scss';

function BrandingLogos( {data}){
  let {client} = data[0]
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1009,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          }
        ]
        }
    return(
        <div className={styles.container}>
          {/* {console.log(data[0].client)} */}
		    <Slider {...settings}> 
          {client.map((item)=>{
            return(
              <div className={styles.brandLogo} key={item._metadata.uid} >
                <img src={item.client_logo.url}/>
              </div>
            )  
          })}
        </Slider>
      </div>
    );
}
export default BrandingLogos