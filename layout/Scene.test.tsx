import { render } from '@testing-library/react';
import { Scene } from './Scene';

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
});
