import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTakeProfitMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7 9.031v7.156H5.625V9.032h-2.5V7.812h6.344v1.22H7Zm3.813 7.156V7.813h3.593c.781 0 1.375.25 1.813.688.406.469.625 1.094.625 1.844 0 .781-.219 1.375-.625 1.844-.438.468-1.032.687-1.813.687h-2.25v3.313h-1.344Zm1.343-4.5h2.156c.344 0 .626-.093.813-.28.188-.188.281-.438.281-.782v-.563c0-.343-.094-.593-.281-.78-.188-.188-.469-.282-.813-.282h-2.156v2.688Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitMdRegularIcon);
export default ForwardRef;
