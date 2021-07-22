import PropTypes from 'prop-types';
import SChoices from './style';

const Choices = ({ text }) => {
  return (
    <SChoices>
      <p className="p-choices">{text}</p>
    </SChoices>
  );
};

Choices.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Choices;
