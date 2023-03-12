import React , {useState , useEffect} from 'react';
import {PortfolioSection , PortfolioTitle , TitleSpan , PortfolioList , PortfolioItem , Box , ImageWrapper , Image , Overlay , OverlaySpan } from "./style.js";
import axios from 'axios';

const Portfolio = () => {
    
    const [ images , setImages ] = useState([]) 
    
    useEffect( () => {
        axios.get('js/data.json').then( res => {setImages(res.data.portfolio)})
    },[])

    const PortfolioImages = images.map((imageItem)=>{
    return(
        <ImageWrapper key={imageItem.id}>
            <Image src={imageItem.image} alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
        </ImageWrapper>
    )
    } ) 

        return(
            <PortfolioSection id="Po">
                <PortfolioTitle><TitleSpan>My</TitleSpan> Portfolio</PortfolioTitle>
                    <PortfolioList>
                        <PortfolioItem active>All</PortfolioItem>
                        <PortfolioItem >HTML</PortfolioItem>
                        <PortfolioItem >Photoshop</PortfolioItem>
                        <PortfolioItem >Wordpress</PortfolioItem>
                        <PortfolioItem >Mobile</PortfolioItem>
                    </PortfolioList>
                
                <Box className='box'>
                    
                    {PortfolioImages}
        
                </Box>
            
            </PortfolioSection>
        )
    }
    


export default Portfolio;