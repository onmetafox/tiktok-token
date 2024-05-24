import { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react'

export type BaseDivProps = HTMLAttributes<HTMLDivElement>

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement>

export type ElementThemeProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: 'black' | 'info' | 'gray' | 'warning' | 'error' | 'success' | 'default' | 'primary'
  variant?: 'default' | 'contained' | 'outlined'
  fontSize?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export type Response<T> = {
  status: 'Success'
} & T

export type Diagnostic = {
  name: string
  description: string
  status: string
}

export type DiagnositicHistoryItem = {
  month: string
  year: number
  blood_pressure: {
    systolic: {
      value: number
      levels: string
    }
    diastolic: {
      value: number
      levels: string
    }
  }
  heart_rate: {
    value: number
    levels: string
  }
  respiratory_rate: {
    value: number
    levels: string
  }
  temperature: {
    value: number
    levels: string
  }
}

export type Patient = {
  name: string
  gender: string
  age: number
  profile_picture: string
  date_of_birth: string
  phone_number: string
  emergency_contact: string
  insurance_type: string
  diagnosis_history: DiagnositicHistoryItem[]
  diagnostic_list: Diagnostic[]
  lab_results: string[]
}
