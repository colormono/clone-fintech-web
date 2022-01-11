import Link from 'next/link';
import { ToggleMode } from '@/components/ui';
// import { navigation } from './navigation';

export function Header() {
  return (
    <header className="flex items-center justify-between border-b py-4 mb-8">
      <div>
        <Link href="/">
          <a className="font-bold tracking-wide text-sm">PROJECT</a>
        </Link>
      </div>
      <div>
        <ToggleMode />
      </div>
    </header>
  );
}

export default Header;
