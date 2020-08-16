import React from 'react'

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

import { Container, Item } from './styles'

interface SocialShareProps {
  url: string
  size?: number
  round?: boolean
}

const SocialShare: React.FC<SocialShareProps> = ({
  url,
  size = 30,
  round = true,
}) => {
  return (
    <Container>
      <Item>
        <FacebookShareButton url={url}>
          <FacebookIcon round={round} size={size} />
        </FacebookShareButton>
      </Item>
      <Item>
        <TwitterShareButton url={url}>
          <TwitterIcon round={round} size={size} />
        </TwitterShareButton>
      </Item>
      <Item>
        <LinkedinShareButton url={url}>
          <LinkedinIcon round={round} size={size} />
        </LinkedinShareButton>
      </Item>
      <Item>
        <WhatsappShareButton url={url}>
          <WhatsappIcon round={round} size={size} />
        </WhatsappShareButton>
      </Item>
    </Container>
  )
}

export default SocialShare
