import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortUpLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m6.5 8.898-3.477 3.477h6.954zm-.898-1.796c.26-.235.56-.352.898-.352.339 0 .638.117.898.352l5 5c.365.416.456.872.274 1.367-.235.495-.625.755-1.172.781h-10c-.547-.026-.937-.287-1.172-.781-.182-.495-.091-.95.274-1.367z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpLgBoldIcon);
export default ForwardRef;
