import React, { useEffect, useRef } from 'react'

import { useField } from '@unform/core'

import { CustomInput } from './styles'

type InputProps = {
  name: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return <CustomInput ref={inputRef} {...rest} />
}

export default Input
