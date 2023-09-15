import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 text-xl font-bold text-center">
            <h1>Bookmarks Your Book</h1>
            <p>Reading Time: {readingTime}</p>
            <p>bookmarks:{bookmarks.length}</p>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};


// to fix props error>> install npm props
Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number,
}

export default Bookmarks;