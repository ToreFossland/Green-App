import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CardMedia } from '@material-ui/core'
import soppel from 'testImages/plukkesoppel.svg';
import sykkel from 'testImages/sykletiljobb.svg';
import StCard from 'styledComponents/StCard';

export function LoginCarousel(props: any) {
    var items = [
        { image: sykkel },
        { image: soppel }
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
        <StCard>
            <CardMedia component="img"
                image={props.item.image}
                title="Sykkel"
                height= '200'
                width='100%' />
        </StCard>
    )
}