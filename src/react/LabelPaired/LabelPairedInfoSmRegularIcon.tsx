import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={22}
    viewBox='0 0 6 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875M.813 8.563a.45.45 0 0 1 .437-.438H3a.47.47 0 0 1 .438.438V16h1.75a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H.813a.43.43 0 0 1-.438-.437A.45.45 0 0 1 .813 16h1.75V9H1.25a.43.43 0 0 1-.437-.437' />
    </g>
    <defs>
      <clipPath id='aaf9ac7bc32e748c40f7c627b4f69309__a'>
        <path d='M0 0h6v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoSmRegularIcon);
export default ForwardRef;
