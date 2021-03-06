import PropTypes from "prop-types";

// function Title({ value }) {
//   return <h2>{value}</h2>;
// }
const Title = ({ value }) => {
  return <h2>{value}</h2>;
};
export default Title;
Title.defaultProps = {
  value: "title",
};
Title.propTypes = {
  value: PropTypes.string,
};
