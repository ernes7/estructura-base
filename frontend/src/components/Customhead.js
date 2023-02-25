import Head from 'next/head'

export default function CustomHead({title, description}) {
  return (
    <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

