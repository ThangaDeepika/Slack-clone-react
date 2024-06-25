// src/components/RegisterComponent/RegisterComponent.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../../services/authService';
import { Grid, Form, Segment, Header, Button, Message } from 'semantic-ui-react';
import './RegisterComponent.css';
import slackLogo from '../../assets/slack-logo.png';

const RegisterComponent = () => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setLoading(true);
      try {
        await registerUser(user.email, user.password);
        navigate('/');
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }
  };

  const isFormValid = () => {
    if (!user.email || !user.password || !user.passwordConfirmation) {
      setError('Please fill in all fields.');
      return false;
    }
    if (user.password !== user.passwordConfirmation) {
      setError('Passwords do not match.');
      return false;
    }
    return true;
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" className="login-form">
      <Grid.Column className="grid-column">
        <Header as="h2" icon textAlign="center" className="header">
          <img src={slackLogo} alt="Slack Logo" />
          Register for Slack Clone
        </Header>
        <Form onSubmit={handleSubmit} size="large">
          <Segment stacked className="form-segment">
            <Form.Input
              fluid
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email Address"
              onChange={handleChange}
              value={user.email}
              type="email"
              className="form-input"
            />
            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
              type="password"
              className="form-input"
            />
            <Form.Input
              fluid
              name="passwordConfirmation"
              icon="repeat"
              iconPosition="left"
              placeholder="Password Confirmation"
              onChange={handleChange}
              value={user.passwordConfirmation}
              type="password"
              className="form-input"
            />
            <Button
              disabled={loading}
              className={loading ? 'loading submit-button' : 'submit-button'}
              fluid
              size="large"
            >
              Submit
            </Button>
          </Segment>
        </Form>
        {error && (
          <Message error>
            <h3>Error</h3>
            {error}
          </Message>
        )}
        <Message className="message">
          Already have an account? <Link to="/">Login here</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default RegisterComponent;
