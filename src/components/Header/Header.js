import React from 'react'
import styled from 'styled-components/macro'
import { Menu, Search, User } from 'react-feather'

import { QUERIES } from '../../constants'

import MaxWidthWrapper from '../MaxWidthWrapper'
import Logo from '../Logo'
import Button from '../Button'

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <MobileBtn>
              <User size={24} />
            </MobileBtn>
            <DesktopBtnsWrapper>
              <Button>Subscribe</Button>
              <StyledAnchor href="">Already a subscriber?</StyledAnchor>
            </DesktopBtnsWrapper>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  )
}

const SuperHeader = styled.div`
  padding: 16px 0;
  color: black;
  position: absolute;
  top: 60px;
  width: 100%;
  @media (max-width: 1000px) {
    color: white;
    position:initial ;
    background: var(--color-gray-900);
  }
`

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`
const DesktopBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    display: none;
  }
`
const MobileBtn = styled.button`
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`
const StyledAnchor = styled.a`
  color: var(--gray-900, #2b2826);
  font-family: Crimson Text;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  text-decoration-line: underline;
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`

export default Header
