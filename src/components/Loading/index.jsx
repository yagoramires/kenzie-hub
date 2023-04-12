import React from 'react';
import { LoadingCircle, LoadingContainer } from './styles';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingCircle>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoadingCircle>
    </LoadingContainer>
  );
};

export default Loading;
