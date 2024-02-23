
  interface ButtonProps {
    content: string;
    href?: string;
  }
  
  const GradientButton: React.FC<ButtonProps> = ({ content, href }) => {
    return (
        <a
            href={href}
            className="transition duration-200 ease-in-out cursor-pointer bg-gradient-to-b from-white/60 to-white/50 hover:shadow-lg hover:bg-white p-[0.3rem] rounded-xl text-sm border border-solid "
        >
            {content}
        </a>
    );
} 
  
export default GradientButton;