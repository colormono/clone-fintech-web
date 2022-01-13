import Link from 'next/link';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a
          className="hover:text-primary-600 focus:text-primary-600 border-b hover:border-primary-500 dark:hover:text-neutral-300 dark:border-neutral-500"
          {...props}
        >
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary-600 focus:text-primary-600 border-b hover:border-primary-500 dark:hover:text-neutral-300 dark:border-neutral-500"
      {...props}
    />
  );
};

export default CustomLink;
