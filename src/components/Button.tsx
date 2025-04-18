import React from 'react'
type ButtonProps = {
    type: 'button' | 'submit', 
    title: string ; 
    icon?: string ; 
    variant: string; 
    full?: boolean ; 
}

const Button = ({type, title, icon, variant, full}: ButtonProps) => {
  return (
    <button 
    type={type}
    className={`flexCenter gap-3 rounded-full cursor-pointer ${variant} ${full && 'w-full'}`}
    >
      {icon && <img src={icon} alt={title}
      width={24} height={24}/>}
      <label className="regular-16
      whitespace-nowrap cursor-pointer">{title}</label>
    </button> 
  )
}

export default Button