import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineSmBoldIcon = (
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
      <path d='M.906 4.625h9.188q.601.054.656.656-.055.601-.656.657H.906Q.305 5.882.25 5.28q.054-.601.656-.656m5.086 3.719h-.027l3.5 3.719q.383.464-.027.902-.465.383-.903-.027l-2.379-2.489v5.77q-.054.601-.656.656-.602-.055-.656-.656v-5.77l-2.38 2.516q-.436.383-.901.027-.41-.465-.028-.93l3.5-3.718a.6.6 0 0 1 .465-.219.68.68 0 0 1 .492.219' />
    </g>
    <defs>
      <clipPath id='69943d372c1da2626872cbe21636f350__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineSmBoldIcon);
export default ForwardRef;
