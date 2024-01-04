import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsUpLgRegularIcon = (
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
        d='m10.43 7.57 7.5 7.5c.26.287.26.573 0 .86-.287.26-.573.26-.86 0L10 8.898 2.93 15.93c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l7.5-7.5c.287-.26.573-.26.86 0Zm7.5 15c.26.287.26.573 0 .86-.287.26-.573.26-.86 0L10 16.398 2.93 23.43c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l7.5-7.5c.287-.26.573-.26.86 0l7.5 7.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpLgRegularIcon);
export default ForwardRef;
