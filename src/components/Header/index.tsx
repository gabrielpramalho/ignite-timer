import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo.svg'
import { Timer } from '@phosphor-icons/react'
import { Scroll } from '@phosphor-icons/react/dist/ssr'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
