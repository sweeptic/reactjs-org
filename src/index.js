import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Page = () => {
  const user = 'Max';
  const avatarSize = '33';
  const content = <Feed user={user} />;

  const topBar = (
    <NavigationBar>
      <Link>
        <Avatar user={user} size={avatarSize} />
      </Link>
    </NavigationBar>
  );

  return <PageLayout topBar={topBar} content={content} />;
};

const PageLayout = props => {
  const { topBar, content } = props;
  return (
    <div>
      {topBar} <br /> {content}
    </div>
  );
};

const NavigationBar = props => {
  return <div>{props.children}</div>;
};

const Feed = props => {
  return (
    <div>
      This is {props.user} feeds:
      <ul>
        <li>feed line 1 </li>
        <li>feed line 2 </li>
        <li>feed line 3 </li>
      </ul>
    </div>
  );
};

const Link = props => {
  return <div>{props.children}</div>;
};

const Avatar = props => {
  const { user, size } = props;
  return (
    <div>
      the user is: {user}, avatar size is : {size}
    </div>
  );
};

ReactDOM.render(
  <div>
    <Page />
  </div>,
  document.getElementById('root')
);
