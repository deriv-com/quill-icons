import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFiveSmRegularIcon = (
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
        d='M1.465 4.953c.055-.2.191-.31.41-.328h5.688c.273.018.419.164.437.438-.018.273-.164.419-.437.437H2.23L1.137 9.875h4.238c.984.018 1.814.355 2.488 1.012.657.674.994 1.504 1.012 2.488-.018.984-.355 1.814-1.012 2.488-.674.657-1.504.994-2.488 1.012H2.449c-.474 0-.902-.119-1.285-.355a2.295 2.295 0 0 1-.875-.985l-.11-.219c-.109-.237-.045-.428.192-.574.255-.11.447-.045.574.192l.137.218c.292.547.747.83 1.367.848h2.926c.747-.018 1.367-.273 1.86-.766.492-.492.747-1.112.765-1.859-.018-.747-.273-1.367-.766-1.86-.492-.492-1.112-.747-1.859-.765H.563a.44.44 0 0 1-.356-.164.545.545 0 0 1-.082-.383z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveSmRegularIcon);
export default ForwardRef;
