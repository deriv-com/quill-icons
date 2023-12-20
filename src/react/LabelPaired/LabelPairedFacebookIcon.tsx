import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFacebookIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M15.75 12c-.042 1.98-.667 3.667-1.875 5.063-1.208 1.395-2.76 2.26-4.656 2.593V14.25h1.812l.344-2.25H9.219v-1.469c-.021-.312.062-.583.25-.812.187-.25.52-.375 1-.375h.969V7.438c-.021-.021-.198-.053-.532-.094A10.23 10.23 0 0 0 9.72 7.28c-.896 0-1.604.26-2.125.782-.521.52-.792 1.26-.813 2.218V12H4.813v2.25H6.78v5.406c-1.896-.333-3.448-1.198-4.656-2.593C.917 15.667.292 13.979.25 12c.02-1.437.375-2.74 1.063-3.906a7.737 7.737 0 0 1 2.78-2.781C5.26 4.625 6.564 4.27 8 4.25c1.438.02 2.74.375 3.906 1.063a7.737 7.737 0 0 1 2.781 2.78c.688 1.167 1.042 2.47 1.063 3.907'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookIcon);
export default ForwardRef;
