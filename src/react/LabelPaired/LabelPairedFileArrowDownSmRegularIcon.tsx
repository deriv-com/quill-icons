import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileArrowDownSmRegularIcon = (
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
      <path d='M9 16.875A.88.88 0 0 0 9.875 16V9H6.813A1.296 1.296 0 0 1 5.5 7.688V4.624H2a.88.88 0 0 0-.875.875V16c0 .492.383.875.875.875zm-2.187-8.75h3.035c-.028-.055-.055-.137-.11-.191L6.566 4.762c-.054-.055-.136-.082-.191-.11v3.036c0 .246.191.437.438.437M2 3.75h4.266c.328 0 .683.164.93.41l3.144 3.145c.246.246.41.601.41.93V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m3.938 6.563v3.335L7.359 12.2a.463.463 0 0 1 .63 0 .463.463 0 0 1 0 .63L5.8 15.015a.463.463 0 0 1-.63 0l-2.187-2.188a.463.463 0 0 1 0-.629.463.463 0 0 1 .63 0l1.449 1.45v-3.336a.45.45 0 0 1 .437-.438.47.47 0 0 1 .438.438' />
    </g>
    <defs>
      <clipPath id='6954c1686fa19c6916d3ba6de0ca236b__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileArrowDownSmRegularIcon);
export default ForwardRef;
