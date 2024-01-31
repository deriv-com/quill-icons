import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftMdRegularIcon = (
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
      <path d='m1.656 11.656 6-6q.345-.312.688 0 .312.345 0 .688L2.719 12l5.625 5.656q.312.345 0 .688-.345.312-.688 0l-6-6q-.312-.345 0-.688m12-6q.345-.312.688 0 .312.345 0 .688L8.719 12l5.625 5.656q.312.345 0 .688-.345.312-.688 0l-6-6q-.312-.345 0-.688z' />
    </g>
    <defs>
      <clipPath id='4d41b364e1c41f43__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftMdRegularIcon);
export default ForwardRef;
