import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.164 7.023v.04l6.563 6.875c.364.442.364.872 0 1.289-.47.364-.912.364-1.329 0l-4.96-5.196v13.281c-.053.573-.365.886-.938.938-.573-.052-.885-.365-.938-.938v-13.28l-4.96 5.155c-.417.391-.86.404-1.329.04-.364-.417-.364-.86 0-1.329l6.563-6.875A.904.904 0 0 1 7.5 6.75c.26 0 .482.091.664.273Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLgBoldIcon);
export default ForwardRef;
