import React from 'react'
import classNames from 'classnames'
import './Button.scss'

function Button({ children, size, color, outline }) {
    return <button className={classNames('Button', size, color, {outline})}>{children}</button>
} // {```} ``` 안에 있는 값이 true일 때만 CSS 클래스를 적용시키겠다는 뜻.

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
}

export default Button;