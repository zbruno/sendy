import React, { useState } from 'react';

import Form from '.';

export default {
  title: 'Form',
  component: Form,
  parameters: {
    jest: [],
  },
};

export const form = () => {
  const [email, setEmail, password, setPassword] = useState('');

  return (
    <Form title="A Form!">
      <Form.Field
        disabled={false}
        hasError={false}
        label="Email address"
        labelFor="email"
        placeholder=""
        onChange={event => {
          setEmail(event.target.value);
        }}
        value={email}
        type="email"
      />
      <Form.Field
        disabled={false}
        hasError={false}
        label="Password"
        labelFor="password"
        placeholder=""
        onChange={event => {
          setPassword(event.target.value);
        }}
        value={password}
        type="password"
      />
    </Form>
  );
};
