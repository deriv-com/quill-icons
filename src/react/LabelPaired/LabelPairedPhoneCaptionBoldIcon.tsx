import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.813 9.945 2.624 1.125q.306.14.47.446a.96.96 0 0 1 .07.632l-.563 2.625q-.188.68-.914.727h-.422l-.703-.047q-2.672-.328-4.781-1.758a10.5 10.5 0 0 1-3.328-3.703Q.024 7.742 0 5q.047-.727.75-.914l2.625-.563a.83.83 0 0 1 .61.094.88.88 0 0 1 .445.446l1.125 2.625q.234.632-.282 1.101l-.937.774a7.16 7.16 0 0 0 2.601 2.601l.774-.937q.469-.516 1.101-.282m1.546 4.43.493-2.32-2.344-1.008-.703.844a1.17 1.17 0 0 1-.657.375 1.04 1.04 0 0 1-.773-.118 8.5 8.5 0 0 1-3.023-3.023q-.187-.375-.118-.75.07-.399.375-.68l.844-.68-1.008-2.367-2.32.516q.07 2.555 1.313 4.617a9.2 9.2 0 0 0 3.28 3.281q2.064 1.243 4.641 1.313' />
    </g>
    <defs>
      <clipPath id='76fd5cf3be0d538b9e153294052d8389__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneCaptionBoldIcon);
export default ForwardRef;
