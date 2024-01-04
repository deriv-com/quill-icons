import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSignalXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M27.75 6.75v22.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V6.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75ZM21 10.5c.469.031.719.281.75.75v18c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-18c.031-.469.281-.719.75-.75Zm-5.25 5.25v13.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-13.5c.031-.469.281-.719.75-.75.469.031.719.281.75.75ZM9 19.5c.469.031.719.281.75.75v9c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-9c.031-.469.281-.719.75-.75ZM3 24c.469.031.719.281.75.75v4.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-4.5c.031-.469.281-.719.75-.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalXlRegularIcon);
export default ForwardRef;
