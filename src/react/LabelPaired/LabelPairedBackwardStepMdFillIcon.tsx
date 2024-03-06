import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.375 17.781-6-5L2 12.47V17a.97.97 0 0 1-.281.719A.97.97 0 0 1 1 18a.97.97 0 0 1-.719-.281A.97.97 0 0 1 0 17V7q0-.437.281-.719A.97.97 0 0 1 1 6q.438 0 .719.281A.97.97 0 0 1 2 7v4.531l.375-.312 6-5q.47-.375 1.063-.125.53.281.562.906v10q-.03.626-.562.906-.594.25-1.063-.125' />
    </g>
    <defs>
      <clipPath id='40aac4e2b0baeafb6ac106cf9132c64e__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepMdFillIcon);
export default ForwardRef;
