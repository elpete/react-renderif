jest.autoMockOff();

describe('react-renderif', function() {

    describe('renders conditionally on if a variable has a truthy value (what we call "exists")', function() {
        it('tests correctly', function() {
            var React = require('react/addons');
            var TestUtils = React.addons.TestUtils;
            var RenderIf = require('../react-renderif');

            var existsVariable = 123;
            var notExistsVariable = '';

            var shouldRender = TestUtils.renderIntoDocument(
                <RenderIf exists={existsVariable}>
                    <h1>Rendered</h1>
                </RenderIf>
            );

            var renderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldRender, 'h1');
            expect(renderedContent[0].getDOMNode().textContent).toEqual('Rendered');

            var shouldNotRender = TestUtils.renderIntoDocument(
                <RenderIf exists={notExistsVariable}>
                    <h1>Rendered</h1>
                </RenderIf>
            );

            var notRenderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldNotRender, 'h1');
            expect(notRenderedContent).toEqual([]);
        });
    });

    describe('should not render an exists check when given 0', function() {
        it('tests correctly', function() {
            var React = require('react/addons');
            var TestUtils = React.addons.TestUtils;
            var RenderIf = require('../react-renderif');

            var notExistsVariable = 0;

            var shouldNotRender = TestUtils.renderIntoDocument(
                <RenderIf exists={notExistsVariable}>
                    <h1>Rendered</h1>
                </RenderIf>
            );

            var notRenderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldNotRender, 'h1');
            expect(notRenderedContent).toEqual([]);
        });
    });

    describe('renders conditionally on if a variable has a falsey value (what we call "notExists")', function() {
        it('tests correctly', function() {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var RenderIf = require('../react-renderif');

        var notExistsVariable = '';
        var existsVariable = 123;

        var shouldRender = TestUtils.renderIntoDocument(
            <RenderIf notExists={notExistsVariable}>
                <h1>Rendered</h1>
            </RenderIf>
        );

        var renderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldRender, 'h1');
        expect(renderedContent[0].getDOMNode().textContent).toEqual('Rendered');

        var shouldNotRender = TestUtils.renderIntoDocument(
            <RenderIf notExists={existsVariable}>
                <h1>Rendered</h1>
            </RenderIf>
        );

        var notRenderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldNotRender, 'h1');
        expect(notRenderedContent).toEqual([]);
    });
    });

    describe('renders conditionally on if a variable is true (only true, not truthy)', function() {
        it('tests correctly', function() {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var RenderIf = require('../react-renderif');

        var shouldRender = TestUtils.renderIntoDocument(
            <RenderIf isTrue={true}>
                <h1>Rendered</h1>
            </RenderIf>
        );

        var renderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldRender, 'h1');
        expect(renderedContent[0].getDOMNode().textContent).toEqual('Rendered');

        var shouldNotRender = TestUtils.renderIntoDocument(
            <RenderIf isTrue={'hello'}>
                <h1>Rendered</h1>
            </RenderIf>
        );

        var notRenderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldNotRender, 'h1');
        expect(notRenderedContent).toEqual([]);
    });
    });

    describe('renders conditionally on if a variable is false', function() {
        it('tests correctly', function() {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var RenderIf = require('../react-renderif');

        var shouldRender = TestUtils.renderIntoDocument(
            <RenderIf isFalse={false}>
                <h1>Rendered</h1>
            </RenderIf>
        );

        var renderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldRender, 'h1');
        expect(renderedContent[0].getDOMNode().textContent).toEqual('Rendered');

        var shouldNotRender = TestUtils.renderIntoDocument(
            <RenderIf isFalse={0}>
                <h1>Rendered</h1>
            </RenderIf>
        );

        var notRenderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldNotRender, 'h1');
        expect(notRenderedContent).toEqual([]);
    });
    });

    describe('renders conditionally on if a passed in expression is true', function() {
        it('tests correctly', function() {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var RenderIf = require('../react-renderif');

        var shouldRender = TestUtils.renderIntoDocument(
            <RenderIf expression={1 === 1}>
                <h1>Rendered</h1>
            </RenderIf>
        );

        var renderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldRender, 'h1');
        expect(renderedContent[0].getDOMNode().textContent).toEqual('Rendered');

        var shouldNotRender = TestUtils.renderIntoDocument(
            <RenderIf expression={1 === 2}>
                <h1>Rendered</h1>
            </RenderIf>
        );

        var notRenderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldNotRender, 'h1');
        expect(notRenderedContent).toEqual([]);
    });
    });

    describe('renders conditionally on if a passed in callback returns true', function() {
        it('tests correctly', function() {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var RenderIf = require('../react-renderif');

        var shouldRender = TestUtils.renderIntoDocument(
            <RenderIf callback={function() { return 1 === 1; }}>
                <h1>Rendered</h1>
            </RenderIf>
        );

        var renderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldRender, 'h1');
        expect(renderedContent[0].getDOMNode().textContent).toEqual('Rendered');

        var shouldNotRender = TestUtils.renderIntoDocument(
            <RenderIf callback={function() { return 1 === 2; }}>
                <h1>Rendered</h1>
            </RenderIf>
        );

        var notRenderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldNotRender, 'h1');
        expect(notRenderedContent).toEqual([]);
    });
    });

    describe('provides a factory method for creating custom RenderIf wrappers', function() {
        it('tests correctly', function() {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var RenderIf = require('../react-renderif');

        var RenderIfFoo = RenderIf.createCustomMatcher(function(property) {
            return property === 'foo';
        });

        var shouldRender = TestUtils.renderIntoDocument(
            <RenderIfFoo property={'foo'}>
                <h1>Rendered</h1>
            </RenderIfFoo>
        );

        var renderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldRender, 'h1');
        expect(renderedContent[0].getDOMNode().textContent).toEqual('Rendered');

        var shouldNotRender = TestUtils.renderIntoDocument(
            <RenderIfFoo property={'bar'}>
                <h1>Rendered</h1>
            </RenderIfFoo>
        );

        var notRenderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldNotRender, 'h1');
        expect(notRenderedContent).toEqual([]);
    });
    });

    describe('wraps multiple child components to avoid invariant violations', function() {
        it('tests correctly', function() {
            var React = require('react/addons');
            var TestUtils = React.addons.TestUtils;
            var RenderIf = require('../react-renderif');

            var shouldRender = TestUtils.renderIntoDocument(
                <RenderIf callback={function() { return 1 === 1; }}>
                    <h1>Rendered</h1>
                    <h1>Also Rendered</h1>
                </RenderIf>
            );

            var renderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldRender, 'h1');
            expect(renderedContent[0].getDOMNode().textContent).toEqual('Rendered');
            expect(renderedContent[1].getDOMNode().textContent).toEqual('Also Rendered');

            var renderedWrapper = TestUtils.scryRenderedDOMComponentsWithTag(shouldRender, 'div');
            expect(renderedWrapper.length).toEqual(1);
        });
    });

});
