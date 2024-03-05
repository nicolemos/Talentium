interface LoadingProps {
    isLoading: boolean;
}

const LoadingPage: React.FC<LoadingProps> = ({ isLoading }) => {
    return isLoading ? (
        <div className='flex h-[90vh] w-full items-center justify-center rounded-md border bg-blue-300 bg-opacity-15 shadow-md '>
            <div className='h-20 w-20 animate-spin rounded-full border-b-4'></div>
        </div>
    ) : null;
};

export default LoadingPage;
