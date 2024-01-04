import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpArrowDownXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m8.016 7.734 4.5 4.5c.312.344.312.688 0 1.032-.344.312-.688.312-1.032 0L8.25 10.078V27.75c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V10.078l-3.234 3.188c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l4.5-4.5c.344-.312.688-.312 1.032 0Zm16.5 16.032-4.5 4.5c-.344.312-.688.312-1.032 0l-4.5-4.5c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0l3.234 3.188V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75v17.672l3.234-3.188c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownXlRegularIcon);
export default ForwardRef;
