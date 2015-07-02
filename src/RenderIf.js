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

    getDefaultProps: function() {
        return {
            exists: null,
            true: null,
            false: null,
            expression: null,
            callback: null
        };
    },

    shouldRender: function() {
        if (this.props.callback !== null &&
            this.props.callback instanceof Function &&
            !this.props.callback(this.props.property)) return false;

        var propValues = [this.props.exists, this.props.true, !this.props.false, this.props.expression];

        return ! propValues.some(function(propValue) {
            return (propValue !== null && !propValue);
        });
    },

    render: function() {
        if (!this.shouldRender()) return null;

        return this.props.children;
    }

});

module.exports = RenderIf;