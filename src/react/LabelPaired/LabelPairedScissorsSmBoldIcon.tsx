import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsSmBoldIcon = (
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
      <path d='M13.836 15.754q-.41.438-.902.082L8.53 12.172l1.04-.848 4.183 3.528q.438.41.082.902M3.063 5.063q-.985.027-1.504.875-.493.874 0 1.75.519.847 1.504.875.984-.028 1.503-.876.494-.874 0-1.75-.519-.847-1.503-.875m0-1.313q1.312.027 2.16.902.875.848.902 2.16 0 .739-.328 1.368l2.078 1.722 5.059-4.238q.492-.356.902.082.356.492-.082.902L5.797 13.32q.328.63.328 1.367-.027 1.314-.902 2.16-.848.876-2.16.903-1.314-.027-2.16-.902Q.026 16 0 14.688q.027-1.314.902-2.16.847-.876 2.16-.903 1.122.027 1.915.684l1.859-1.559-1.86-1.559q-.792.657-1.913.684-1.314-.027-2.16-.902Q.026 8.125 0 6.813.027 5.5.902 4.653q.847-.876 2.16-.903m1.75 10.938q-.028-.985-.875-1.504-.876-.492-1.75 0-.848.519-.876 1.504.028.984.876 1.503.874.494 1.75 0 .847-.519.874-1.503' />
    </g>
    <defs>
      <clipPath id='6245790e01c9a4dfec8adb69348bc3ee__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsSmBoldIcon);
export default ForwardRef;
