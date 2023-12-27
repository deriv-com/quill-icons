import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleOneSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M13.125 10.75a6.303 6.303 0 0 0-.82-3.063 6.293 6.293 0 0 0-2.242-2.242 6.124 6.124 0 0 0-6.126 0 6.292 6.292 0 0 0-2.242 2.242 6.303 6.303 0 0 0-.82 3.063 6.303 6.303 0 0 0 .82 3.063 6.292 6.292 0 0 0 2.242 2.242 6.124 6.124 0 0 0 6.126 0 6.292 6.292 0 0 0 2.242-2.242c.528-.93.802-1.951.82-3.063ZM0 10.75c.018-1.276.328-2.443.93-3.5.62-1.057 1.476-1.914 2.57-2.57 1.112-.62 2.279-.93 3.5-.93s2.388.31 3.5.93c1.094.656 1.95 1.513 2.57 2.57.602 1.057.912 2.224.93 3.5-.018 1.276-.328 2.443-.93 3.5-.62 1.057-1.476 1.914-2.57 2.57-1.112.62-2.279.93-3.5.93s-2.388-.31-3.5-.93c-1.094-.656-1.95-1.513-2.57-2.57-.602-1.057-.912-2.224-.93-3.5Zm7.219-3.445a.428.428 0 0 1 .218.383v5.687H8.75c.273.018.42.164.438.438-.019.273-.165.419-.438.437h-3.5c-.273-.018-.42-.164-.438-.438.019-.273.165-.419.438-.437h1.313V8.453l-.875.492c-.237.11-.438.055-.602-.164-.11-.237-.055-.437.164-.601l1.531-.875a.465.465 0 0 1 .438 0Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleOneSmRegularIcon);
export default ForwardRef;
