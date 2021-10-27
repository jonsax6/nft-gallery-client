import React from 'react'
import TextField from '@mui/material/TextField'
import {
  InputAdornment
} from '@mui/material'

const TextFieldComponent = ({ id, label, icon, value, onChange, type, required }) => {
  return (
    <TextField
      required={required}
      id={id}
      label={label}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        ),
        style: { color: 'white' }
      }}
      variant='outlined'
      color='primary'
      value={value}
      type={type}
      onChange={onChange}
      sx={{
        width: '100%',
        marginTop: '20px',
        '& label.Mui-focused': {
          color: 'green'
        },
        '& label': {
          color: 'white'
        },
        '&:hover label': {
          color: '#5ba7ff'
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white'
          },
          '&:hover fieldset': {
            borderColor: '#5ba7ff'
          },
          '&.Mui-focused fieldset': {
            borderColor: 'green'
          }
        }
      }}
    />
  )
}

export default TextFieldComponent
