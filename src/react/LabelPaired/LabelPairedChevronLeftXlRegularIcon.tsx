import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronLeftXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.984 18.516c-.312-.344-.312-.688 0-1.032l9-9c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032L2.578 18l8.438 8.484c.312.344.312.688 0 1.032-.344.312-.688.312-1.032 0l-9-9Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftXlRegularIcon);
export default ForwardRef;
