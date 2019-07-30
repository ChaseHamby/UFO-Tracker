
import PropTypes from 'prop-types';

const propertiesShape = PropTypes.shape({
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  shape: PropTypes.string.isRequired
});

export default propertiesShape;