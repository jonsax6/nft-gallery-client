import React, { useEffect, useState } from 'react'
import { indexArtwork } from '../../api/artwork'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useMediaQuery } from 'react-responsive'

const desktop = '700px'
const tablet = '75%'
const phone = '90%'

const CarouselComp = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    indexArtwork().then((res) => {
      setCards(res.data.artwork)
    })
  }, [])

  const isPhone = useMediaQuery({
    query: '(max-width: 600px)'
  })

  const isTablet = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  let mobileStyle

  if (isPhone) {
    mobileStyle = phone
  } else if (isTablet) {
    mobileStyle = tablet
  } else {
    mobileStyle = desktop
  }

  return (
    <div style={{ marginTop: '10px' }} className={'demo-carousel'}>
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
              <img style={{ maxWidth: mobileStyle }} src={`${card.displayImageUrl}`} />
              {/* <p style={{ width: '300px', margin: 'auto', color: 'white', paddingTop: '30px' }}>{card.title}</p> */}
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default CarouselComp
