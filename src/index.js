import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Page = () => {
  const user = { name: 'Max', permalink: 'http://blabla' };
  const avatarSize = '33';

  const content = <Feed user={user} />;

  const userLink = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} avatarSize={avatarSize} />
      </Link>
    </NavigationBar>
  );

  return <PageLayout userLink={userLink} content={content} />;
};

const PageLayout = props => {
  return (
    <div>
      {props.userLink} <br /> {props.content}
    </div>
  );
};

const NavigationBar = props => {
  return <div> {props.children}</div>;
};

const Feed = props => {
  return (
    <div>
      This is {props.user.name} feed:
      <ul>
        <li>1. feed line</li>
        <li>2. feed line</li>
        <li>3. feed line</li>
      </ul>
    </div>
  );
};

const Link = props => {
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
