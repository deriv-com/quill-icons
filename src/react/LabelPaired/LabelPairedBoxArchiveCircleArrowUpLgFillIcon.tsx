import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowUpLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8c0-.664.547-1.25 1.25-1.25h17.5c.664 0 1.25.586 1.25 1.25v1.25c0 .703-.586 1.25-1.25 1.25H1.25C.547 10.5 0 9.953 0 9.25zm1.25 3.75h17.5v1.29a6.876 6.876 0 0 0-6.25 6.835c0 1.68.586 3.203 1.563 4.375H3.75a2.47 2.47 0 0 1-2.5-2.5zm5 3.125c0 .352.273.625.625.625h6.25a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625h-6.25a.64.64 0 0 0-.625.625m7.5 5c0-1.992 1.055-3.867 2.813-4.844 1.718-1.015 3.867-1.015 5.625 0A5.61 5.61 0 0 1 25 19.875c0 2.031-1.094 3.867-2.812 4.883-1.758 1.015-3.907 1.015-5.625 0a5.6 5.6 0 0 1-2.813-4.883m2.969-.742a.66.66 0 0 0 0 .898.66.66 0 0 0 .898 0l1.133-1.133v3.477c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625v-3.477l1.094 1.133a.66.66 0 0 0 .898 0 .66.66 0 0 0 0-.898l-2.187-2.188a.66.66 0 0 0-.899 0c-.703.742-1.445 1.446-2.187 2.188' />
    </g>
    <defs>
      <clipPath id='4ceeea47f5a5db48a5c3aa40478117dc__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowUpLgFillIcon);
export default ForwardRef;
