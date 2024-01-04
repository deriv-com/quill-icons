import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleTwoSmRegularIcon = (
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
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7 4.625a6.303 6.303 0 0 0-3.063.82 6.292 6.292 0 0 0-2.242 2.242 6.124 6.124 0 0 0 0 6.125 6.293 6.293 0 0 0 2.242 2.243c.93.528 1.951.802 3.063.82a6.303 6.303 0 0 0 3.063-.82 6.292 6.292 0 0 0 2.242-2.242 6.124 6.124 0 0 0 0-6.126 6.292 6.292 0 0 0-2.242-2.242A6.303 6.303 0 0 0 7 4.625ZM7 17.75c-1.276-.018-2.443-.328-3.5-.93-1.057-.62-1.914-1.476-2.57-2.57-.62-1.112-.93-2.279-.93-3.5s.31-2.388.93-3.5C1.586 6.156 2.443 5.3 3.5 4.68c1.057-.602 2.224-.912 3.5-.93 1.276.018 2.443.328 3.5.93 1.057.62 1.914 1.476 2.57 2.57.62 1.112.93 2.279.93 3.5s-.31 2.388-.93 3.5c-.656 1.094-1.513 1.95-2.57 2.57-1.057.602-2.224.912-3.5.93ZM5.934 8.508l-.383.383c-.219.164-.429.155-.63-.028-.163-.218-.154-.428.028-.629l.383-.355c.456-.42.994-.629 1.613-.629.638.036 1.167.264 1.586.684.42.437.638.975.656 1.613 0 .62-.218 1.157-.656 1.613l-2.215 2.215h2.872c.273.018.419.164.437.438-.018.273-.164.419-.438.437H5.25a.503.503 0 0 1-.41-.273.436.436 0 0 1 .11-.465l2.952-2.953c.274-.292.41-.63.41-1.012-.018-.401-.154-.73-.41-.985a1.377 1.377 0 0 0-.984-.437c-.383 0-.711.128-.984.383Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoSmRegularIcon);
export default ForwardRef;
