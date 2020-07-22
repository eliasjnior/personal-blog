import React, { useEffect, useRef } from 'react'

import { useField } from '@unform/core'

import { CustomTextarea } from './styles'

type TextareaProps = { name: string } & React.TextareaHTMLAttributes<
  HTMLTextAreaElement
>

const Textarea: React.FC<TextareaProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return <CustomTextarea ref={inputRef} {...rest} />
}

export default Textarea
