import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileSmRegularIcon = (
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
      <path d='M9.875 16V9H6.813A1.296 1.296 0 0 1 5.5 7.688V4.624H2a.88.88 0 0 0-.875.875V16c0 .492.383.875.875.875h7A.88.88 0 0 0 9.875 16m-.027-7.875c-.028-.055-.055-.137-.11-.191L6.566 4.762c-.054-.055-.136-.082-.191-.11v3.036c0 .246.191.437.438.437zM.25 5.5c0-.957.766-1.75 1.75-1.75h4.266c.328 0 .683.164.93.41l3.144 3.145c.246.246.41.601.41.93V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75z' />
    </g>
    <defs>
      <clipPath id='00c96e8aea7502047139551c1c472c50__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileSmRegularIcon);
export default ForwardRef;
