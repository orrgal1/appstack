import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLoginButton from './components/googleLoginButton';
import { Dummy, DummyService, HealthChekcResult, HealthService } from './beapi';

function App() {
  const healthService = new HealthService();
  const dummyService = new DummyService();
  const [healthResponse, setHealthResponse] =
    useState<HealthChekcResult | null>(null);
  const [dummyResponse, setDummyResponse] = useState<Dummy | null>(null);

  useEffect(() => {
    healthService
      .healthCheck({})
      .then((result) => {
        setHealthResponse(result);
      })
      .catch((err) => {
        console.error(err);
      });
    dummyService
      .createOne({ text: '123', isPublic: true })
      .then((result) => {
        setDummyResponse(result);
      })
      .catch((err) => {
        console.error(err);
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
          <GoogleLoginButton />
        </div>
        <div>Health: {JSON.stringify(healthResponse)}</div>
        <div>Dummy: {JSON.stringify(dummyResponse)}</div>
      </header>
    </div>
  );
}

export default App;
