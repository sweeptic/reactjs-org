import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Page = () => {
  const user = { name: 'Max', permalink: 'http://blabla' };
  const avatarSize = '33';

  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} avatarSize={avatarSize} />
    </Link>
  );

  return <PageLayout userLink={userLink} />;
};

const PageLayout = props => {
  const { userLink } = props;
  return <NavigationBar userLink={userLink} />;
};

const NavigationBar = props => {
  return <div> {props.userLink}</div>;
};

const Link = props => {
  console.log(props);

  return (
    <div>
      {props.href}
      <br />
      {props.children}
    </div>
  );
};

const Avatar = props => {
  const { user, avatarSize } = props;
  return (
    <div>
      The user is {user.name}, avatar size is {avatarSize}
    </div>
  );
};

ReactDOM.render(
  <div>
    <Page />
  </div>,
  document.getElementById('root')
);
