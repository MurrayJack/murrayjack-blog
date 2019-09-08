
import React from "react"
import styled  from "styled-components";
import Bar from "./bar"

const Header = styled.header`
    position: sticky;
    top: 0;
    padding: 20px 0;
`

export default () => <Bar><Header>blog | Murray Jack | Resume</Header></Bar>