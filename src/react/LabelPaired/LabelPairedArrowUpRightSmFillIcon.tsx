import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.875 7.25v6.125c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V9.383l-5.523 5.496a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l5.495-5.524H2.875A.864.864 0 0 1 2 7.25c0-.465.383-.875.875-.875H9a.9.9 0 0 1 .875.875' />
    </g>
    <defs>
      <clipPath id='21a3703bee5fe3f5b8044a6a49147acf__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightSmFillIcon);
export default ForwardRef;
