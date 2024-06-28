import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortSmFillIcon = (
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
      <path d='M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7.3-4.238a.463.463 0 0 0-.628 0L4.047 9.137c-.11.136-.164.328-.082.492.055.137.219.246.41.246h5.25c.164 0 .328-.082.383-.246.082-.164.027-.356-.082-.492zm-.628 8.504a.463.463 0 0 0 .629 0l2.625-2.625c.11-.137.164-.328.082-.493a.41.41 0 0 0-.383-.273h-5.25a.42.42 0 0 0-.41.273c-.082.165-.027.356.082.493z' />
    </g>
    <defs>
      <clipPath id='913865f9a592e57f313d99ef8bd9676d__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortSmFillIcon);
export default ForwardRef;
