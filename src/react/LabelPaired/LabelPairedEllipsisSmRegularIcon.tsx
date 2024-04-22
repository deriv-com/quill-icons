import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.75 10.75c0 .492-.41.875-.875.875A.864.864 0 0 1 10 10.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m-4.375 0c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m-5.25.875a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875A.9.9 0 0 1 3 10.75c0 .492-.41.875-.875.875' />
    </g>
    <defs>
      <clipPath id='a25d0809f4395769f30b86572db5b782__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisSmRegularIcon);
export default ForwardRef;
