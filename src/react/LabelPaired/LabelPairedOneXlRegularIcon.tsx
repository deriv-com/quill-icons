import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedOneXlRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={36}
    viewBox='0 0 12 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.75 8.25V27h4.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H.75c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h4.5V9.656L1.922 11.86c-.406.22-.75.157-1.031-.187-.22-.406-.157-.75.187-1.031l4.5-3a.804.804 0 0 1 .797-.047c.25.156.375.375.375.656Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneXlRegularIcon);
export default ForwardRef;
