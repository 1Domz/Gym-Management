import { MouseEvent } from 'react'

type PassProps = {
  name: string
  type: 'button' | 'submit' | 'reset'
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ name, type, onClick }: Partial<PassProps>) => {
  return (
    <div>
      <button
        className='rounded-l-lg bg-sky-400 grid-cols-2'
        type={type}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  )
}
