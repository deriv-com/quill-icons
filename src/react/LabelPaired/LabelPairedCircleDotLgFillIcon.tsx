import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleDotLgFillIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10 25.5c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C.443 18.912 0 17.245 0 15.5s.443-3.412 1.328-5C2.266 8.937 3.49 7.714 5 6.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328Zm0-13.75a3.62 3.62 0 0 0-1.875.508A3.759 3.759 0 0 0 6.25 15.5a3.759 3.759 0 0 0 1.875 3.242A3.62 3.62 0 0 0 10 19.25a3.62 3.62 0 0 0 1.875-.508A3.759 3.759 0 0 0 13.75 15.5a3.759 3.759 0 0 0-1.875-3.242A3.62 3.62 0 0 0 10 11.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDotLgFillIcon);
export default ForwardRef;
