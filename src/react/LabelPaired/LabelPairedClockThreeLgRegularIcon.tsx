import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClockThreeLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.75 15.5q-.04-2.383-1.172-4.375a9 9 0 0 0-3.203-3.203Q12.305 6.75 10 6.75q-2.304 0-4.375 1.172a9 9 0 0 0-3.203 3.203Q1.289 13.117 1.25 15.5q.04 2.383 1.172 4.375a9 9 0 0 0 3.203 3.203Q7.695 24.25 10 24.25t4.375-1.172a9 9 0 0 0 3.203-3.203q1.133-1.992 1.172-4.375M0 15.5q.04-2.735 1.328-5Q2.657 8.235 5 6.828 7.383 5.5 10 5.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q2.657 22.765 1.328 20.5.038 18.235 0 15.5m9.375-5.625q.039-.585.625-.625.585.039.625.625v5h3.75q.585.039.625.625-.039.585-.625.625H10q-.585-.039-.625-.625z' />
    </g>
    <defs>
      <clipPath id='a94142498b661827daa7a195540db670__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClockThreeLgRegularIcon);
export default ForwardRef;
