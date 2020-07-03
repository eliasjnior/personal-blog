import React from 'react'

import { GrGithub, GrLinkedinOption } from 'react-icons/gr'

import GlobalStyle from '~/styles/GlobalStyle'

import {
  Content,
  Header,
  Image,
  Menu,
  MenuLink,
  Post,
  PostContent,
  PostDate,
  PostDescription,
  PostImage,
  PostLink,
  PostList,
  PostTitle,
  Presentation,
  Separator,
  SocialLink,
  SocialList,
  Title,
} from './styles'

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Title>Elias Júnior</Title>
        <Image src={'/profile.jpeg'} alt="Elias Júnior" />
        <Presentation>
          Hi, my name is Elias Júnior. Briefly introduce yourself here. You can
          also provide a link to the about page.
        </Presentation>
        <SocialList>
          <SocialLink href="#">
            <GrLinkedinOption size={22} />
          </SocialLink>
          <SocialLink href="#">
            <GrGithub size={22} />
          </SocialLink>
        </SocialList>
        <Separator />
        <Menu>
          <MenuLink href="#" active>
            Home
          </MenuLink>
          <MenuLink href="#">Blog</MenuLink>
          <MenuLink href="#">About me</MenuLink>
          <MenuLink href="#">Contact</MenuLink>
        </Menu>
      </Header>
      <Content>
        <PostList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((post) => (
            <Post key={post.toString()}>
              <PostImage src="https://via.placeholder.com/150x150" />
              <PostContent>
                <PostTitle>
                  <a href="#">Why Every Developer Should Have A Blog</a>
                </PostTitle>
                <PostDate>Published 2 days ago</PostDate>
                <PostDescription>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies...
                </PostDescription>
                <PostLink href="#">Read more →</PostLink>
              </PostContent>
            </Post>
          ))}
        </PostList>
      </Content>
    </>
  )
}

export default Home
