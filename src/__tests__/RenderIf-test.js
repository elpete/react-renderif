jest.dontMock('../react-renderif');

describe('react-renderif', function() {

    var React, TestUtils, RenderIf;

    beforeEach(function() {
        React = require('react/addons');
        TestUtils = React.addons.TestUtils;
        RenderIf = require('../react-renderif');
    });

    it('renders conditionally on if a variable has a truthy value (what we call "exists")', function() {
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

    iit('should not render an exists check when given 0', function() {
        var notExistsVariable = '0';

        var shouldNotRender = TestUtils.renderIntoDocument(
            <RenderIf exists={notExistsVariable}>
                <h1>Rendered</h1>
            </RenderIf>
        );

        var notRenderedContent = TestUtils.scryRenderedDOMComponentsWithTag(shouldNotRender, 'h1');
        expect(notRenderedContent).toEqual([]);
    });

    it('renders conditionally on if a variable has a falsey value (what we call "notExists")', function() {
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

    it('renders conditionally on if a variable is true (only true, not truthy)', function() {
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

    it('renders conditionally on if a variable is false', function() {
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

    it('renders conditionally on if a passed in expression is true', function() {
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

    it('renders conditionally on if a passed in callback returns true', function() {
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

    it('provides a factory method for creating custom RenderIf wrappers', function() {
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