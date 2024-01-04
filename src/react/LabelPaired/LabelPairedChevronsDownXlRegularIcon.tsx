import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsDownXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.484 9.516c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0L12 16.922l8.484-8.438c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032l-9 9c-.344.312-.688.312-1.032 0l-9-9Zm0 9c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0L12 25.922l8.484-8.438c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032l-9 9c-.344.312-.688.312-1.032 0l-9-9Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownXlRegularIcon);
export default ForwardRef;
