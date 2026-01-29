import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, priority, placeholder, blurDataURL, ...rest } = props;
    return React.createElement('img', {
      ...rest,
      // For boolean props, only pass them if they are strings or if we want to support them as attributes
      ...(fill ? { data_fill: fill.toString() } : {}),
      ...(priority ? { data_priority: priority.toString() } : {}),
    });
  },
}));
