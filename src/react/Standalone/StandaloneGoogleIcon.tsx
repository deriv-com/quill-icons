import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
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
    <path
      fillOpacity={0.72}
      d='M25.531 16.734c-.052 2.813-.911 5.078-2.578 6.797-1.693 1.719-3.958 2.604-6.797 2.657-1.797-.026-3.424-.47-4.883-1.329a9.672 9.672 0 0 1-3.476-3.476c-.86-1.459-1.302-3.086-1.328-4.883.026-1.797.468-3.425 1.328-4.883a9.672 9.672 0 0 1 3.476-3.476c1.459-.86 3.086-1.302 4.883-1.329 2.63.053 4.792.899 6.485 2.54l-2.618 2.539c-1.224-1.094-2.59-1.589-4.101-1.485-1.51.078-2.839.651-3.985 1.719-1.12 1.094-1.718 2.552-1.796 4.375.052 1.745.638 3.19 1.757 4.336 1.146 1.146 2.566 1.745 4.258 1.797 1.276-.026 2.305-.287 3.086-.781.781-.495 1.367-1.055 1.758-1.68.365-.651.586-1.224.664-1.719h-5.508v-3.36h9.219c.104.47.156 1.016.156 1.641Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGoogleIcon);
export default ForwardRef;
