import { ToggleMode } from '@/ui/ToggleMode';
import { navigation } from './navigation';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-neutral-400 hover:text-neutral-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
          <ToggleMode />
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <a
            className="flex items-center justify-center text-neutral-400"
            href="https://truenorth.co?utm_source=template-nextjs&utm_medium=template-nextjs&utm_campaign=template-nextjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by TrueNorth
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
