import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHouseBlankSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m8.438 3.914 7.218 6.125c.274.274.292.583.055.93-.274.273-.574.291-.902.054l-.684-.546v5.086c-.018.62-.228 1.139-.629 1.558-.42.401-.939.61-1.559.629H4.064c-.62-.018-1.14-.228-1.56-.629-.4-.42-.61-.939-.628-1.558v-5.086l-.684.546c-.328.237-.629.22-.902-.054-.237-.347-.219-.656.055-.93l7.219-6.125c.291-.219.583-.219.875 0m4.374 5.441L8 5.281 3.188 9.355v6.208c0 .255.082.464.246.628a.852.852 0 0 0 .628.247h7.876a.852.852 0 0 0 .628-.247.852.852 0 0 0 .246-.628z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankSmBoldIcon);
export default ForwardRef;
