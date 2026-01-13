import { render } from '@testing-library/react';
import { Scene, Canvas } from './Scene';
import React from 'react';
import { createRoot } from '@react-three/fiber';

vi.mock('@react-three/fiber', () => ({
  createRoot: vi.fn(() => ({
    configure: vi.fn(),
    render: vi.fn(),
  })),
  events: {},
  extend: vi.fn(),
  useFrame: (callback: any) => {
    callback({}, 0.016);
  },
}));

function MockMaterial() {}

vi.mock('@react-three/drei', () => {
  return {
    Plane: ({ children }: { children: React.ReactNode }) => <div data-testid="plane">{children}</div>,
    useAspect: vi.fn(() => [1, 1, 1]),
    useTexture: vi.fn(() => [{}, {}, {}, {}]),
    shaderMaterial: vi.fn(() => MockMaterial),
  };
});

vi.mock('@/layout/FallingLeaves', () => ({
  FallingLeaves: () => <div data-testid="falling-leaves" />,
}));

describe('Scene', () => {
  it('renders a canvas element', () => {
    const { container } = render(<Scene />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('Canvas calls onError when an error occurs in useLayoutEffect', () => {
    const onError = vi.fn();

    // We need to trigger an error in useLayoutEffect
    // createRoot is mocked, let's make it throw
    vi.mocked(createRoot).mockImplementationOnce(() => {
      throw new Error('Test Error');
    });

    render(
      <Canvas onError={onError}>
        <div>Test</div>
      </Canvas>,
    );
    expect(onError).toHaveBeenCalledWith(expect.any(Error));
  });
});
