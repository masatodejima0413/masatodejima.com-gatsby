import * as React from 'react'
import { StyledPageTitle } from './PageTitle.styles'

interface PageTitleProps {
  pageName: string
}

const PageTitle: React.FC<PageTitleProps> = ({ pageName }) => {
  return <StyledPageTitle>{pageName}</StyledPageTitle>
}

export default PageTitle
