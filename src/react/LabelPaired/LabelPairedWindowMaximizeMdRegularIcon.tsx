import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMaximizeMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6c-.562 0-1 .469-1 1v3h14V7c0-.531-.469-1-1-1zm-1 5v6c0 .563.438 1 1 1h12c.531 0 1-.437 1-1v-6zM0 7c0-1.094.875-2 2-2h12c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2z' />
    </g>
    <defs>
      <clipPath id='3349aed2c7df8981ecca9b29f801e9a9__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeMdRegularIcon);
export default ForwardRef;
