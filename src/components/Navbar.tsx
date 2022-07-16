import { Search } from '@mui/icons-material'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { Badge } from '@mui/material'
import React, { Fragment } from 'react'
import styled from 'styled-components'


const Component = styled.div`
    height: auto;
    /* background-color: black; */
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items:center;
    justify-content: space-between;

`
const Left = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
`

const Lenguaje = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left: 25px;
    padding:5px;
`

const Input = styled.input`
    border:none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: Bold;
`

const Right = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: flex-end;

`
const MenuItem = styled.div`
     font-size:14px;
     cursor: pointer;
     margin-left: 25px;
`

const Navbar = () => {
    return (
        <Component>
            <Wrapper>
                <Left>
                    <Lenguaje>EN</Lenguaje>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gary", fontSize: 20 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        Template.com
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <LocalGroceryStoreOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Component>
    )
}

export default Navbar
