import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightMdRegularIcon = (
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
      <path d='M2.344 18.344q-.345.312-.688 0-.312-.345 0-.688L7.281 12 1.656 6.344q-.312-.345 0-.688.345-.312.688 0l6 6q.312.345 0 .688zm6 0q-.345.312-.688 0-.312-.345 0-.688L13.281 12 7.656 6.344q-.312-.345 0-.688.345-.312.688 0l6 6q.312.345 0 .688z' />
    </g>
    <defs>
      <clipPath id='3998b8ef9754869a8ffc189f896bb749__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightMdRegularIcon);
export default ForwardRef;
