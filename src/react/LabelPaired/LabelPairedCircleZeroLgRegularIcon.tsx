import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleZeroLgRegularIcon = (
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
        d='M10 6.75c-1.589.026-3.047.417-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203C1.64 12.505 1.25 13.963 1.25 15.5s.39 2.995 1.172 4.375a8.988 8.988 0 0 0 3.203 3.203c1.328.755 2.786 1.146 4.375 1.172 1.588-.026 3.047-.417 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.781-1.38 1.172-2.838 1.172-4.375s-.39-2.995-1.172-4.375a8.989 8.989 0 0 0-3.203-3.203C13.047 7.167 11.588 6.776 10 6.75Zm0 18.75c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C.443 18.912 0 17.245 0 15.5s.443-3.412 1.328-5C2.266 8.937 3.49 7.714 5 6.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328Zm0-15c1.068.026 1.953.39 2.656 1.094.703.703 1.068 1.588 1.094 2.656v2.5c-.026 1.068-.39 1.953-1.094 2.656-.703.703-1.588 1.068-2.656 1.094-1.068-.026-1.953-.39-2.656-1.094-.703-.703-1.068-1.588-1.094-2.656v-2.5c.026-1.068.39-1.953 1.094-2.656.703-.703 1.588-1.068 2.656-1.094Zm-2.5 3.75v2.5c.026.703.273 1.29.742 1.758.469.469 1.055.716 1.758.742.703-.026 1.29-.273 1.758-.742.469-.469.716-1.055.742-1.758v-2.5c-.026-.703-.273-1.29-.742-1.758-.469-.469-1.055-.716-1.758-.742-.703.026-1.29.273-1.758.742-.469.469-.716 1.055-.742 1.758Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleZeroLgRegularIcon);
export default ForwardRef;
