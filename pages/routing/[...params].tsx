import { NextPage } from 'next';
import { useRouter } from 'next/router';
import type { ParsedUrlQuery } from 'querystring';

const RoutingCatchAll: NextPage = ({}) => {
  // Next 라우트 모듈을 사용합니다.
  const router = useRouter();
  // Next 라우트 모듈에는 query 키로 [ 파일명 ] 으로 만들었던 파일명의 값을 조회할 수 있습니다.
  // CatchAll 을 사용하게 되면 파일명에 url 에 있는 모든 parameter 값이 배열 형태로 받아올 수 있습니다.
  const params: string | string[] | undefined = router.query.params;
  const [id, title, text] = params;
  console.log(params);

  return <div>{/* RoutingCatchAll 페이지 : {id} {title} {text} */}</div>;
};

export default RoutingCatchAll;
