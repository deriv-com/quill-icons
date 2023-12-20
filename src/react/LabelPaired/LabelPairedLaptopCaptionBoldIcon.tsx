import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLaptopCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12 5.375H3c-.234.016-.36.14-.375.375V11H1.5V5.75c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h9c.422.016.773.164 1.055.445.28.282.43.633.445 1.055V11h-1.125V5.75c-.016-.234-.14-.36-.375-.375m-9.75 8.25h10.5c.516-.031.867-.281 1.055-.75H1.195c.188.469.54.719 1.055.75M0 12.5a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21h13.5a.73.73 0 0 1 .54.21c.14.142.21.321.21.54-.016.64-.234 1.172-.656 1.594-.422.422-.953.64-1.594.656H2.25c-.64-.016-1.172-.234-1.594-.656C.234 13.672.016 13.14 0 12.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopCaptionBoldIcon);
export default ForwardRef;
