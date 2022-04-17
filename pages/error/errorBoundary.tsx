import { NextPage } from 'next';
import ErrorBoundary from '../../components/boundary/ErrorBoundary';
import ErrorBoundaryTestComponent from '../../components/errorBoundary/ErrorBoundaryTestComponent';

const ErrorBoundaryPage: NextPage = () => {
  return (
    <>
      <div>ErrorBoundaryPage</div>
      <ErrorBoundary fallback={<h1>error 발생</h1>}>
        <ErrorBoundaryTestComponent />
      </ErrorBoundary>
    </>
  );
};

export default ErrorBoundaryPage;
