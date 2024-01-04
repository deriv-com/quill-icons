import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExpandXlRegularIcon = (
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
        d='M6.75 7.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H1.5v5.25c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-6c.031-.469.281-.719.75-.75h6ZM0 21.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75V27h5.25c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-6c-.469-.031-.719-.281-.75-.75v-6ZM20.25 7.5c.469.031.719.281.75.75v6c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V9h-5.25c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h6Zm-.75 14.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75v6c-.031.469-.281.719-.75.75h-6c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h5.25v-5.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandXlRegularIcon);
export default ForwardRef;
