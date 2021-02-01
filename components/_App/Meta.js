import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <title>{title}</title>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon//apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon//favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon//favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicon/safari-pinned-tab.svg'
        color='#5bbad5'
      />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff'></meta>
      <meta name='msapplication-TileColor' content='#00df94' />
      <meta name='theme-color' content='#00df94' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' type='text/css' href='/styles.css' />
      <link rel='stylesheet' type='text/css' href='/nprogress.css' />
      <link
        rel='stylesheet'
        href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css'
      />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Pay What You Want',
  keywords: 'shop, pay what you want',
  description: 'Shopping for community',
};

export default Meta;
