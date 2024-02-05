import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseSmBoldIcon = (
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
      <path d='M4.813 5.281v1.094h4.375V5.281q-.028-.19-.22-.218H5.032q-.19.026-.218.218M3.5 6.375V5.281q.027-.656.438-1.093.437-.411 1.093-.438H8.97q.656.027 1.094.438.41.437.437 1.093v1.094h1.75q.738.027 1.23.52.493.492.52 1.23v7q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52-.493-.492-.52-1.23v-7q.027-.738.52-1.23.492-.493 1.23-.52zm-2.187 5.688v3.062q.027.41.437.438h10.5q.41-.028.438-.438v-3.062H8.75v.437a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246h-1.75a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629v-.437zM5.25 10.75h7.438V8.125q-.028-.41-.438-.437H1.75q-.41.027-.437.437v2.625z' />
    </g>
    <defs>
      <clipPath id='8f72150d1c1519ccaba16420a98acd8b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseSmBoldIcon);
export default ForwardRef;
