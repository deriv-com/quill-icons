import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileDocSmRegularIcon = (
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
      <path d='M1.75 16.875h.875v.875H1.75C.766 17.75 0 16.984 0 16V5.5c0-.957.766-1.75 1.75-1.75h4.266c.328 0 .683.164.93.41l3.144 3.145c.246.246.41.601.41.93v3.39h-.875V9H6.563A1.296 1.296 0 0 1 5.25 7.688V4.624h-3.5a.88.88 0 0 0-.875.875V16c0 .492.383.875.875.875m7.848-8.75c-.028-.055-.055-.137-.11-.191L6.316 4.762c-.054-.055-.136-.082-.191-.11v3.036c0 .246.191.437.438.437zm-4.786 5.25h.875c.711 0 1.313.602 1.313 1.313v1.75c0 .738-.602 1.312-1.312 1.312h-.875a.43.43 0 0 1-.438-.437v-3.5a.45.45 0 0 1 .438-.438m.438 3.5h.438a.45.45 0 0 0 .437-.437v-1.75a.47.47 0 0 0-.437-.438H5.25zm7.219-3.5h.437c.602 0 1.094.492 1.094 1.094v.219a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-.22c0-.109-.11-.218-.219-.218h-.437a.216.216 0 0 0-.219.219v2.187c0 .137.082.219.219.219h.437c.11 0 .219-.082.219-.219v-.218a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v.218a1.08 1.08 0 0 1-1.094 1.094h-.437a1.063 1.063 0 0 1-1.094-1.094V14.47a1.08 1.08 0 0 1 1.094-1.094m-4.594 1.094a1.08 1.08 0 0 1 1.094-1.094h.437c.602 0 1.094.492 1.094 1.094v2.187a1.08 1.08 0 0 1-1.094 1.094H8.97a1.063 1.063 0 0 1-1.094-1.094zm1.094-.219a.216.216 0 0 0-.219.219v2.187c0 .137.082.219.219.219h.437c.11 0 .219-.082.219-.219V14.47c0-.11-.11-.219-.219-.219z' />
    </g>
    <defs>
      <clipPath id='3650c11b4e6f1743a187ea0752ae2539__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileDocSmRegularIcon);
export default ForwardRef;
