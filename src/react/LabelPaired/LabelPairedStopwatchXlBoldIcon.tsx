import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.75 7.125C6.75 6.515 7.219 6 7.875 6h5.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-1.5v2.344a9.5 9.5 0 0 1 5.297 2.39l1.406-1.406a1.103 1.103 0 0 1 1.547 0c.469.469.469 1.172 0 1.594l-1.453 1.453c1.125 1.594 1.828 3.563 1.828 5.625 0 5.39-4.406 9.75-9.75 9.75-5.39 0-9.75-4.36-9.75-9.75 0-4.969 3.75-9.094 8.625-9.656V8.25h-1.5c-.656 0-1.125-.469-1.125-1.125M10.5 27.75c2.672 0 5.11-1.406 6.469-3.75 1.36-2.297 1.36-5.156 0-7.5-1.36-2.297-3.797-3.75-6.469-3.75-2.719 0-5.156 1.453-6.516 3.75-1.359 2.344-1.359 5.203 0 7.5a7.46 7.46 0 0 0 6.516 3.75m1.125-11.625V21a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125v-4.875c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='d97139d4826e653c913c949a5694b649__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchXlBoldIcon);
export default ForwardRef;
