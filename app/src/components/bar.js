
import React from "react"
import styled from "styled-components";

const Section = styled.section`
  
`

const Article = styled.section`
    width: 920px;
    margin: 0 auto;
`

export default ({ BGColor, children }) => <Section
    style={{ backgroundColor: BGColor }}
>
    <Article>{children}</Article>
</Section>