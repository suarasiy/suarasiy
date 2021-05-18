import React, { useState } from 'react';

import { spinnerProps } from './interface/interface';

const Index: React.FC<spinnerProps> = ({ ...spinnerProps }) => {
  const [spinner] = useState(spinnerProps);
  return <div className={'spinner-container'}></div>;
};

export default Index;
