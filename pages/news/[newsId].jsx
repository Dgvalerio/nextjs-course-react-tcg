import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();

  const { newsId } = router.query;

  return <h1>The Detail Page: {newsId}</h1>;
};

export default DetailPage;
