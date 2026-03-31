import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk'
import { TracingInstrumentation } from '@grafana/faro-web-tracing'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

if (import.meta.env.PROD) {
  initializeFaro({
    url: 'https://faro-collector-prod-sa-east-1.grafana.net/collect/609751b8c60f8f5ff1bdcdc84a9d1cc9',
    app: {
      name: 'dattolistudio',
      version: '1.0.0',
      environment: import.meta.env.MODE === 'production' ? 'production' : 'staging',
    },
    instrumentations: [
      ...getWebInstrumentations(),
      new TracingInstrumentation(),
    ],
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
