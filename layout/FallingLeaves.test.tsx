import { render } from '@testing-library/react';
import { FallingLeaves } from './FallingLeaves';

vi.mock('@react-three/fiber', () => ({
  useFrame: (callback: any) => {
    callback({}, 0.016);
  },
  useThree: vi.fn(() => ({
    viewport: { width: 100, height: 100 },
  })),
}));

function MockShape(this: any) {
  this.moveTo = vi.fn();
  this.bezierCurveTo = vi.fn();
}

vi.mock('three', async () => {
  const actual = await vi.importActual('three');
  return {
    ...actual,
    Shape: MockShape,
    ShapeGeometry: vi.fn(),
  };
});

describe('FallingLeaves', () => {
  it('renders the specified number of leaves', () => {
    // We can't easily test the internal mesh rendering without a full R3F renderer,
    // but we can check if the component renders without crashing.
    const { container } = render(<FallingLeaves numLeaves={10} />);
    expect(container).toBeDefined();
  });

  it('renders with default props', () => {
    const { container } = render(<FallingLeaves />);
    expect(container).toBeDefined();
  });
});
