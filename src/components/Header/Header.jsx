import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 max-w-5xl mx-auto'>
            <h1 className="text-3xl font-bold text-red-400">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;