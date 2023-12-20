import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedRightToBracketSmBoldIcon = (
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
        d='m5.25 13.758 3.008-3.008L5.25 7.742V9.22c-.036.4-.255.62-.656.656H1.312v1.75h3.282c.4.037.62.255.656.656zm4.375-3.008c0 .328-.118.61-.355.848l-3.172 3.144a1.178 1.178 0 0 1-.903.383c-.346 0-.638-.128-.875-.383a1.29 1.29 0 0 1-.383-.875v-.93H1.314a1.427 1.427 0 0 1-.93-.382 1.427 1.427 0 0 1-.383-.93v-1.75c.018-.365.146-.674.383-.93.255-.237.565-.364.93-.383h2.625v-.93a1.29 1.29 0 0 1 .382-.874c.237-.255.529-.383.875-.383.347 0 .647.128.903.383L9.27 9.902c.237.237.355.52.355.848m-.219 4.813h2.188c.31 0 .565-.11.765-.329a.993.993 0 0 0 .329-.765V7.03c0-.31-.11-.565-.329-.765a.993.993 0 0 0-.765-.328H9.406c-.4-.037-.62-.256-.656-.657.036-.4.255-.62.656-.656h2.188c.674.018 1.24.255 1.695.71.456.457.693 1.022.711 1.696v7.438c-.018.674-.255 1.24-.71 1.695-.457.456-1.022.693-1.696.711H9.406c-.4-.037-.62-.255-.656-.656.036-.401.255-.62.656-.657'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketSmBoldIcon);
export default ForwardRef;
