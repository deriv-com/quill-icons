import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileInvoiceDollarSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.875 16V9H6.813a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.383-.93V4.626H2a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629V16c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h7a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629m0-7.875a.73.73 0 0 0-.137-.191L6.566 4.762a.406.406 0 0 0-.191-.11v3.036c.018.273.164.419.438.437zM.25 5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h4.266c.364 0 .674.128.93.383l3.171 3.172c.255.255.383.565.383.93V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H2c-.492-.018-.902-.191-1.23-.52C.44 16.903.268 16.493.25 16zM2 5.938c.018-.274.164-.42.438-.438h1.75c.273.018.419.164.437.438-.018.273-.164.419-.437.437h-1.75c-.274-.018-.42-.164-.438-.437m0 1.75c.018-.274.164-.42.438-.438h1.75c.273.018.419.164.437.438-.018.273-.164.419-.437.437h-1.75c-.274-.018-.42-.164-.438-.437m3.938 2.734v.355c.236.037.455.082.656.137.255.073.364.246.328.52-.091.255-.274.364-.547.328a5.401 5.401 0 0 0-.875-.137c-.255 0-.483.046-.684.137-.145.09-.21.182-.191.273-.018.037.046.1.191.192.183.09.447.173.793.246l.028.027a5.2 5.2 0 0 1 .984.328c.365.182.574.51.629.985-.036.528-.255.884-.656 1.066-.2.11-.42.182-.657.219v.382c-.018.256-.164.402-.437.438-.273-.036-.42-.182-.437-.437v-.41a9.092 9.092 0 0 1-.82-.192 1.06 1.06 0 0 1-.138-.055h-.027c-.255-.11-.355-.291-.3-.547.09-.255.273-.355.546-.3.055.018.119.036.192.054.364.128.701.2 1.011.219.256 0 .474-.046.657-.137.145-.073.21-.164.191-.273.018-.073-.046-.155-.191-.246a4.31 4.31 0 0 0-.793-.274h-.082a4.125 4.125 0 0 1-.903-.328c-.383-.164-.601-.483-.656-.957.055-.528.283-.875.684-1.039.2-.11.41-.182.628-.219v-.355c.037-.274.183-.42.438-.438.273.019.42.164.438.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarSmRegularIcon);
export default ForwardRef;
