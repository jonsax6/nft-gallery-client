import * as React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'

export default function MaxHeightTextarea({ notes }) {
  return (
    <TextareaAutosize
      maxRows={4}
      aria-label='maximum height'
      placeholder='Maximum 4 rows'
      defaultValue={notes}
      style={{ width: 200 }}
    />
  )
}
