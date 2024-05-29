import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenMdFillIcon = (
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
      <path d='M11.313 4.625a2.02 2.02 0 0 1 2.843 0l1.219 1.219a2.02 2.02 0 0 1 0 2.843l-1.5 1.5-4.062-4.062zm-2.22 2.219 4.063 4.062-7.281 7.281a2.7 2.7 0 0 1-1.156.688L.937 20a.71.71 0 0 1-.718-.219.64.64 0 0 1-.188-.718l1.094-3.782c.125-.437.375-.844.688-1.156z' />
    </g>
    <defs>
      <clipPath id='e0175f457cb5041db99bbe3d11ad617c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenMdFillIcon);
export default ForwardRef;
