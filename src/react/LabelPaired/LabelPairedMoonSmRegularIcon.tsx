import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.473 5.582q-1.887.356-3.09 1.777-1.23 1.395-1.258 3.391.054 2.242 1.531 3.719T6.375 16a5.4 5.4 0 0 0 2.57-.684q-2.241-.218-3.691-1.804-1.45-1.56-1.504-3.856 0-1.203.465-2.242.437-1.066 1.258-1.832m1.804-.602q.055.329-.218.493Q5.965 6.1 5.28 7.195q-.656 1.095-.656 2.461.054 2.051 1.395 3.39 1.367 1.368 3.39 1.423.438 0 .82-.082.33-.028.465.246.137.273-.082.52-1.695 1.666-4.238 1.722-1.722-.027-3.09-.848a5.73 5.73 0 0 1-2.187-2.187q-.82-1.368-.848-3.09.028-1.722.82-3.09a5.93 5.93 0 0 1 2.215-2.187q1.367-.82 3.063-.848.273 0 .52.027.327.028.41.328' />
    </g>
    <defs>
      <clipPath id='6750cb43b4f9361cc7408a6611e3175c__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonSmRegularIcon);
export default ForwardRef;
