import PropTypes from 'prop-types';
import SButton from './style';

const Button = ({ text }) => {
  return (
    <SButton>
      <button className="p-button" type="button">
        {text}
      </button>
    </SButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
