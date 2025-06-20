import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16 3.75a.9.9 0 0 1 .875.875v12.25c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V4.625c0-.465.383-.875.875-.875m-3.5 2.625a.9.9 0 0 1 .875.875v9.625c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V7.25c0-.465.383-.875.875-.875m-2.625 3.5v7c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-7C8.125 9.41 8.508 9 9 9a.9.9 0 0 1 .875.875M5.5 11.625a.9.9 0 0 1 .875.875v4.375c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V12.5c0-.465.383-.875.875-.875m-2.625 3.5v1.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-1.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875' />
    </g>
    <defs>
      <clipPath id='9e9815a25d424f77495677f3cf66bef3__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalSmFillIcon);
export default ForwardRef;
