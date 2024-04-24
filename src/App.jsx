import React, { useState } from 'react';
import Status from './components/status/Status';
import Loading from './shared/Loading';

const App = () => {
    return (
        <>
          <Loading></Loading>
          <Status />
        </>
    );
};
export default App;