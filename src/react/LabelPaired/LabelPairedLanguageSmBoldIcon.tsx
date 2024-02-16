import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageSmBoldIcon = (
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
      <path d='M2 5.5h14q.738.027 1.23.52.493.492.52 1.23v7q-.027.738-.52 1.23-.492.493-1.23.52H2q-.738-.027-1.23-.52-.493-.492-.52-1.23v-7q.027-.738.52-1.23.492-.493 1.23-.52m14 1.313H9v7.875h7q.41-.028.438-.438v-7q-.028-.41-.438-.437M5.117 8.563q-.136-.301-.492-.329-.355.028-.492.329L2.383 12.5q-.164.465.273.71.465.166.711-.273l.246-.546h2.024l.246.547q.245.437.71.273.438-.246.274-.711zm.028 2.734h-1.04l.52-1.176zm7.574-3.063q.492.056.547.547v.11h1.64q.492.054.547.547-.054.492-.547.546h-.054l-.055.137a5.4 5.4 0 0 1-1.067 1.777l.028.028q.027 0 .027.027l.52.3q.41.301.191.74-.3.41-.738.19l-.52-.3a2.5 2.5 0 0 1-.355-.246 4.8 4.8 0 0 1-.93.547l-.11.027q-.465.164-.71-.274-.164-.464.273-.71l.11-.055q.246-.11.492-.274l-.328-.328q-.33-.383 0-.765.383-.33.765 0l.41.41q.52-.547.82-1.23H10.75q-.492-.056-.547-.547.055-.492.547-.547h1.422v-.11q.054-.492.547-.547' />
    </g>
    <defs>
      <clipPath id='4b5b79f236d7dee85c9702e13a10a946__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageSmBoldIcon);
export default ForwardRef;
