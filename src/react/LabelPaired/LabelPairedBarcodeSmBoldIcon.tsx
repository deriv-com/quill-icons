import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarcodeSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.656 4.625c.401.036.62.255.656.656V16.22c-.036.4-.255.62-.656.656-.4-.037-.62-.255-.656-.656V5.28c.036-.4.255-.62.656-.656Zm2.406 0c.274.018.42.164.438.438v11.375c-.018.273-.164.419-.438.437-.273-.018-.419-.164-.437-.438V5.063c.018-.273.164-.419.438-.437Zm1.97 0c.4.036.619.255.655.656V16.22c-.036.4-.255.62-.656.656-.4-.037-.62-.255-.656-.656V5.28c.036-.4.255-.62.656-.656Zm3.062 0c.4.036.62.255.656.656V16.22c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656V5.28c.036-.4.255-.62.656-.656Zm4.594.656c.036-.4.255-.62.656-.656.4.036.62.255.656.656V16.22c-.037.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656V5.28Zm-1.75-.218c.018-.274.164-.42.437-.438.273.018.42.164.438.438v11.375c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.438-.438V5.063Z'
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
