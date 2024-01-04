import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleStarLgRegularIcon = (
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
        d='M10 6.75c-1.589.026-3.047.417-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203C1.64 12.505 1.25 13.963 1.25 15.5s.39 2.995 1.172 4.375a8.988 8.988 0 0 0 3.203 3.203c1.328.755 2.786 1.146 4.375 1.172 1.588-.026 3.047-.417 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.781-1.38 1.172-2.838 1.172-4.375s-.39-2.995-1.172-4.375a8.989 8.989 0 0 0-3.203-3.203C13.047 7.167 11.588 6.776 10 6.75Zm0 18.75c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C.443 18.912 0 17.245 0 15.5s.443-3.412 1.328-5C2.266 8.937 3.49 7.714 5 6.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328Zm.547-15.586 1.445 2.852 3.164.468a.702.702 0 0 1 .508.43.782.782 0 0 1-.156.664l-2.305 2.227.547 3.125a.653.653 0 0 1-.273.625.603.603 0 0 1-.625.039L10 18.859l-2.813 1.485a.67.67 0 0 1-.664-.04.653.653 0 0 1-.273-.624l.547-3.125-2.266-2.266c-.182-.182-.234-.39-.156-.625a.607.607 0 0 1 .469-.43l3.164-.468 1.445-2.852A.553.553 0 0 1 10 9.563c.26 0 .443.117.547.351Zm-1.563 3.711a.718.718 0 0 1-.468.352l-2.227.312 1.602 1.602a.63.63 0 0 1 .195.546l-.39 2.227 1.992-1.055c.208-.104.403-.104.585 0l2.032 1.055-.39-2.227a.686.686 0 0 1 .155-.546l1.64-1.602-2.226-.312c-.234-.053-.39-.17-.468-.352L10 11.594l-1.016 2.031Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarLgRegularIcon);
export default ForwardRef;
