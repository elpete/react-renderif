var React = require('react');

var RenderIf = React.createClass({

    statics: {
        createCustomMatcher: function(callback) {
            return React.createClass({
                render: function() {
                    return (
                        <RenderIf property={this.props.property} callback={callback}>
                            {this.props.children}
                        </RenderIf>
                    );
                }
            })
        }
    },

    propTypes: {
        exists: React.PropTypes.any,
        notExists: React.PropTypes.any,
        isTrue: React.PropTypes.bool,
        isFalse: React.PropTypes.bool,
        expression: React.PropTypes.bool,
        callback: React.PropTypes.func,
        property: React.PropTypes.any
    },

    getDefaultProps: function() {
        return {
            exists: null,
            notExists: null,
            isTrue: null,
            isFalse: null,
            expression: null,
            callback: null,
            property: null
        };
    },

    shouldRender: function() {
        if (this.props.callback !== null &&
            this.props.callback instanceof Function &&
            !this.props.callback(this.props.property)) return false;

        if (this.props.exists !== null && !Boolean(this.props.exists)) return false;
        if (this.props.notExists !== null && Boolean(this.props.notExists)) return false;
        if (this.props.isTrue !== null && this.props.isTrue !== true) return false;
        if (this.props.isFalse !== null && this.props.isFalse !== false) return false;
        if (this.props.expression !== null && !this.props.expression) return false;

        return true;
    },

    render: function() {
        if (!this.shouldRender()) return null;

        if (this.props.children.length > 1) {
            return <div>{this.props.children}</div>;
        }

        return this.props.children;
    }

});

module.exports = RenderIf;
