import PropTypes from 'prop-types';
import SChapters from './style';

const Chapters = ({ id, text }) => {
  return (
    <SChapters>
      <h2 className="h2-chapters">{id}</h2>
      <p className="p-chapters">{text}</p>
    </SChapters>
  );
};

Chapters.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Chapters;
