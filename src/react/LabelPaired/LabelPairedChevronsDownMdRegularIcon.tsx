import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownMdRegularIcon = (
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
      <path d='M1.656 6.344q-.312-.345 0-.688.345-.312.688 0L8 11.281l5.656-5.625q.345-.312.688 0 .312.345 0 .688l-6 6q-.345.312-.688 0zm0 6q-.312-.345 0-.688.345-.312.688 0L8 17.281l5.656-5.625q.345-.312.688 0 .312.345 0 .688l-6 6q-.345.312-.688 0z' />
    </g>
    <defs>
      <clipPath id='f2d3594b084f1c83__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownMdRegularIcon);
export default ForwardRef;
