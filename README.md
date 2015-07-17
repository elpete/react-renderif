# react-renderif

### Installation
```js
npm install react-renderif
```

### Usage
```jsx
var React = require('react');
var RenderIf = require('react-renderif');

/**
 * Test if a value exists
 * (Essentially, test if the value is truthy.)
 *
 * @prop exists
 * @type {React.PropTypes.any}
 */
<RenderIf exists={existsVariable}>
    <h1>Rendered</h1>
</RenderIf>

/**
 * Test if a value does not exists
 * (Essentially, test if the value is falsey.)
 *
 * @prop notExists
 * @type {React.PropTypes.any}
 */
<RenderIf notExists={existsVariable}>
    <h1>Rendered</h1>
</RenderIf>

/**
 * Test if a value is true
 * (The value must === true, not just be truthy)
 * (Use 'exists' for truthy checks.)
 *
 * @prop isTrue
 * @type {React.PropTypes.bool}
 */
<RenderIf isTrue={trueVariable}>
    <h1>Rendered</h1>
</RenderIf>

/**
 * Test if a value is false
 * (The value must === false, not just be falsey.)
 * (Use 'notExists' for falsey checks.)
 *
 * @prop isFalse
 * @type {React.PropTypes.bool}
 */
<RenderIf isFalse={falseVariable}>
    <h1>Rendered</h1>
</RenderIf>
        
/**
 * Test if a passed in expression is true.
 * The expression must evaluate to a truthy or falsey value.
 * (This property is essentially the same as 'exists' or 'notExists'.)
 * (It can make your component more readable in some situations.)
 *
 * @prop expression
 * @type {React.PropTypes.any}
 */
<RenderIf expression={1 === 1}>
    <h1>Rendered</h1>
</RenderIf>

/**
 * Test if a passed in callback returns true.
 * The callback must return a truthy or falsey value.
 *
 * @prop callback
 * @type {React.PropTypes.func}
 */
<RenderIf callback={function() { return 1 === 1; }}>
    <h1>Rendered</h1>
</RenderIf>
```

### Custom Matchers
***react-renderif*** allows you to create a custom wrapper component with a callback prebound.
This callback will be passed a `property` prop that can be used if you desire. 

```jsx
var React = require('react');
var RenderIf = require('react-renderif');

var RenderIfFoo = RenderIf.createCustomMatcher(function(property) {
    return property === 'foo';
});

// ...
<RenderIfFoo property={'foo'}>
    <h1>Rendered</h1>
</RenderIfFoo>
// ...
```

### Testing / Building / Contributing
```js
// Testing
npm test

// Building
npm install
npm run build
```
