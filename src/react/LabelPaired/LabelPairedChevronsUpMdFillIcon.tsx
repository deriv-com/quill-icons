import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpMdFillIcon = (
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
      <path d='m8.688 5.313 6 6a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0L8 7.438l-5.312 5.28a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405l6-6a.964.964 0 0 1 1.407 0m6 12a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0L8 13.437 2.688 18.72a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.407l6-6a.964.964 0 0 1 1.407 0z' />
    </g>
    <defs>
      <clipPath id='7242520344b3515d9c87786dccdb3d86__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpMdFillIcon);
export default ForwardRef;
