import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.125 5.5c0-.465.383-.875.875-.875h7c.3 0 .602.191.738.465a.84.84 0 0 1 0 .875l-6.125 10.5c-.246.41-.765.547-1.203.3C1 16.52.863 16 1.11 15.563l5.359-9.187H1A.864.864 0 0 1 .125 5.5' />
    </g>
    <defs>
      <clipPath id='bceb5cc81c66e7a3bc041ea98f34414c__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenSmFillIcon);
export default ForwardRef;
