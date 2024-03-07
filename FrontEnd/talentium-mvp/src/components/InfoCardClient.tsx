import React, { useEffect, useState } from 'react';
import CustomButton from './CustomButton';
import { RiCloseLine } from 'react-icons/ri';
import { ModalProps } from '../interfaces/ModalWindow';

const InfoCardClient: React.FC<ModalProps & { onClose: () => void }> = ({
    title,
    content,
    listItems,
    onClose,
}) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!isVisible) return null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div></div>
            <div className='m-4 w-full max-w-md rounded-lg bg-royal-blue-300 p-4 text-gray-700 shadow-md '>
                <CustomButton
                    onClick={handleClose}
                    customClass={'absolute top-0 right-0 m-2 text-xl '}
                >
                    <RiCloseLine className='h-10 w-10 p-2' />
                </CustomButton>
                <h1 className='mb-2 flex text-2xl font-bold '>{title}</h1>
                <p className='mb-4'>{content}</p>
                <ul className='list-inside list-disc'>
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InfoCardClient;
