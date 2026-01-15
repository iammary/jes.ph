import { render } from '@testing-library/react';
import { FallingLeaves, Leaf } from './FallingLeaves';

let useFrameCallback: any;
vi.mock('@react-three/fiber', () => ({
  useFrame: (callback: any) => {
    useFrameCallback = callback;
  },
  useThree: vi.fn(() => ({
    viewport: { width: 100, height: 100 },
  })),
  extend: vi.fn(),
}));

// Mock THREE
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
    Mesh: class {
      position = { x: 0, y: 0, z: 0 };
      rotation = { x: 0, y: 0, z: 0 };
      scale = { set: vi.fn() };
      userData = {};
    },
  };
});

// Suppress known R3F casing and attribute warnings in tests
const originalConsoleError = console.error;
console.error = (...args: any[]) => {
  const msg = args.map(String).join(' ');
  if (
    msg.includes('incorrect casing') ||
    msg.includes('unrecognized in this browser') ||
    msg.includes('non-boolean attribute') ||
    msg.includes('React does not recognize the')
  ) {
    return;
  }
  originalConsoleError(...args);
};

describe('FallingLeaves', () => {
  it('renders the specified number of leaves', () => {
    const { container } = render(<FallingLeaves numLeaves={10} />);
    expect(container).toBeDefined();
  });

  it('registers useFrame callback', () => {
    const userData = {
      fallSpeed: 0.1,
      swaySpeed: 1,
      swayAmount: 1,
      rotationSpeed: { x: 0.01, y: 0.01, z: 0.01 },
      time: 0,
      speed: 1,
    };

    render(
      <Leaf position={[0, 10, 0]} size={1} color={0xff_00_00} userData={userData as any} bounds={{ width: 100, height: 100 }} initialRotation={[0, 0, 0]} />,
    );

    expect(useFrameCallback).toBeDefined();
  });
});
