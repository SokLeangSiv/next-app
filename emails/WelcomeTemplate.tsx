import React, { CSSProperties } from 'react'
import { Html, Body,Tailwind,
     Container,Text, Link,Preview} from '@react-email/components'

const WelcomeTemplate = ({name} : {name:string}) => {
  return (
   <Html>
    <Preview>
        welcome to our platform
    </Preview>
    <Body className='bg-slate-400'>
        <Container>
            <Text>
                Hello world 
                <Link>COde with siv</Link>
                    
            </Text>
        </Container>
    </Body>
   </Html>
  )
}

const body :CSSProperties = {
    background : "#fff"
}

export default WelcomeTemplate