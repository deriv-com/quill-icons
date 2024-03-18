import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftMdFillIcon = (
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
      <path d='m1.281 11.313 6-6a.964.964 0 0 1 1.407 0 .964.964 0 0 1 0 1.406L3.406 12l5.281 5.313a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.406 0l-6-6a.964.964 0 0 1 0-1.406m12-6a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406L9.407 12l5.28 5.313a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.406 0l-6-6a.964.964 0 0 1 0-1.406z' />
    </g>
    <defs>
      <clipPath id='9f6b3153ae88a4c318cc6c2d4e190efc__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftMdFillIcon);
export default ForwardRef;
