import React, { Component } from 'react';
import loadable from '@loadable/component'; //에러 발생했을때만 불러오면 되니까 지연로딩 형태로

const ErrorDisplay = loadable(() => import('../components/ErrorDisplay'));
//에러가 발생했을때만 ErrorDisplay안에 children문구를 불러온다.
class ErrorPage extends Component {
  state = {
    message: '',
  };
  componentDidCatch(error, info) {
    if (error) {
      this.setState({ message: error.message }); //에러발생
      console.error(error, info);//콘솔로 에러메시지 확인
    }
  }

  render() {
    const { children } = this.props;
    const { message } = this.state;
    //에러가 있으면 errordisplay사이의 메시지를 보여주고
    //에러가 없으면 원래 보여주고자 했던 페이지를 받아온다.
    return message ? <ErrorDisplay>{message}</ErrorDisplay> : children;
  }
}

export default React.memo(ErrorPage);
