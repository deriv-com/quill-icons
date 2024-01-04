import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMobileScreenButtonXlBoldIcon = (
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
        d='M3 27c.031.469.281.719.75.75h10.5c.469-.031.719-.281.75-.75v-3.75H3V27Zm0-6h12V9c-.031-.469-.281-.719-.75-.75H3.75c-.469.031-.719.281-.75.75v12ZM.75 9c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h10.5c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v18c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3.75c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11V9ZM7.5 24.75h3c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-3c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonXlBoldIcon);
export default ForwardRef;
