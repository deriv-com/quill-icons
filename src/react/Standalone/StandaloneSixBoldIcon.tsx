import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSixBoldIcon = (
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
      d='M20.375 19c-.026-1.25-.456-2.279-1.29-3.086-.806-.833-1.835-1.263-3.085-1.289-1.302.026-2.37.495-3.203 1.406l-.195.235c-.652.807-.977 1.718-.977 2.734.026 1.25.456 2.279 1.29 3.086.806.833 1.835 1.263 3.085 1.289 1.25-.026 2.279-.456 3.086-1.29.833-.806 1.263-1.835 1.289-3.085m-4.922-6.21c.182-.027.365-.04.547-.04 1.77.052 3.242.664 4.414 1.836 1.172 1.172 1.784 2.643 1.836 4.414-.052 1.77-.664 3.242-1.836 4.414-1.172 1.172-2.643 1.784-4.414 1.836-1.77-.052-3.242-.664-4.414-1.836C10.414 22.242 9.802 20.771 9.75 19c.026-1.667.573-3.073 1.64-4.219l5.43-6.68c.417-.416.86-.468 1.328-.156.417.417.47.86.157 1.328z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSixBoldIcon);
export default ForwardRef;
