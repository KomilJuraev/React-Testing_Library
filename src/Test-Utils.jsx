import React from 'react'
import {render} from '@testing-library/react'
import { AppProviders } from './providers/App-Providers'


const customRender = (ui, options) =>
  render(ui, {wrapper: AppProviders, ...options})

export * from '@testing-library/react'

export {customRender as render}