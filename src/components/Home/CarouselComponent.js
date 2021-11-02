import React, { useEffect, useState } from 'react'
import { indexArtwork } from '../../api/artwork'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const CarouselComp = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    indexArtwork().then((res) => {
      setCards(res.data.artwork)
    })
  }, [])

  return (
    <div style={{ marginTop: '50px' }} className={'demo-carousel'}>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={1000}
        showThumbs={false}
      >
        {cards.map((card) => {
          return (
            <div key={card._id}>
              <img style={{ maxWidth: '60%' }} src={`${card.imageUrl}`} />
              {/* <p style={{ width: '300px', margin: 'auto', color: 'white', paddingTop: '30px' }}>{card.title}</p> */}
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default CarouselComp
