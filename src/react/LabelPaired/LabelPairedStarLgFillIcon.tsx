import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.633 6.203 2.5 5.156 5.625.86q.742.117 1.015.82.195.743-.312 1.29l-4.063 4.023.938 5.703q.117.742-.508 1.21-.624.43-1.289.079L11.5 22.687l-5 2.657q-.703.351-1.328-.078-.585-.469-.508-1.211l.977-5.703-4.063-4.024q-.547-.546-.312-1.289.234-.703.976-.82l5.625-.86 2.5-5.156q.39-.664 1.133-.703.78.039 1.133.703' />
    </g>
    <defs>
      <clipPath id='67efa3de240ed364aed43224af8ae328__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarLgFillIcon);
export default ForwardRef;
