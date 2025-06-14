import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowUpLgRegularIcon = (
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
      <path d='M0 8c0-.664.547-1.25 1.25-1.25h17.5c.664 0 1.25.586 1.25 1.25v2.5c0 .703-.586 1.25-1.25 1.25H1.25C.547 11.75 0 11.203 0 10.5zm1.25 0v2.5h17.5V8zm0 5H2.5v8.75c0 .703.547 1.25 1.25 1.25h9.492c.235.469.508.898.82 1.25H3.75a2.47 2.47 0 0 1-2.5-2.5zm5 1.875c0-.312.273-.625.625-.625h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-6.25a.617.617 0 0 1-.625-.625m8.242 2.188c1.016-1.72 2.852-2.813 4.883-2.813a5.61 5.61 0 0 1 4.844 2.813c1.015 1.757 1.015 3.906 0 5.625-.977 1.757-2.852 2.812-4.844 2.812a5.6 5.6 0 0 1-4.883-2.812c-1.015-1.72-1.015-3.868 0-5.625m1.094.625c-.781 1.367-.781 3.046 0 4.375a4.35 4.35 0 0 0 3.789 2.187c1.563 0 3.008-.82 3.79-2.187.78-1.329.78-3.008 0-4.375-.782-1.329-2.227-2.188-3.79-2.188-1.562 0-3.008.86-3.79 2.188m1.133 1.445 2.187-2.188a.66.66 0 0 1 .899 0l2.187 2.188a.66.66 0 0 1 0 .898.66.66 0 0 1-.898 0c-.352-.39-.742-.742-1.094-1.133v3.477a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.477c-.39.391-.781.743-1.133 1.133a.66.66 0 0 1-.898 0 .66.66 0 0 1 0-.898M17.5 13h1.25v.04c-.43.038-.86.116-1.25.233z' />
    </g>
    <defs>
      <clipPath id='14f29491d3ef924b488e81df57f6b9bf__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowUpLgRegularIcon);
export default ForwardRef;
