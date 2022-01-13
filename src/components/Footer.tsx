import { navigation } from './FooterNav';
import { CustomLink } from './ui';

export function Footer() {
  return (
    <footer className="flex justify-between items-center border-t pt-4 pb-8">
      <div className="flex justify-center space-x-6 md:order-2">
        {navigation.map((item) => (
          <a key={item.name} href={item.href}>
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>

      <div className="mt-8 md:mt-0 md:order-1">
        Powered by{` `}
        <CustomLink href="https://truenorth.co?utm_source=template-nextjs&utm_medium=template-nextjs&utm_campaign=template-nextjs">
          TrueNorth
        </CustomLink>
      </div>
    </footer>
  );
}

export default Footer;
