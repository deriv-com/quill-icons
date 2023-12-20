import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileChartColumnCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.5 14.75a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V8H5.625a1.223 1.223 0 0 1-.797-.328 1.223 1.223 0 0 1-.328-.797V4.25h-3a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v9c0 .219.07.398.21.54.142.14.321.21.54.21zm-1.875-7.5H8.25a.625.625 0 0 0-.117-.164L5.414 4.367a.348.348 0 0 0-.164-.094v2.602c.016.234.14.36.375.375M1.5 3.5h3.656c.313 0 .578.11.797.328l2.719 2.719c.219.219.328.484.328.797V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-6a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 14V5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445m3.375 5.625v4.5c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-4.5c.016-.234.14-.36.375-.375.234.016.36.14.375.375m2.25 1.5v3c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-3c.016-.234.14-.36.375-.375.234.016.36.14.375.375m-4.5 1.5v1.5c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-1.5c.016-.234.14-.36.375-.375.234.016.36.14.375.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnCaptionRegularIcon);
export default ForwardRef;
