import React, { useCallback, useRef, useState } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { PageProps, graphql } from 'gatsby'

import ContentWrapper from '~/components/ContentWrapper'
import Button from '~/components/Form/Button'
import FormGroup from '~/components/Form/FormGroup'
import Input from '~/components/Form/Input'
import Textarea from '~/components/Form/Textarea'
import Layout from '~/components/Layout'
import PostContent from '~/components/PostContent'
import Seo from '~/components/Seo'
import { Message } from '~/styles/pages/contact'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

type DataType = {
  site: {
    siteMetadata: {
      social: {
        email: string
      }
    }
  }
}

const Contact: React.FC<PageProps<DataType>> = ({ data }) => {
  const [status, setStatus] = useState<
    'loading' | 'success' | 'error' | 'pending'
  >('pending')

  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (formData: FormData) => {
    setStatus('loading')
    const xhr = new XMLHttpRequest()
    xhr.open('post', process.env.GATSBY_FORMSPREE_URL as string)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        setStatus('success')
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        setStatus('error')
      }
    }
    xhr.send(JSON.stringify(formData))
  }, [])

  return (
    <>
      <Seo title="Contact" />
      <Layout>
        <ContentWrapper>
          <PostContent>
            <h1>Contact</h1>
            <p>
              Você pode entrar em contato comigo através do email{' '}
              <a href={`mailto:${data.site.siteMetadata.social.email}`}>
                {data.site.siteMetadata.social.email}
              </a>{' '}
              ou preencher o formulário abaixo.
            </p>
            <Form onSubmit={handleSubmit} ref={formRef}>
              <FormGroup>
                <label htmlFor="name">Nome</label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  disabled={status === 'loading'}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  disabled={status === 'loading'}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="subject">Assunto</label>
                <Input
                  id="subject"
                  type="text"
                  name="subject"
                  disabled={status === 'loading'}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="message">Mensagem</label>
                <Textarea
                  id="message"
                  rows={5}
                  name="message"
                  disabled={status === 'loading'}
                  required
                />
              </FormGroup>
              <Button type="submit" disabled={status === 'loading'}>
                Enviar
              </Button>
              {(status === 'success' || status === 'error') && (
                <Message status={status}>
                  {status === 'success'
                    ? `Mensagem enviada com sucesso!`
                    : status === 'error'
                    ? `Houve um erro ao enviar a mensagem.`
                    : null}
                </Message>
              )}
            </Form>
          </PostContent>
        </ContentWrapper>
      </Layout>
    </>
  )
}

export default Contact

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        social {
          email
        }
      }
    }
  }
`
