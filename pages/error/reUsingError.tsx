import { NextPage } from 'next';
import Error from 'next/error';

type Props = {
  errorCode: number;
  data: any;
};

const ReUsingError: NextPage<Props> = ({ errorCode, data }) => {
  if (errorCode) {
    // getServerSideProps를 통해서 에러 코드를 받아온다면
    // Error 페이지 모듈을 해당 에러 status를 보여 줄수 있습니다.
    return <Error statusCode={errorCode} />;
  }
  return <div>Next ReUsingError : {data}</div>;
};

export async function getServerSideProps() {
  // 테스트를 위해 서버에서 임의의 에러 코드를 넘겨줬습니다.
  return { props: { errorCode: 404, data: null } };
}

export default ReUsingError;
