import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 25.5q.046.704.75.75h15q.704-.046.75-.75v-2.25H2.25zM15.656 21h3.094V10.5q-.046-.703-.75-.75H3q-.703.047-.75.75V21h3.094a3.1 3.1 0 0 1 1.031-1.594q.797-.656 1.875-.656h4.5q1.078 0 1.875.656.75.61 1.031 1.594M21 10.5v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-15q.047-1.266.89-2.11.844-.843 2.11-.89h15q1.266.047 2.11.89.843.844.89 2.11M7.5 14.25q.047-1.687 1.5-2.578 1.5-.844 3 0 1.453.89 1.5 2.578-.047 1.687-1.5 2.578-1.5.845-3 0-1.453-.89-1.5-2.578' />
    </g>
    <defs>
      <clipPath id='1bf3a2088532a6ae__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserXlBoldIcon);
export default ForwardRef;
