import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWalletSmBoldIcon = (
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
        d='M2.406 4.625H12.47c.4.036.62.255.656.656-.037.401-.255.62-.656.657H2.406c-.31 0-.565.109-.765.328a.993.993 0 0 0-.328.765v7.438c0 .31.109.565.328.765.2.22.455.329.765.329h9.188c.31 0 .565-.11.765-.329a.993.993 0 0 0 .329-.765V9.656c0-.31-.11-.565-.329-.765a.993.993 0 0 0-.765-.328H3.28c-.4-.037-.62-.256-.656-.657.036-.4.255-.62.656-.656h8.313c.674.018 1.24.255 1.695.71.456.457.693 1.022.711 1.696v4.813c-.018.674-.255 1.24-.71 1.695-.457.456-1.022.693-1.696.711H2.406c-.674-.018-1.24-.255-1.695-.71-.456-.457-.693-1.022-.711-1.696V7.03c.018-.674.255-1.24.71-1.695.457-.456 1.022-.693 1.696-.711m8.094 8.313a.852.852 0 0 1-.629-.247.852.852 0 0 1-.246-.629c0-.255.082-.464.246-.628a.852.852 0 0 1 .629-.246c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629.852.852 0 0 1-.246.628.852.852 0 0 1-.629.246'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSmBoldIcon);
export default ForwardRef;
