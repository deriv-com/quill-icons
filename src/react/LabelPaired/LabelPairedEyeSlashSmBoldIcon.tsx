import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.316 3.887 4.38 6.293a7.9 7.9 0 0 1 2.05-1.203A7.8 7.8 0 0 1 9 4.625q1.668.027 2.98.656 1.313.63 2.297 1.559a10.5 10.5 0 0 1 1.586 1.86q.63.956.957 1.722.11.328 0 .656-.3.684-.847 1.531a11.3 11.3 0 0 1-1.34 1.723l2.87 2.242q.439.411.11.93-.41.438-.93.11L.497 4.925q-.437-.411-.11-.93.411-.437.93-.11m4.13 3.226 1.257.985Q7.66 7.278 9 7.25q1.476.027 2.488 1.012.985 1.011 1.012 2.488 0 .875-.383 1.613l1.477 1.149q.683-.71 1.176-1.45.492-.739.765-1.312-.3-.63-.82-1.422a9.4 9.4 0 0 0-1.34-1.531 6.8 6.8 0 0 0-1.941-1.313Q10.34 5.965 9 5.938q-2.078.054-3.555 1.175m5.605 4.403q.136-.356.136-.766-.027-.93-.628-1.559-.63-.6-1.559-.629h-.055Q9 8.782 9 9q0 .41-.191.766zm.246 3.582 1.148.902q-1.476.82-3.445.875-1.668-.027-2.98-.656a8.5 8.5 0 0 1-2.27-1.559 10 10 0 0 1-1.613-1.86q-.63-.956-.93-1.722a.82.82 0 0 1 0-.656Q1.59 9.437 2.52 8.18l1.039.793q-.739.984-1.094 1.777.3.63.82 1.422a9.4 9.4 0 0 0 1.34 1.531 6.8 6.8 0 0 0 1.941 1.313q1.094.519 2.434.547 1.258-.029 2.297-.465M5.5 10.75v-.219l1.531 1.203q.465.903 1.477 1.149l1.531 1.203q-.492.164-1.039.164-1.476-.027-2.488-1.012-.985-1.012-1.012-2.488' />
    </g>
    <defs>
      <clipPath id='660792ea8c56c57bfaaad9a5ad51304b__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashSmBoldIcon);
export default ForwardRef;
