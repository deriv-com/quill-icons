import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardStepCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.875 5.563c.031-.344.219-.532.563-.563.343.031.53.219.562.563v7.875c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563v-2.46l-4.148 2.906a.74.74 0 0 1-.399.117.627.627 0 0 1-.492-.21.627.627 0 0 1-.211-.493V5.703c0-.203.07-.367.21-.492.126-.14.29-.211.493-.211.156 0 .29.04.399.117l4.148 2.906v-2.46Zm0 4.03v-.187L1.75 6.523V12.5l4.125-2.906Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepCaptionBoldIcon);
export default ForwardRef;
