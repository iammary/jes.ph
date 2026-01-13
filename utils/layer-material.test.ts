import './layer-material';

vi.mock('@react-three/drei', () => ({
  shaderMaterial: vi.fn((uniforms, vertex, fragment) => {
    return function MockMaterial(this: any) {
      this.uniforms = uniforms;
      this.vertexShader = vertex;
      this.fragmentShader = fragment;
    };
  }),
}));

vi.mock('@react-three/fiber', () => ({
  extend: vi.fn(),
}));

describe('LayerMaterial', () => {
  it('is defined', async () => {
    const { shaderMaterial } = await import('@react-three/drei');
    expect(shaderMaterial).toHaveBeenCalled();
  });

  it('sets up uniforms correctly', async () => {
    const { shaderMaterial } = await import('@react-three/drei');
    const uniforms = (vi.mocked(shaderMaterial).mock.calls[0] as any)[0];

    expect(uniforms).toHaveProperty('textr');
    expect(uniforms).toHaveProperty('scale', 1);
    expect(uniforms).toHaveProperty('factor', 0);
    expect(uniforms).toHaveProperty('wiggle', 0);
    expect(uniforms).toHaveProperty('time', 0);
  });
});
