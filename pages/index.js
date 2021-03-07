import { SelectMode } from '../components/SelectMode';
import { getMonth } from '../helpers/nextGP';

export default function Home() {
  getMonth()

  return (
    <div>
      <SelectMode />
    </div>
  );
}
