import * as React from 'react'
import { StyledPageTitle } from './PageTitle.styles'

const PageTitle = ({ pageName }: string) => {
  return <StyledPageTitle>{pageName}</StyledPageTitle>
}

export default PageTitle
