import React from 'react'

export function ButtonBg({ children }: {
    children: React.ReactNode;
}) {
    return (
        <button className='flex items-center rounded-xl px-5 py-3 border-white text-white hover:bg-[#45464A] border-solid border-[1px] text-sm'>
            <span>
                {children}
            </span>
            <span className='ml-5'>
                <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon dig-UIIcon--standard" width="24" height="24" role="presentation" focusable="false"><path d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" vector-effect="non-scaling-stroke"></path></svg>
            </span>
        </button>
    )
}

export function ButtonWithoutBg({ children, variant = 'black', icon }: {
    children: React.ReactNode;
    variant?: 'black' | 'white';
    icon?: boolean
}) {
    const buttonClass = variant === 'black' ? 'text-black border-black' : 'text-white border-white/6 hover:border-white';

    return (
        <button className={`${buttonClass} border-b border-solid flex items-center text-sm`}>
            <span>
                {children}
            </span>
            {icon && (
                <span className='ml-1'>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="dig-UIIcon dig-UIIcon--standard"
                        width="20"
                        height="20"
                        role="presentation"
                        focusable="false"
                    >
                        <path
                            d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                </span>
            )}
        </button>
    );
}
