import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTableLayoutXlBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M21 9.75H3c-.469.031-.719.281-.75.75v3h19.5v-3c-.031-.469-.281-.719-.75-.75ZM2.25 25.5c.031.469.281.719.75.75h3.75v-10.5h-4.5v9.75Zm6.75.75h12c.469-.031.719-.281.75-.75v-9.75H9v10.5ZM3 7.5h18c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v15c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11v-15c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutXlBoldIcon);
export default ForwardRef;
