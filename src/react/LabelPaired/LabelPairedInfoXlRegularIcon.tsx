import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedInfoXlRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={36}
    viewBox='0 0 9 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3 9c0-.438.14-.797.422-1.078.281-.281.64-.422 1.078-.422.438 0 .797.14 1.078.422C5.86 8.203 6 8.562 6 9c0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422-.438 0-.797-.14-1.078-.422C3.14 9.797 3 9.438 3 9ZM.75 14.25c.031-.469.281-.719.75-.75h3c.469.031.719.281.75.75V27h3c.469.031.719.281.75.75-.031.469-.281.719-.75.75H.75c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h3V15H1.5c-.469-.031-.719-.281-.75-.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoXlRegularIcon);
export default ForwardRef;
