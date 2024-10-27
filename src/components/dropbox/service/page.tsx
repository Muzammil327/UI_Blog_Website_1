import Link from 'next/link'
import React from 'react'

export default function Service() {
    return (
        <section className='py-20'>
            <h4 className='text-center text-4xl mb-8 mx-1'>Dropbox empowers across industries</h4>
            <div className="mx-auto xl:px-15 lg:px-12 md:px-9 sm:px-6 px-3 py-5 grid lg:grid-cols-2 grid-cols-1 gap-4">
                {data.map((data: any) => {
                    return (
                        <div className="servicecard flex md:h-full w-full">
                            <div className="img md:w-1/3 w-full md:block hidden h-auto">
                                <img src={data.img} alt="" className='rounded-tl-xl rounded-bl-xl h-full w-full object-cover' />
                            </div>
                            <div className="body md:w-2/3 w-full p-4 bg-[#F7F5F2] rounded-xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-xl md:rounded-br-xl h-full">
                                <h5 className='font-semibold text-lg my-2'>{data.title}</h5>
                                <p className='text-sm mb-4 text-[#8d8a85]'>{data.description}</p>
                                <Link href='' className='flex items-center gap-1 text-sm font-bold'>
                                    <span className='border-b border-solid border-black'>
                                        Learn More
                                    </span>
                                    <span>
                                        <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon dig-UIIcon--standard" width="24" height="24" role="presentation" focusable="false">
                                            <path d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

const data = [
    {
        id: 0,
        title: 'Construction',
        description: 'With Dropbox for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files from anywhere.',
        img: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/construction/construction-hero@2x.jpg?id=dbfc08de-234c-40af-949d-7e176ad7d582&width=1600&output_type=webp'
    },
    {
        id: 1,
        title: 'Media',
        description: 'Create a flexible media workspace that connects your teams, content, and tools together.',
        img: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/creative-tools/The-Luupe-Genya-Oneall.jpg?id=bc0d3114-b68a-41e7-837b-262d86f2d472&output_type=webp'
    },
    {
        id: 2,
        title: 'Technology',
        description: 'Product ideation to development, streamline technology workflows so you can focus on turning great ideas into products people love.',
        img: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/technology/GettyImages-1139238082.jpg?id=7e97fb44-2356-46b7-8f3d-621a5f98072e&width=1600&output_type=webp'
    },
    {
        id: 3,
        title: 'Professional services',
        description: 'Make clients happier with easy collaboration, boosted productivity, and one organized place to get things done.',
        img: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/professional-services/etgcNMmB.jpeg?id=e7016484-98bf-4757-acad-25618e33788e&width=1600&output_type=webp'
    },
    {
        id: 4,
        title: 'Manufacturing',
        description: 'Design and engineering teams easily collaborate, managing complex reviews and sharing large files seamlessly.',
        img: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/manufacturing/GettyImages-900253108.jpg?id=560cbf20-b4fc-4ec9-8769-8a5e9ad1b223&width=1600&output_type=webp'
    },
    {
        id: 5,
        title: 'Education',
        description: 'Power student learning, faculty research, and staff operations on Dropbox Education’s secure cloud collaboration platform.',
        img: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/education/education-hero@2x.jpg?id=40129999-5c0d-45fc-800e-134eecfd175e&width=1600&output_type=webp'
    }
]
