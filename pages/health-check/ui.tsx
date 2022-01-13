import type { NextPage } from 'next';
import Head from 'next/head';
import twConfig from '../../tailwind.config';

const Page: NextPage = () => {
  const theme = twConfig?.theme;

  return (
    <article className="prose dark:prose-invert mx-auto my-16">
      <Head>
        <title>UI Check</title>
      </Head>

      <h1 className="text-6xl font-bold">UI Check</h1>
      <p>Check if the design token values match with the ones from the design system.</p>

      {theme.colors ? (
        <div className="flex flex-col space-y-4 md:-mx-16">
          {Object.entries(theme.colors).map(([key, value]) => {
            if (typeof value === 'string') {
              if (value === 'transparent') return null;
              return (
                <div>
                  <ColorItem key={key} name={key} hex={value} />
                  <div className="mb-1 uppercase text-xs tracking-wider font-semibold">{key}</div>
                </div>
              );
            }
            return (
              <div key={key}>
                <div className="flex w-full">
                  {Object.entries(value).map(([keyChild, valueChild]) => {
                    if (!valueChild) return null;
                    return <ColorItem key={keyChild} name={key} shade={keyChild} hex={valueChild} />;
                  })}
                </div>
                <div className="mb-1 uppercase text-xs tracking-wider font-semibold">{key}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <h3 className="text-error-500">Object theme.colors not found</h3>
      )}
    </article>
  );
};

const ColorItem = ({ name, shade, hex }) => {
  let bg = 'bg-' + name;
  if (shade) bg += '-' + shade;

  return (
    <div className="text-sm flex flex-1 flex-col flex-grow group cursor-pointer relative">
      <div
        className={`w-full h-10 flex items-center justify-center ${bg} border-opacity-50 border-2 ${
          name === 'white' ? 'border-neutral-300' : 'border-transparent'
        } group-hover:border-neutral-100`}
      ></div>
      {/* <span className="text-black capitalize mt-1 ml-2">{name}</span> */}
      <span className="text-neutral-500 ml-2 mt-1 text-xs">{hex}</span>
    </div>
  );
};

export default Page;
