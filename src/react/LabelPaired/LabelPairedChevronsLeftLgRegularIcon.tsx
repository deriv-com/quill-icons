import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsLeftLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m2.07 15.07 7.5-7.5c.287-.26.573-.26.86 0 .26.287.26.573 0 .86L3.398 15.5l7.032 7.07c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-7.5-7.5c-.26-.287-.26-.573 0-.86Zm15-7.5c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-7.032 7.07 7.032 7.07c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-7.5-7.5c-.26-.287-.26-.573 0-.86l7.5-7.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftLgRegularIcon);
export default ForwardRef;
