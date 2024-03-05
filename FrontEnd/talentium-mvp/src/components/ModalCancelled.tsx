import React, { useEffect } from 'react';
import { ModalProps } from '../interfaces/ModalWindow';
import CustomButton from './CustomButton';
import { RiCloseLine } from 'react-icons/ri';

const ModalCancelled: React.FC<
    ModalProps & { isOpen: boolean; onClose: () => void }
> = ({ isOpen, title, content, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div></div>
            <div className='m-4 w-full max-w-md rounded-lg bg-royal-blue-300 p-4 text-gray-700 shadow-md '>
                <CustomButton
                    onClick={onClose}
                    customClass={'absolute top-0 right-0 m-2 text-xl '}
                >
                    <RiCloseLine className='h-10 w-10 p-2' />
                </CustomButton>
                <h1 className='mb-2 flex text-2xl font-bold '>{title}</h1>
                <p className='mb-4'>{content}</p>
            </div>
        </div>
    );
};

export default ModalCancelled;
