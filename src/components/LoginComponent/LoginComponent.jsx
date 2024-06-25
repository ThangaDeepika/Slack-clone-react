// src/components/LoginComponent/LoginComponent.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../services/authService';
import { Grid, Form, Segment, Header, Button, Message } from 'semantic-ui-react';
import './LoginComponent.css';
import slackLogo from '../../assets/slack-logo.png';

const LoginComponent = ({ onLogin }) => {
  const [user, setUser] = useState({ email: '', password: '' });
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
        await loginUser(user.email, user.password);
        onLogin();
        navigate('/app');
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }
  };

  const isFormValid = () => user.email && user.password;

  return (
    <Grid textAlign="center" verticalAlign="middle" className="login-form">
      <Grid.Column className="grid-column">
        <Header as="h2" icon textAlign="center" className="header">
          <img src={slackLogo} alt="Slack Logo" />
          Login to Slack Clone
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
          Don't have an account? <Link to="/register">Register here</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginComponent;
