import React from 'react'

import ContentWrapper from '~/components/ContentWrapper'
import Layout from '~/components/Layout'
import PostContent from '~/components/PostContent'
import Seo from '~/components/Seo'

const Home: React.FC = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <ContentWrapper>
          <PostContent>
            <h1>Sobre mim</h1>
            <p>
              Trabalho profissionalmente com desenvolvimento web desde 2011,
              após concluir o Ensino Médio e me especializei na plataforma
              WordPress, construindo temas e plugins personalizados, atendendo
              as demandas dos meus clientes.
            </p>
            <p>
              Em 2013 entrei na Universidade Federal do Espírito Santo, porém
              como já estava atuando no mercado de trabalho, com o tempo acabei
              deixando a faculdade um pouco de lado e utilizando esse tempo que
              seria gasto "cumprindo disciplinas" para me aprofundar em
              conteúdos que atendesse melhor a minha área.
            </p>
            <p>
              Sendo assim, hoje atuo como desenvolvedor de soluções
              especializadas para WordPress, web em geral e aplicativos móveis.
              Utilizo como tecnologias React, React Native e NodeJS, mas tenho
              conhecimento em diversas outras ferramentas que podem ser
              utilizadas de acordo com a necessidade do projeto.
            </p>
            <h2>Sobre o blog</h2>
            <p>
              Meu conhecimento adveio de conteúdos disponibilizados através da
              internet, seja em fóruns como Stack Overflow, ou até mesmo em
              pequenos blogs escritos por aí que acabei me deparando através dos
              buscadores.
            </p>
            <p>
              Como já atingi uma maturidade nos meus códigos, sinto que posso
              compartilhar parte desse conhecimento com pessoas que eu nem
              conheço e que de alguma forma será útil, mesmo que não tenha como
              objetivo principal expandir o alcance do blog.
            </p>
            <p>
              Sendo assim, irei compartilhar coias do meu dia a dia, seja de
              programação, ferramentas, política ou empreendedorismo. Sintam-se
              à vontade para comentar e tirar as dúvidas, ou entrar em contato
              comigo caso tenha algo mais direto para falar comigo.
            </p>
            <h2>Próximos passos</h2>
            <p>
              Aos poucos irei expandindo o conteúdo e o que disponibilizo aqui.
              Irei aproveitando uns fins de semana e tempos livres para melhorar
              o conteúdo disponibilizado.
            </p>
          </PostContent>
        </ContentWrapper>
      </Layout>
    </>
  )
}

export default Home
