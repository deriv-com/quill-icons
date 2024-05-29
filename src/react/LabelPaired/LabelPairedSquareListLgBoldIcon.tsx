import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareListLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 8.625a.64.64 0 0 0-.625.625v12.5c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625V9.25c0-.312-.312-.625-.625-.625zm-2.5.625c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5zM4 11.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25C4.547 13 4 12.453 4 11.75m4.063 0c0-.508.39-.937.937-.937h3.75a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938H9c-.547 0-.937-.391-.937-.938m0 3.75c0-.508.39-.937.937-.937h3.75a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938H9c-.547 0-.937-.391-.937-.938m0 3.75c0-.508.39-.937.937-.937h3.75a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938H9c-.547 0-.937-.391-.937-.938m-2.813-2.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25M4 19.25c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25' />
    </g>
    <defs>
      <clipPath id='778d2f62be90347b8ea03e6283d3ea28__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareListLgBoldIcon);
export default ForwardRef;
