import PropTypes from "prop-types";
const { Button } = require("@mantine/core");

function Hello({ text }) {
    return (
        <Button variant="outline" color="indigo">{text}</Button>
    )
}


Hello.defaultProps = { text: "Hello" }
Hello.propTypes = { text: PropTypes.string.isRequired }

export default Hello;