import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardLgFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.07 22.727c-.416.312-.872.364-1.367.156C.26 22.648.026 22.27 0 21.75V9.25c.026-.52.26-.898.703-1.133.495-.208.95-.156 1.367.156l6.68 5.586V17.14zM10 19.25v-10c.026-.52.26-.898.703-1.133.495-.208.95-.156 1.367.156l7.5 6.25c.287.26.43.586.43.977 0 .39-.143.716-.43.977l-7.5 6.25c-.416.312-.872.364-1.367.156-.443-.235-.677-.612-.703-1.133z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardLgFillIcon);
export default ForwardRef;
