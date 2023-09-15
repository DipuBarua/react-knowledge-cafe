import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className=" bg-gray-300 mx-5 p-4 rounded-sm text-center">
            <p>{title}</p>
        </div>
    );
};

// to fix props error>> install npm props
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;