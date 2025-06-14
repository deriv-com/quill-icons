import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.75 3.75h4.375a.9.9 0 0 1 .875.875V9c0 .492-.41.875-.875.875A.864.864 0 0 1 12.25 9V6.758l-5.523 5.496a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23L10.991 5.5H8.75a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875m-6.562.875H5.25a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H2.188a.45.45 0 0 0-.438.438v8.75c0 .246.191.437.438.437h8.75a.45.45 0 0 0 .437-.437V12.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v3.063c0 1.23-.984 2.187-2.187 2.187h-8.75A2.16 2.16 0 0 1 0 15.563v-8.75c0-1.204.957-2.188 2.188-2.188' />
    </g>
    <defs>
      <clipPath id='6bb87b4e4eae642cc37c9d7b2e3e3652__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareSmFillIcon);
export default ForwardRef;
