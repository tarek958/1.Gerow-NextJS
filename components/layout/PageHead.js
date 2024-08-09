import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Atlantis Conseil"}
                </title>
            </Head>
        </>
    )
}

export default PageHead