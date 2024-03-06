import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneSmRegularIcon = (
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
      <path d='m10.281 11.27 3.063 1.312q.355.165.547.52.163.327.082.71l-.657 3.063q-.217.82-1.066.875h-.492a3 3 0 0 0-.383-.027q-3.2-.274-5.77-1.942a12.26 12.26 0 0 1-4.074-4.347Q.028 8.78 0 5.5q.054-.847.875-1.066l3.063-.657a.96.96 0 0 1 .71.11q.355.164.52.52L6.48 7.468q.274.738-.328 1.285l-1.093.902a8.36 8.36 0 0 0 3.035 3.035l.902-1.093q.547-.601 1.285-.328m1.969 5.605q.164 0 .219-.164l.656-3.063q.028-.191-.137-.246L9.926 12.09q-.137-.055-.246.055l-.903 1.12q-.492.494-1.12.192a9 9 0 0 1-3.364-3.363q-.3-.63.191-1.121l1.121-.903q.11-.11.055-.246L4.348 4.762q-.083-.165-.246-.137l-3.063.656q-.164.056-.164.219.027 3.172 1.559 5.742a11.2 11.2 0 0 0 4.074 4.074q2.57 1.531 5.742 1.559' />
    </g>
    <defs>
      <clipPath id='bbb8d6da07a1f57c1a4494f4d69d78cc__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneSmRegularIcon);
export default ForwardRef;
