import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleQuestionSmFillIcon = (
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
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M4.621 8.29v.026c-.11.329.055.711.41.848.328.11.711-.055.82-.41l.028-.027a.21.21 0 0 1 .191-.137h1.586c.246 0 .438.164.438.41a.43.43 0 0 1-.219.355l-1.203.684c-.219.11-.328.328-.328.574v.356c0 .383.273.656.656.656.355 0 .629-.273.656-.629l.875-.52c.52-.3.875-.874.875-1.476 0-.957-.793-1.75-1.75-1.75H6.07c-.656 0-1.23.41-1.449 1.04m1.504 5.085c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875A.9.9 0 0 0 7 12.5a.88.88 0 0 0-.875.875' />
    </g>
    <defs>
      <clipPath id='1ddd60080d3c3a1e79bdc7702cc50c46__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleQuestionSmFillIcon);
export default ForwardRef;
