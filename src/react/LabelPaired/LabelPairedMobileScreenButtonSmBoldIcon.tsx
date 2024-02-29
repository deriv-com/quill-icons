import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 16q.027.41.438.438h6.124Q8.974 16.41 9 16v-2.187H2zm0-3.5h7v-7q-.027-.41-.437-.437H2.436Q2.027 5.09 2 5.5zm-1.312-7q.026-.738.519-1.23.492-.493 1.23-.52h6.126q.738.027 1.23.52.492.492.52 1.23V16q-.028.738-.52 1.23-.492.493-1.23.52H2.436q-.738-.027-1.23-.52-.492-.492-.52-1.23zm3.937 9.188h1.75q.41.027.438.437-.029.41-.438.438h-1.75q-.41-.028-.437-.438.027-.41.437-.437' />
    </g>
    <defs>
      <clipPath id='f79c3b8118e1f7200a8c262e3b25627f__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonSmBoldIcon);
export default ForwardRef;
