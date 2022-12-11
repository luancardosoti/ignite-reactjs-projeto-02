import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src="/logo-ignite.svg" alt="" />

      <nav>
        <NavLink end to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
