import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21.75 18q0-2.671-1.312-4.875-1.266-2.203-3.563-3.562Q14.578 8.25 12 8.25T7.125 9.563q-2.297 1.359-3.562 3.562Q2.25 15.329 2.25 18t1.313 4.875q1.264 2.203 3.562 3.563Q9.422 27.75 12 27.75t4.875-1.312q2.297-1.36 3.563-3.563Q21.75 20.671 21.75 18M0 18q.047-3.28 1.594-6Q3.187 9.282 6 7.594 8.859 6 12 6t6 1.594Q20.813 9.28 22.406 12q1.548 2.72 1.594 6-.046 3.282-1.594 6-1.593 2.719-4.406 4.406Q15.141 30 12 30t-6-1.594Q3.187 26.72 1.594 24 .047 21.282 0 18m12.281-4.5q-.61 0-1.031.422a1.4 1.4 0 0 0-.422 1.031V16.5h1.922q.703.046.75.75-.047.704-.75.75h-1.875v.469A7 7 0 0 1 10.406 21h4.969q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-6.75q-.61 0-.937-.516-.33-.562-.047-1.125l.422-.89a4.6 4.6 0 0 0 .562-2.25V18H8.25q-.703-.046-.75-.75.046-.704.75-.75h.375l-.047-1.547q.046-1.593 1.078-2.625 1.032-1.031 2.625-1.078.703 0 1.36.281l1.406.563q.937.469.61 1.453-.47.89-1.454.61l-1.406-.563a1.6 1.6 0 0 0-.516-.094' />
    </g>
    <defs>
      <clipPath id='98af66846f7e4d6da0f5ea3abe9b30f8__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingXlBoldIcon);
export default ForwardRef;
