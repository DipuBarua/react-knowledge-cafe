import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    console.log(blog);
    return (
        <div className=' mb-20 space-y-5'>
            <img src={cover} alt={`this is cover pic ${title}`} />
            <div className='flex justify-between'>
                <div className=' flex gap-5'>
                    <img className=' w-14' src={author_img} alt="" />
                    <div>
                        <p className=' text-2xl'>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read </span>

                    <button onClick={() => handleAddToBookmark(blog)} className=' text-xl text-red-600'><FaRegBookmark /></button>
                </div>
            </div>
            <h1>title: {title}</h1>
            <p>
                {
                    hashtags.map((tag, idx) => <span key={idx}> <a href=''>{tag}</a></span>)
                }
            </p>

            <button onClick={() => handleReadingTime(reading_time)} className=' text-blue-600 underline'>Mark As Read</button>
        </div>
    );
};

// to fix props error>> install npm props
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func

}
export default Blog;