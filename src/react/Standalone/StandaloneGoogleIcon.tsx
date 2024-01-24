import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneGoogleIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path d='M25.531 16.734q-.078 4.219-2.578 6.797-2.539 2.578-6.797 2.657-2.695-.04-4.883-1.329a9.7 9.7 0 0 1-3.476-3.476q-1.29-2.188-1.328-4.883.038-2.695 1.328-4.883a9.7 9.7 0 0 1 3.476-3.476q2.188-1.29 4.883-1.328 3.945.078 6.485 2.539l-2.618 2.539q-1.835-1.641-4.101-1.485-2.266.117-3.985 1.719-1.68 1.64-1.796 4.375.078 2.617 1.757 4.336 1.72 1.719 4.258 1.797 1.914-.04 3.086-.781 1.171-.742 1.758-1.68.547-.977.664-1.719h-5.508v-3.36h9.219q.156.704.156 1.641' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGoogleIcon);
export default ForwardRef;
