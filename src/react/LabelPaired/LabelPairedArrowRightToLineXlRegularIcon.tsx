import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightToLineXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M21 9.75v16.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V9.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75Zm-4.734 8.766-6 6c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l4.688-4.734H.75C.281 18.719.031 18.469 0 18c.031-.469.281-.719.75-.75h13.172l-4.688-4.734c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0l6 6c.312.344.312.688 0 1.032Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineXlRegularIcon);
export default ForwardRef;
