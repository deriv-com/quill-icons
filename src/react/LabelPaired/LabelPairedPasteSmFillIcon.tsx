import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteSmFillIcon = (
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
      <path d='M4.375 3.75c.629 0 1.203.355 1.504.875h1.559c.71 0 1.312.602 1.312 1.313v.437H7.438c-1.231 0-2.188.984-2.188 2.188V16H1.313A1.296 1.296 0 0 1 0 14.688v-8.75c0-.711.574-1.313 1.313-1.313h1.53c.302-.52.876-.875 1.532-.875m3.063 3.5h3.39c.328 0 .684.164.93.41l1.832 1.832c.246.246.41.602.41.93v6.015c0 .739-.602 1.313-1.312 1.313h-5.25a1.296 1.296 0 0 1-1.313-1.312V8.563c0-.711.574-1.313 1.313-1.313M4.374 4.844c-.383 0-.656.3-.656.656 0 .383.273.656.656.656a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656' />
    </g>
    <defs>
      <clipPath id='7946cd47d75ab0ccfdf4634d025e0ae2__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteSmFillIcon);
export default ForwardRef;
