import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExclamationSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 2 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.438 5.063v8.312c-.019.273-.165.42-.438.438-.273-.019-.42-.165-.437-.438V5.063c.018-.274.164-.42.437-.438.273.018.42.164.438.438M1 16.656C.599 16.62.38 16.401.344 16c.036-.401.255-.62.656-.656.401.036.62.255.656.656-.036.401-.255.62-.656.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h2v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationSmRegularIcon);
export default ForwardRef;
