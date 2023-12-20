import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGoogleCaptionIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.719 9.64c-.031 1.688-.547 3.047-1.547 4.079-1.016 1.031-2.375 1.562-4.078 1.594-1.078-.016-2.055-.282-2.93-.797a5.803 5.803 0 0 1-2.086-2.086C.562 11.555.297 10.578.281 9.5c.016-1.078.282-2.055.797-2.93a5.803 5.803 0 0 1 2.086-2.086c.875-.515 1.852-.78 2.93-.796 1.578.03 2.875.539 3.89 1.523l-1.57 1.523c-.734-.656-1.555-.953-2.46-.89-.907.047-1.704.39-2.391 1.031C2.89 7.531 2.53 8.406 2.484 9.5c.032 1.047.383 1.914 1.055 2.602.688.687 1.54 1.046 2.555 1.078.765-.016 1.383-.172 1.851-.47.47-.296.82-.632 1.055-1.007.219-.39.352-.734.398-1.031H6.094V8.656h5.531c.063.281.094.61.094.985'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleCaptionIcon);
export default ForwardRef;
