var React = require('react');

var RenderIf = React.createClass({displayName: "RenderIf",

    statics: {
        createCustomMatcher: function(callback) {
            return React.createClass({
                render: function() {
                    return (
                        React.createElement(RenderIf, {property: this.props.property, callback: callback}, 
                            this.props.children
                        )
                    );
                }
            })
        }
    },

    getDefaultProps: function() {
        return {
            exists: null,
            isTrue: null,
            isFalse: null,
            expression: null,
            callback: null
        };
    },

    shouldRender: function() {
        if (this.props.callback !== null &&
            this.props.callback instanceof Function &&
            !this.props.callback(this.props.property)) return false;

        if (this.props.exists !== null && !this.props.exists) return false;
        if (this.props.isTrue !== null && !this.props.isTrue === true) return false;
        if (this.props.isFalse !== null && !this.props.isFalse === false) return false;
        if (this.props.expression !== null && !this.props.expression) return false;

        return true;
    },

    render: function() {
        if (!this.shouldRender()) return null;

        return this.props.children;
    }

});

module.exports = RenderIf;
