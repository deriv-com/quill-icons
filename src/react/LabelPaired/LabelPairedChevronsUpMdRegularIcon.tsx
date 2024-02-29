import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpMdRegularIcon = (
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
      <path d='m8.344 5.656 6 6q.312.345 0 .688-.345.312-.688 0L8 6.719l-5.656 5.625q-.345.312-.688 0-.312-.345 0-.688l6-6q.345-.312.688 0m6 12q.312.345 0 .688-.345.312-.688 0L8 12.719l-5.656 5.625q-.345.312-.688 0-.312-.345 0-.688l6-6q.345-.312.688 0z' />
    </g>
    <defs>
      <clipPath id='ee30abd799abdf014f06e5a374e5a07c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpMdRegularIcon);
export default ForwardRef;
