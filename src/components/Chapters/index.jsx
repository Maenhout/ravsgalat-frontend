import PropTypes from 'prop-types';
import SChapters from './style';

const Chapters = ({ id, text }) => {
  return (
    <SChapters>
      <h2>Chapitre {id}</h2>
      <p>{text}</p>
    </SChapters>
  );
};

export default Chapters;

Chapters.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
