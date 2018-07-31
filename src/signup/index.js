import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { signupRequest, signupCancel } from './actions';
import config from '../social-config.json';

// Signin.propTypes = {
// 	classes: PropTypes.object.isRequired,
// 	view: PropTypes.string.isRequired,
// 	modalRequest: PropTypes.func.isRequired
// }
//

const SocialSignInButton = ({
  buttonCSSClass, iconCSSClass, textButton, onClick, channel
}) => {
  const FONTAWESOME_ICONS = {
    facebook: ['fab', 'facebook'],
    google: ['fab', 'google']
  };

  return (
    <Button
      variant="outlined"
      className={buttonCSSClass}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={FONTAWESOME_ICONS[channel]}
        className={iconCSSClass}
      />
      { textButton[channel] }
    </Button>
  );
};

const Signup = (props) => {
  const { classes, signupRequest, textButton } = props;

  return (
    <div className={`${classes.container} ${classes.buttonGroup}`}>
      <FacebookLogin
        appId={config.FACEBOOK_APP_ID}
        cookie
        autoLoad
        fields="name,email,picture.width(800).height(800)"
        scope="public_profile"
        callback={response => signupRequest({ response, channel: 'facebook' })}
        onFailure={response => console.log('cancel response')}
        render={renderProps => (
          <SocialSignInButton
            channel="facebook"
            buttonCSSClass={classes.social}
            iconCSSClass={classes.icon}
            onClick={renderProps.onClick}
            textButton={textButton}
          />
        )}
      />

      <SocialSignInButton
        channel="google"
        buttonCSSClass={classes.social}
        iconCSSClass={classes.icon}
        textButton={textButton}
      />
    </div>
  );
};

export default connect(null, { signupRequest, signupCancel })(Signup);
