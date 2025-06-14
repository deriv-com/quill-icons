import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleZeroSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m0-10.5a2.626 2.626 0 0 0-2.625 2.625v1.75a2.626 2.626 0 0 0 5.25 0v-1.75A2.626 2.626 0 0 0 7 7.25M5.688 9.875c0-.71.574-1.312 1.312-1.312.71 0 1.313.601 1.313 1.312v1.75c0 .738-.602 1.313-1.313 1.313a1.296 1.296 0 0 1-1.312-1.313z' />
    </g>
    <defs>
      <clipPath id='e307a9c69c07313f68db504763afe915__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleZeroSmFillIcon);
export default ForwardRef;
