import { getDrivers } from "../services/drivers";
import { Standing } from "../components/Standing";

export default function Drivers({ drivers }) {
  return <Standing type="drivers" elements={drivers} />;
}

export async function getStaticProps() {
  const drivers = await getDrivers();

  return { props: { drivers } };
}
