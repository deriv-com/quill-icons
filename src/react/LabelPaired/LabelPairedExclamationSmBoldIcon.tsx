import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={22}
    viewBox='0 0 2 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.656 5.281v7.875c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V5.281c0-.355.273-.656.656-.656.355 0 .656.3.656.656M1 16.875A.864.864 0 0 1 .125 16c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875' />
    </g>
    <defs>
      <clipPath id='143f9fe74f60be583b53201473c9b23d__a'>
        <path d='M0 0h2v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationSmBoldIcon);
export default ForwardRef;
