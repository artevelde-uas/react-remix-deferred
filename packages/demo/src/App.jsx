import React from 'react';
import { Container, Header, Item, Tab } from 'semantic-ui-react';

import MyComponent from 'my-react-component';


const MyComponentExamples = () => (
    <Item.Group>
        <Item>
            <Item.Content>
                <Item.Header>My Component</Item.Header>
                <Item.Meta>My component with default settings</Item.Meta>
                <Item.Description>
                    <MyComponent />
                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
);

const panes = [
    { menuItem: 'MyComponent', render: () => <MyComponentExamples /> }
];

export default () => (
    <Container text>
        <Header as='h1'>My React Component</Header>
        <Tab panes={panes} />
    </Container>
);
