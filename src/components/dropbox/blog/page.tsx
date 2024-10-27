import Link from 'next/link'
import React from 'react'

interface IpropsBlog {
    id: number;
    title: string;
    description: string;
    img: string;
    link: string;
}

export default function Blog() {
    return (
        <section className='py-40 bg-[#F7F5F2]'>
            <h4 className='text-center text-4xl mx-1 mb-12'>Discover, learn, thrive with Dropbox</h4>
            <div className="mx-auto xl:px-15 lg:px-12 md:px-9 sm:px-6 px-3 py-5">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {data.map((data: IpropsBlog) => {
                        return (
                            <div className="blogcard bg-white rounded-lg p-2" key={data.id}>
                                <div className="img">
                                    <img src={data.img} alt={data.title} className='rounded-lg' />
                                </div>
                                <div className="body px-2 py-5">
                                    <span className='font-semibold text-sm text-[#7D786F]'>Articles</span>
                                    <h5 className="title my-4 text-lg leading-tight font-semibold">{data.title}</h5>
                                    <p className="text-[#908B83] text-sm">{data.description}</p>
                                    <button className="readmore mt-4">
                                        <Link href={data.link} className='border-b border-solid font-semibold text-sm border-black'>Read article</Link>
                                    </button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
            <Link href="/" className='flex items-center justify-center mt-12 text-[#0061FE]'> View more resources</Link>
        </section>
    )
}

const data: IpropsBlog[] = [
    {
        id: 0,
        title: 'Study: Here’s how many hours we lose to distraction—and how to get our focus back',
        description: 'For our study, Economist Impact included knowledge workers globally—and found that, no matter where people work, there’s a significant cost to lost focus around the world.',
        img: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/blog-cards/Asset-Distraction-Article.png?id=13349693-d080-4ae6-8498-7b58b46dfeb9&output_type=webp',
        link: '/'
    },
    {
        id: 1,
        title: 'Study: Here’s how many hours we lose to distraction—and how to get our focus back',
        description: 'For our study, Economist Impact included knowledge workers globally—and found that, no matter where people work, there’s a significant cost to lost focus around the world.',
        img: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/blog-cards/Asset-McLaren-Article.png?id=eb21f94b-ce63-462f-928a-e30761ba9321&output_type=webp',
        link: '/'
    },
    {
        id: 2,
        title: 'Study: Here’s how many hours we lose to distraction—and how to get our focus back',
        description: 'For our study, Economist Impact included knowledge workers globally—and found that, no matter where people work, there’s a significant cost to lost focus around the world.',
        img: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/blog-cards/Asset-Photo-Sharing-Article.png?id=3d76b7bb-6145-4f8d-87cf-d156eff5de2d&output_type=webp',
        link: '/'
    }
]
