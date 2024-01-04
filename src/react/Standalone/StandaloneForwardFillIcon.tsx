import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneForwardFillIcon = (
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
      d='M8.07 23.727c-.416.312-.872.364-1.367.156-.443-.235-.677-.612-.703-1.133v-12.5c.026-.52.26-.898.703-1.133.495-.208.95-.156 1.367.156l6.68 5.586V18.14l-6.68 5.587ZM16 20.25v-10c.026-.52.26-.898.703-1.133.495-.208.95-.156 1.367.156l7.5 6.25c.287.26.43.586.43.977 0 .39-.143.716-.43.977l-7.5 6.25c-.416.312-.872.364-1.367.156-.443-.235-.677-.612-.703-1.133v-2.5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardFillIcon);
export default ForwardRef;
