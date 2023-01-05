import Alert from 'react-bootstrap/Alert'
function Message({variant, children, classnames}) {
  return (
    <Alert variant={variant} className={classnames}>
      {children}
    </Alert>
  )
}

export default Message
