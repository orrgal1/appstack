import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HealthServiceClient } from './grpc/service1/CombinedServiceClientPb';
import { HealthChekcResult } from './grpc/service1/combined_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

const client = new HealthServiceClient('http://localhost:8080');

function App() {
  const [response, setResponse] = useState<HealthChekcResult | null>(null);

  useEffect(() => {
    client.healthCheck(new Empty(), {}, (err, response) => {
      if (err) {
        console.error(err);
      } else {
        setResponse(response);
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          {response && (
            <div>Response: {JSON.stringify(response.toObject())}</div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
