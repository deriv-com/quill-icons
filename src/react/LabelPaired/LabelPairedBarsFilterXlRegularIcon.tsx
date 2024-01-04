import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarsFilterXlRegularIcon = (
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
        d='M0 9.75c.031-.469.281-.719.75-.75h19.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H.75c-.469-.031-.719-.281-.75-.75Zm3 7.5c.031-.469.281-.719.75-.75h13.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H3.75c-.469-.031-.719-.281-.75-.75Zm10.5 7.5c-.031.469-.281.719-.75.75h-4.5c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h4.5c.469.031.719.281.75.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterXlRegularIcon);
export default ForwardRef;
