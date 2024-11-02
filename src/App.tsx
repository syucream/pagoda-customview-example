import React from 'react'
import { AppBase } from '@syucream/pagoda-core'

const HelloWorldPage: React.FC = () => {
  return <div>hello world</div>
}

const App: React.FC = () => {
  return <AppBase customRoutes={[
      {
        path: '/hello',
        element: <HelloWorldPage />,
      },
    ]}
  />;
}

export default App
