import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPlusSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.938 5.5v4.813h4.812c.273.018.42.164.438.437-.019.273-.165.42-.438.438H6.938V16c-.019.273-.165.42-.438.438-.273-.019-.42-.165-.437-.438v-4.812H1.25c-.273-.019-.42-.165-.437-.438.018-.273.164-.42.437-.437h4.813V5.5c.018-.273.164-.42.437-.437.273.018.42.164.438.437'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusSmRegularIcon);
export default ForwardRef;
