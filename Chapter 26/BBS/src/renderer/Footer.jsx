import React from 'react';
import { withRouter } from 'react-router-dom';

const Footer = (props) => {
  const { history, location } = props;
  const goBack = () => {
    history.push('/threads');
  };
  return (
    <footer className="toolbar toolbar-footer fixed-bottom">
      <div className="toolbar-actions">
        {location.pathname === '/threads'
                    ? null
                    : (<button className="btn btn-default" onClick={() => goBack()}>
                        返回
                    </button>)
                }
      </div>
    </footer>
  );
};

export default withRouter(Footer);
