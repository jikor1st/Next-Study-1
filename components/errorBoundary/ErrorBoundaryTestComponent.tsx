import { useState } from 'react';
import { NextComponentType } from 'next';
const ErrorBoundaryTestComponent: NextComponentType = () => {
  const [testState] = useState<any>();
  return <div>ErrorBoundaryComponent : success rendered {testState.test}</div>;
};

export default ErrorBoundaryTestComponent;
