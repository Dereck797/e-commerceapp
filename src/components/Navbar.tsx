import React, { Fragment } from 'react'
import styled from 'styled-components'

const Component = styled.div`
    height: 60px;
    /* background-color: black; */
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
`

const Lenguaje = styled.span`
    font-size: 14px;
    cursor: pointer;
` 

const SearchContainer = styled.div``

const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`


const Navbar = () => {
  return ( 
      <Fragment>
        <Component>
            <Wrapper>
                <Left>
                    <Lenguaje>EN</Lenguaje>
                    <SearchContainer>
                        input
                    </SearchContainer>
                </Left>
                <Center>
                    Center
                </Center>
                <Right>
                    Right
                </Right>
            </Wrapper>    
        </Component>       
      </Fragment>
  )
}

export default Navbar
