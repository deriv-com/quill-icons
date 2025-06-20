import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelSmRegularIcon = (
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
      <path d='M9 16.875A.88.88 0 0 0 9.875 16V9H6.813A1.296 1.296 0 0 1 5.5 7.688V4.624H2a.88.88 0 0 0-.875.875V16c0 .492.383.875.875.875zm-2.187-8.75h3.035c-.028-.055-.055-.137-.11-.191L6.566 4.762c-.054-.055-.136-.082-.191-.11v3.036c0 .246.191.437.438.437M2 3.75h4.266c.328 0 .683.164.93.41l3.144 3.145c.246.246.41.601.41.93V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m2.324 6.754L5.5 12.199l1.148-1.695c.165-.191.438-.246.63-.11.19.137.245.41.109.63L6.02 12.937l1.367 1.94c.136.22.082.466-.11.63-.218.137-.465.082-.629-.11L5.5 13.703l-1.176 1.695a.466.466 0 0 1-.629.11c-.191-.164-.246-.438-.11-.63l1.368-1.94-1.367-1.915a.466.466 0 0 1 .11-.628.466.466 0 0 1 .628.109' />
    </g>
    <defs>
      <clipPath id='4b14c2a417acf17bd6d5f5caaada680c__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelSmRegularIcon);
export default ForwardRef;
