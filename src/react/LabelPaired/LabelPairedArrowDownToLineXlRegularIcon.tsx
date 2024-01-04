import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownToLineXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.75 28.5c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h16.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H.75Zm8.766-4.734c-.344.312-.688.312-1.032 0l-6-6c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0l4.734 4.688V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75v13.172l4.734-4.688c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032l-6 6Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineXlRegularIcon);
export default ForwardRef;
