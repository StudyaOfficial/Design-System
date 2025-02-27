import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    resolve: true,
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  tsconfig: './tsconfig.build.json',
  external: [
    'react', 
    'react-dom',
    '@radix-ui/*',
    'next',
    'next-themes',
    'tailwindcss',
    'lucide-react',
  ],
  treeshake: true,
}); 