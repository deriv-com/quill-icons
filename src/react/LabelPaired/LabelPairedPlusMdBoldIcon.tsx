import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.75 6.25v5h5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-5v5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-5h-5A.72.72 0 0 1 .5 12a.74.74 0 0 1 .75-.75h5v-5A.74.74 0 0 1 7 5.5a.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='73bd7af669e15b9020e48cdd5af2be0a__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusMdBoldIcon);
export default ForwardRef;
