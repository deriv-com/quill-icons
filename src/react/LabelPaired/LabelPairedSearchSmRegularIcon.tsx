import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchSmRegularIcon = (
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
      <path d='M10.5 9.438a4.6 4.6 0 0 0-.656-2.407 4.74 4.74 0 0 0-1.75-1.75 4.8 4.8 0 0 0-2.406-.656q-1.258 0-2.407.656a4.74 4.74 0 0 0-1.75 1.75 4.6 4.6 0 0 0-.656 2.407q0 1.312.656 2.406a4.74 4.74 0 0 0 1.75 1.75 4.8 4.8 0 0 0 2.407.656q1.257 0 2.406-.656a4.74 4.74 0 0 0 1.75-1.75 4.6 4.6 0 0 0 .656-2.406m-1.121 4.32q-1.53 1.312-3.691 1.367-2.407-.055-4.02-1.668Q.054 11.844 0 9.437q.054-2.406 1.668-4.019Q3.28 3.804 5.688 3.75q2.406.054 4.019 1.668t1.668 4.02q-.055 2.16-1.367 3.69l3.855 3.884q.274.3 0 .601-.3.274-.601 0z' />
    </g>
    <defs>
      <clipPath id='4cb7b69ba7c6658f059e77d6dc0474a4__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchSmRegularIcon);
export default ForwardRef;
