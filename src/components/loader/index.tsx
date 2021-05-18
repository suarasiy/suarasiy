import React from 'react';

import { loaderProps } from './interface/interface';

const Index: React.FC<loaderProps> = ({ ...loaderProps }) => {
  const absoluteNumberHandler = (value: number, maxValue: number): number => {
    return (value / maxValue) * 100;
  };
  return (
    <div className="loader-container">
      <span
        className="loader-fill"
        style={{
          width:
            absoluteNumberHandler(loaderProps.value, loaderProps.maxValue) !==
              undefined || null
              ? absoluteNumberHandler(loaderProps.value, loaderProps.maxValue) +
                '%'
              : '0%',
        }}
      ></span>
      <span className="loader-work-process">
        {absoluteNumberHandler(loaderProps.value, loaderProps.maxValue)}%
        Completed
      </span>
      <span className="loader-work-process">
        {loaderProps.value} of {loaderProps.maxValue}
      </span>
    </div>
  );
};

export default Index;
