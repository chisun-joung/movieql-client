import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($id: ID!) {
    movie(id: $id) {
      title
      id
    }
  }
`;

export default function Movie() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;

  return <div>{data.movie.title}</div>;
}
