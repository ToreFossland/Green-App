import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CardMedia } from '@material-ui/core'
import StCard from 'styledComponents/StCard';
import bike from 'testImages/bike-blue.png';
import chef from 'testImages/chef-blue.png';
import trash from 'testImages/trash-blue.png';

export function LoginCarousel(props: any) {
    var items = [
        { image: bike },
        { image: chef },
        { image: trash }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>
    )
}

function CarouselItem(props: any) {
    return (
        <StCard elevation={0} >
            <CardMedia component="img"
                image={props.item.image}
                title="Image Carousel"
                height= '250'
                width='100%'
            />
        </StCard>
    )
}