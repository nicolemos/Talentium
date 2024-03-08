import { useState } from 'react';

type FaqItemProps = {
    question: string;
    answer: string;
};

const FaqDesplegable = ({ question, answer }: FaqItemProps) => {
    const [isActive, setIsActive] = useState(false);
    const toggleOpening = () => setIsActive((value) => !value);

    return (
        <div
            className={
                isActive
                    ? 'linear-transition active flex flex-col border-b border-[#96a0b5] border-t-[#96a0b5] rounded-lg bg-white/60  pb-3'
                    : 'linear-transition flex flex-col border-b border-[#96a0b5] rounded-lg bg-white/60 '
            }
        >
            {/* question */}
            <div
                onClick={toggleOpening}
                className='z-10 flex cursor-pointer justify-between gap-x-5 p-4'
            >
                <h4 className='tabletL:text-2xl text-ellipsis text-xl font-bold text-[#0d2d4d]'>
                    {question}
                </h4>

                <svg
                    className={
                        isActive
                            ? 'h-8 min-h-8 w-8 min-w-8 -rotate-180 fill-none duration-500 ease-out'
                            : 'h-8 min-h-8 w-8 min-w-8 fill-none duration-500 ease-out'
                    }
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className={
                            isActive
                                ? 'stroke-violet stroke-2 duration-500'
                                : 'stroke-[#6d7d93] stroke-2 duration-500'
                        }
                        d='m24 12-8 8-8-8'
                    />
                </svg>
            </div>

            {/* answer */}
            <div
                className={
                    isActive
                        ? 'max-h-auto duration-300 ease-out'
                        : 'max-h-0 overflow-hidden duration-300 ease-out'
                }
            >
                <p className='tabletL:text-2xl px-6 text-xl font-normal text-[#2d333c]'>
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default FaqDesplegable;