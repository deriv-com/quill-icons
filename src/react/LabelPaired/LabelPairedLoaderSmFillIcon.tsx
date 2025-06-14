import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLoaderSmFillIcon = (
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
      <path d='M7.875 4.625v1.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-1.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m0 10.5v1.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-1.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875M0 10.75c0-.465.383-.875.875-.875h1.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H.875A.864.864 0 0 1 0 10.75m11.375-.875h1.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-1.75a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875M2.051 5.801c.328-.328.875-.328 1.23 0l1.23 1.258a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-1.23-1.23a.875.875 0 0 1 0-1.258m8.64 7.437 1.258 1.23c.328.356.328.903 0 1.231a.875.875 0 0 1-1.258 0l-1.23-1.23a.89.89 0 0 1 0-1.23c.355-.356.902-.356 1.23 0M2.051 15.7v.028a.875.875 0 0 1 0-1.258l1.23-1.23a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-1.23 1.23c-.355.356-.902.356-1.23 0m7.41-8.64L10.69 5.8a.927.927 0 0 1 1.258 0 .927.927 0 0 1 0 1.258l-1.258 1.23c-.328.328-.875.328-1.23 0-.328-.355-.328-.902 0-1.23' />
    </g>
    <defs>
      <clipPath id='1f709325fec3bf2e4553e53ba3c6d8d8__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLoaderSmFillIcon);
export default ForwardRef;
