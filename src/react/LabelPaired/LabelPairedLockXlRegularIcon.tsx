import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLockXlRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M6 12v3h9v-3c-.031-1.281-.469-2.344-1.313-3.188-.843-.843-1.906-1.28-3.187-1.312-1.281.031-2.344.469-3.188 1.313C6.47 9.655 6.032 10.719 6 12Zm-1.5 3v-3c.031-1.688.61-3.11 1.734-4.266C7.391 6.61 8.813 6.031 10.5 6c1.688.031 3.11.61 4.266 1.734C15.89 8.891 16.469 10.313 16.5 12v3h.75c1.063.031 1.953.39 2.672 1.078.687.719 1.047 1.61 1.078 2.672v7.5c-.031 1.063-.39 1.953-1.078 2.672-.719.687-1.61 1.047-2.672 1.078H3.75c-1.063-.031-1.953-.39-2.672-1.078C.391 28.203.031 27.312 0 26.25v-7.5c.031-1.063.39-1.953 1.078-2.672.719-.687 1.61-1.047 2.672-1.078h.75Zm-3 3.75v7.5c.031.625.25 1.156.656 1.594.438.406.969.625 1.594.656h13.5a2.446 2.446 0 0 0 1.594-.656c.406-.438.625-.969.656-1.594v-7.5a2.446 2.446 0 0 0-.656-1.594 2.446 2.446 0 0 0-1.594-.656H3.75a2.446 2.446 0 0 0-1.594.656A2.447 2.447 0 0 0 1.5 18.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockXlRegularIcon);
export default ForwardRef;
