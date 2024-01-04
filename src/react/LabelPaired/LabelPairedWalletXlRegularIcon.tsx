import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWalletXlRegularIcon = (
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
        d='M3.75 7.5h18c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-18a2.446 2.446 0 0 0-1.594.656A2.446 2.446 0 0 0 1.5 11.25v13.5c.031.625.25 1.156.656 1.594.438.406.969.625 1.594.656h16.5a2.446 2.446 0 0 0 1.594-.656c.406-.438.625-.969.656-1.594v-10.5a2.446 2.446 0 0 0-.656-1.594A2.446 2.446 0 0 0 20.25 12h-15c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h15c1.063.031 1.953.39 2.672 1.078.687.719 1.047 1.61 1.078 2.672v10.5c-.031 1.063-.39 1.953-1.078 2.672-.719.687-1.61 1.047-2.672 1.078H3.75c-1.063-.031-1.953-.39-2.672-1.078C.391 26.703.031 25.812 0 24.75v-13.5c.031-1.063.39-1.953 1.078-2.672.719-.687 1.61-1.047 2.672-1.078ZM18 20.625c-.688-.063-1.063-.438-1.125-1.125.063-.688.438-1.063 1.125-1.125.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletXlRegularIcon);
export default ForwardRef;
