import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 16.875q.355 0 .793-.355t.902-1.204q.41-.82.657-1.941H4.648q.247 1.121.657 1.941.465.849.902 1.204.438.355.793.355M4.484 12.5h5.032q.11-.82.109-1.75 0-.93-.11-1.75h-5.03q-.11.82-.11 1.75t.11 1.75m.164-4.375h4.704q-.247-1.121-.657-1.941-.464-.849-.902-1.204T7 4.625q-.355 0-.793.355-.437.355-.902 1.204-.41.82-.657 1.941M10.391 9q.108.847.109 1.75 0 .903-.11 1.75h2.489a6.2 6.2 0 0 0 .246-1.75q0-.903-.246-1.75zm2.16-.875a6.277 6.277 0 0 0-3.582-3.172q.874 1.176 1.285 3.172zm-8.805 0q.41-1.996 1.313-3.172a6.2 6.2 0 0 0-2.133 1.23 5.8 5.8 0 0 0-1.45 1.942zM1.121 9a6.3 6.3 0 0 0-.246 1.75q0 .903.246 1.75H3.61a14 14 0 0 1-.109-1.75q0-.903.11-1.75zm7.848 7.547a6.3 6.3 0 0 0 2.105-1.23 5.8 5.8 0 0 0 1.45-1.942h-2.27q-.41 1.995-1.285 3.172m-3.91 0q-.903-1.176-1.313-3.172h-2.27q.52 1.121 1.45 1.941t2.133 1.23M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93' />
    </g>
    <defs>
      <clipPath id='9d70f44d7813605979667a5d929772f3__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeSmRegularIcon);
export default ForwardRef;
