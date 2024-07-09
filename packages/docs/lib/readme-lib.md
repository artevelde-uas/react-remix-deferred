# Semantic UI React Multirange Slider

[![npm](https://img.shields.io/npm/v/my-react-component.svg)](https://www.npmjs.com/package/my-react-component)
[![license](https://img.shields.io/github/license/artevelde-uas/my-react-component.svg)](https://spdx.org/licenses/ISC)
[![downloads](https://img.shields.io/npm/dt/my-react-component.svg)](https://www.npmjs.com/package/my-react-component)

![Semantic UI logo](https://raw.githubusercontent.com/artevelde-uas/my-react-component/master/docs/semantic-ui-logo.png)

Multirange slider control for [Semantic UI React](https://react.semantic-ui.com/)

## Prerequisites

```json
{
  "react": "*",
  "react-dom": "*",
  "semantic-ui-react": "*"
}
```

## Installation

Using NPM:

```shell
npm install my-react-component
```

or Yarn:

```shell
yarn add my-react-component
```

## Usage

In your application root, first import the component styles:

```jsx
import 'semantic-ui-css/semantic.min.css';
import 'my-react-component/styles.css';
```

Then import the slider component in your code:

```jsx
import MyComponent from 'my-react-component';

export default () => {

    // Continuesly fired while a value changes
    function handleInput(event, data) {
        /* `data` format:
            {
                index,         // -> The index of the changed thumb
                value,         // -> The current value of the changed thumb
                previousValue, // -> The previous value of the changed thumb
                initialValue   // -> The initial value of the changed thumb
            }
        */
    }

    // Fired after a value has changed
    function handleChange(event, data) {
        /* `data` format:
            {
                index,         // -> The index of the changed thumb
                value,         // -> The current value of the changed thumb
                initialValue   // -> The initial value of the changed thumb,
                values         // -> The current array of values
            }
        */
    }

    return (
        <MyComponent
            min={20}
            max={150}
            step={10}
            values={[40, 70, 120]}
            trackColor='orange'
            onInput={handleInput}
            onChange={handleChange}
        />
    );
};
```

### Simple Slider Examples

#### Slider without options

![Example image of simple slider without options](https://raw.githubusercontent.com/artevelde-uas/my-react-component/master/docs/example-simple-1.png)

```jsx
import { SimpleSlider } from 'my-react-component';

export default () => (
    <SimpleSlider />
);
```

#### Slider with two thumbs

![Example image of simple slider with value set](https://raw.githubusercontent.com/artevelde-uas/my-react-component/master/docs/example-simple-2.png)

```jsx
import { SimpleSlider } from 'my-react-component';

export default () => (
    <SimpleSlider
        value={40}
    />
);
```

#### Slider with blue track

![Example image of simple slider with blue track](https://raw.githubusercontent.com/artevelde-uas/my-react-component/master/docs/example-simple-3.png)

```jsx
import { SimpleSlider } from 'my-react-component';

export default () => (
    <SimpleSlider
        value={40}
        trackColor='blue'
    />
);
```

### Multirange Slider Example

#### Multirange slider with two thumbs

![Example image of multirange slider with two thumbs](https://raw.githubusercontent.com/artevelde-uas/my-react-component/master/docs/example-multi-1.png)

```jsx
import MyComponent from 'my-react-component';

export default () => (
    <MyComponent
        values={[20, 60]}
    />
);
```

#### Multirange slider with four thumbs

![Example image of multirange slider with four thumbs](https://raw.githubusercontent.com/artevelde-uas/my-react-component/master/docs/example-multi-2.png)

```jsx
import MyComponent from 'my-react-component';

export default () => (
    <MyComponent
        values={[10, 30, 50, 80]}
    />
);
```

#### Multirange slider with three thumbs and green track

![Example image of multirange slider with three thumbs and green track](https://raw.githubusercontent.com/artevelde-uas/my-react-component/master/docs/example-multi-3.png)

```jsx
import MyComponent from 'my-react-component';

export default () => (
    <MyComponent
        values={[10, 40, 80]}
        trackColor='green'
    />
);
```

## More info

See [GitHub](https://github.com/artevelde-uas/my-react-component)
