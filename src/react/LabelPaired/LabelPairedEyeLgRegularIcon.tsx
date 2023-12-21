import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEyeLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.82 10.813a16.335 16.335 0 0 0-2.11 2.46c-.546.834-.95 1.576-1.21 2.227.26.651.664 1.393 1.21 2.227a16.335 16.335 0 0 0 2.11 2.46c.86.808 1.836 1.472 2.93 1.993 1.12.52 2.37.794 3.75.82 1.38-.026 2.63-.3 3.75-.82a11.416 11.416 0 0 0 2.93-1.992 16.342 16.342 0 0 0 2.11-2.461c.546-.834.95-1.576 1.21-2.227-.26-.651-.664-1.393-1.21-2.227a16.342 16.342 0 0 0-2.11-2.46 11.417 11.417 0 0 0-2.93-1.993c-1.12-.52-2.37-.794-3.75-.82-1.38.026-2.63.3-3.75.82a11.417 11.417 0 0 0-2.93 1.992M11.5 6.75c1.588.026 3.008.339 4.258.938a12.78 12.78 0 0 1 3.281 2.226c.912.86 1.667 1.745 2.266 2.656.599.912 1.054 1.732 1.367 2.461.13.313.13.625 0 .938-.313.729-.768 1.55-1.367 2.46-.6.912-1.354 1.798-2.266 2.657a12.779 12.779 0 0 1-3.281 2.227c-1.25.599-2.67.911-4.258.937-1.589-.026-3.008-.338-4.258-.937a12.778 12.778 0 0 1-3.281-2.227c-.912-.86-1.667-1.745-2.266-2.656-.599-.912-1.041-1.732-1.328-2.461a1.174 1.174 0 0 1 0-.938c.287-.729.73-1.55 1.328-2.46.6-.912 1.354-1.798 2.266-2.657a12.78 12.78 0 0 1 3.281-2.226c1.25-.6 2.67-.912 4.258-.938M7.75 15.5c0 .677.17 1.302.508 1.875A3.759 3.759 0 0 0 11.5 19.25a3.759 3.759 0 0 0 3.242-1.875 3.62 3.62 0 0 0 .508-1.875 3.62 3.62 0 0 0-.508-1.875A3.759 3.759 0 0 0 11.5 11.75a3.759 3.759 0 0 0-3.242 1.875A3.62 3.62 0 0 0 7.75 15.5m8.75 0c0 .912-.221 1.745-.664 2.5A5.167 5.167 0 0 1 14 19.836a4.991 4.991 0 0 1-2.5.664 4.991 4.991 0 0 1-2.5-.664A5.167 5.167 0 0 1 7.164 18a4.853 4.853 0 0 1-.664-2.5c0-.912.221-1.745.664-2.5A5.167 5.167 0 0 1 9 11.164a4.991 4.991 0 0 1 2.5-.664c.885 0 1.719.221 2.5.664A5.167 5.167 0 0 1 15.836 13c.443.755.664 1.588.664 2.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeLgRegularIcon);
export default ForwardRef;