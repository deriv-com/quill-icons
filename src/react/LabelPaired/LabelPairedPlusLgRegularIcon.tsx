import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusLgRegularIcon = (
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
      <path d='M9.625 8v6.875H16.5q.585.039.625.625-.039.585-.625.625H9.625V23q-.039.585-.625.625-.585-.039-.625-.625v-6.875H1.5q-.585-.039-.625-.625.039-.585.625-.625h6.875V8q.039-.585.625-.625.585.039.625.625' />
    </g>
    <defs>
      <clipPath id='37a82e05e6aed1e23332ef70d05ef288__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusLgRegularIcon);
export default ForwardRef;
