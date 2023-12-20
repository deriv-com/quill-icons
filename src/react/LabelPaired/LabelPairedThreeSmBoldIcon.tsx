import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedThreeSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.125 5.281c.036-.4.255-.62.656-.656h7c.292.018.492.155.602.41.11.274.064.51-.137.711l-4.074 3.91h1.094c1.02.018 1.868.374 2.543 1.067.692.674 1.048 1.522 1.066 2.543-.018 1.02-.374 1.868-1.066 2.543-.675.692-1.523 1.048-2.543 1.066H2.777c-.547 0-1.039-.146-1.476-.437a2.868 2.868 0 0 1-1.067-1.122l-.027-.109c-.146-.383-.055-.674.273-.875.383-.146.675-.055.875.273l.055.11c.31.547.766.83 1.367.848h2.489c.656-.019 1.194-.247 1.613-.684.437-.42.665-.957.684-1.613-.019-.657-.247-1.194-.684-1.614-.42-.437-.957-.665-1.613-.683H2.53c-.291-.018-.492-.155-.601-.41-.11-.274-.064-.51.136-.711l4.075-3.91H.78c-.4-.037-.62-.256-.656-.657'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeSmBoldIcon);
export default ForwardRef;
