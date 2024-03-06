import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageSmRegularIcon = (
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
      <path d='M8.563 6.375H2a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v7q0 .383.246.629a.85.85 0 0 0 .629.246h6.563zm.874 0v8.75H16a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-7a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zm8.313.875v7q-.027.738-.52 1.23-.492.493-1.23.52H2q-.738-.027-1.23-.52-.493-.492-.52-1.23v-7q.027-.738.52-1.23.492-.493 1.23-.52h14q.738.027 1.23.52.493.492.52 1.23M5.035 8.398l1.75 4.375q.11.383-.246.575-.383.109-.574-.246l-.246-.602H3.53l-.246.602q-.191.355-.574.246-.356-.192-.246-.575l1.75-4.375q.137-.273.41-.273t.41.273m-.41 1.34-.766 1.887h1.532zm9.188-1.175V9h1.75q.41.027.437.438-.027.41-.437.437h-.137l-.11.328a5.6 5.6 0 0 1-1.203 1.887l.274.164.52.3q.327.247.163.602-.246.329-.601.164l-.52-.328a3 3 0 0 1-.52-.328q-.327.246-.71.438l-.465.218q-.383.137-.574-.191-.165-.383.191-.574l.465-.246a5 5 0 0 0 .437-.246l-.574-.575q-.246-.3 0-.601.3-.274.602 0l.629.601.027.028a4.55 4.55 0 0 0 1.04-1.614v-.027h-3.309q-.411-.027-.438-.437.027-.411.438-.438h1.75v-.437q.027-.411.437-.438.41.027.438.438' />
    </g>
    <defs>
      <clipPath id='1e38784ab497a48a4430d4fc71d4eb4c__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageSmRegularIcon);
export default ForwardRef;
