import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarcodeSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.656 4.625c.401.036.62.255.657.656V16.22c-.037.4-.256.62-.657.656-.4-.037-.62-.255-.656-.656V5.28c.036-.4.255-.62.656-.656m2.407 0c.273.018.419.164.437.438v11.375c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437V5.063c.018-.274.164-.42.438-.438m1.968 0c.401.036.62.255.657.656V16.22c-.037.4-.256.62-.657.656-.4-.037-.62-.255-.656-.656V5.28c.036-.4.255-.62.656-.656m3.063 0c.4.036.62.255.656.656V16.22c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656V5.28c.036-.4.255-.62.656-.656m4.594.656c.036-.4.255-.62.656-.656.4.036.62.255.656.656V16.22c-.037.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656zm-1.75-.218c.018-.274.164-.42.437-.438.273.018.42.164.438.438v11.375c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.437-.437z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeSmBoldIcon);
export default ForwardRef;
