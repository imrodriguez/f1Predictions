import { getTeams } from "../services/teams";
import { Standing } from "../components/Standing";

export default function Teams({ teams }) {
  return <Standing type="teams" elements={teams} />;
}

export async function getStaticProps() {
  const teams = await getTeams();

  return { props: { teams } };
}
