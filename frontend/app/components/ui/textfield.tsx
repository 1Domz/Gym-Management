import { ChangeEvent } from 'react';

type PassProps = {
    name: string;
    type: string;
    value: (e: ChangeEvent<HTMLInputElement>) => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TextField = ({name, onChange, type, value}: Partial<PassProps> )=> {
  return (
    <div>
      <div>{name} </div>
      <input
        className='border-2 rounded-md border-slate-800 h-8 w-48'
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}
