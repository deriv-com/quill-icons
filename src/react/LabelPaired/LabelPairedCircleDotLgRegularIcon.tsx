import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleDotLgRegularIcon = (
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
    <g>
      <path d='M18.75 15.5c-.026-1.588-.417-3.047-1.172-4.375a8.988 8.988 0 0 0-3.203-3.203C12.995 7.14 11.537 6.75 10 6.75c-1.536 0-2.995.39-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203c-.755 1.328-1.146 2.787-1.172 4.375.026 1.588.417 3.047 1.172 4.375a8.989 8.989 0 0 0 3.203 3.203c1.38.781 2.839 1.172 4.375 1.172 1.537 0 2.995-.39 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.755-1.328 1.146-2.787 1.172-4.375ZM0 15.5c.026-1.823.469-3.49 1.328-5C2.214 8.99 3.438 7.766 5 6.828 6.589 5.943 8.255 5.5 10 5.5s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.563-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5Zm12.5 0c-.026-.938-.443-1.654-1.25-2.148-.833-.47-1.667-.47-2.5 0-.807.494-1.224 1.21-1.25 2.148.026.938.443 1.654 1.25 2.148.833.47 1.667.47 2.5 0 .807-.494 1.224-1.21 1.25-2.148Zm-6.25 0c0-.677.17-1.302.508-1.875A3.759 3.759 0 0 1 10 11.75a3.759 3.759 0 0 1 3.242 1.875 3.62 3.62 0 0 1 .508 1.875 3.62 3.62 0 0 1-.508 1.875A3.759 3.759 0 0 1 10 19.25a3.759 3.759 0 0 1-3.242-1.875A3.62 3.62 0 0 1 6.25 15.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDotLgRegularIcon);
export default ForwardRef;
