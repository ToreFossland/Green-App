import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CardMedia } from '@material-ui/core'
import StCard from 'styledComponents/StCard';
import bike from 'testImages/bikecrop.png';
import chef from 'testImages/chefcrop.png';
import trash from 'testImages/trashcrop.png';

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
                height= '275'
                width='100%'
            />
        </StCard>
    )
}