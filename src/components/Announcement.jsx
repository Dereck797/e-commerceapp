import React, { Fragment } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
`

const Announcement = () => {
  return (
    <Fragment>
      <Container>
        Super Deal Free Shopping on Orders Over $50
      </Container>
    </Fragment>
  )
}

export default Announcement
