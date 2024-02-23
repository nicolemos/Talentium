interface ButtonProps {    children: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button
            type='submit'
            className='transition duration-200 ease-in-out cursor-pointer bg-gradient-to-b from-white/60 to-white/50 hover:shadow-lg hover:bg-white p-[0.3rem] rounded-xl text-sm border border-solid '
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CustomButton;
