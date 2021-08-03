import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CardMedia } from '@material-ui/core'
import StCard from 'styledComponents/StCard';
import soppel from 'testImages/plukkesoppel.svg';
import sykkel from 'testImages/sykletiljobb.svg';
import vegetar from 'testImages/spisevegetar.svg';
import bike from 'testImages/bike-crop.svg';
import chef from 'testImages/chef-crop.svg';
import trash from 'testImages/trash-crop.svg';

export function LoginCarousel(props: any) {
    var items = [
        { image: sykkel },
        { image: soppel },
        { image: vegetar },
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
                height= '300'
                width='100%' />
        </StCard>
    )
}