import PropTypes from 'prop-types';
import SChoices from './style';

const Choices = ({ text }) => {
  return (
    <SChoices>
      <p>{text}</p>
    </SChoices>
  );
};

export default Choices;

Choices.propTypes = {
  text: PropTypes.string.isRequired,
};
