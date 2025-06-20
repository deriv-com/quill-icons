import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 23.625h1.875V25.5H2.5A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758v5.82h-1.875V11.75H10c-.703 0-1.25-.547-1.25-1.25V7.375H2.5A.64.64 0 0 0 1.875 8v15c0 .352.273.625.625.625m4.375-4.375h1.25c1.172 0 2.188 1.016 2.188 2.188 0 1.21-1.016 2.187-2.188 2.187H7.5v1.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625m1.25 3.125c.508 0 .938-.39.938-.937a.95.95 0 0 0-.938-.938H7.5v1.875zm3.75-3.125h1.25c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-1.25a.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625m1.25 5a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625H12.5v3.75zm3.125-4.375c0-.312.273-.625.625-.625h1.875c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H17.5v1.25h1.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H17.5v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-5' />
    </g>
    <defs>
      <clipPath id='d9f52328669651fc151caf8128232dc3__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfLgBoldIcon);
export default ForwardRef;
