import React, { useEffect } from 'react'
import { IToastMessages, useToast } from '../../toastContext'

interface IToastProps {
  message: IToastMessages
  style?: any
}

const typesToastClassName = {
  success: 'toast-success',
  error: 'toast-error',
  info: 'toast-primary',
  alert: 'toast-warning',
}

const Toast: React.FC<IToastProps> = ({ message, style }) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 6000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={'toast py-1 ' + typesToastClassName[message.type]} style={{ marginBottom: 10 }}>
      <button className="btn btn-clear float-right" type="button" onClick={() => removeToast(message.id)} />
      {message.title.substring(0, 60)}
    </div>
  )
}

export default Toast
