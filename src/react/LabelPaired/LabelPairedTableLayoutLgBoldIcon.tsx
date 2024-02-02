import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTableLayoutLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.5 8.625h-15q-.585.039-.625.625v2.5h16.25v-2.5q-.039-.585-.625-.625M1.875 21.75q.039.585.625.625h3.125v-8.75h-3.75zm5.625.625h10q.585-.039.625-.625v-8.125H7.5zM2.5 6.75h15q1.055.039 1.758.742T20 9.25v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q.04 22.804 0 21.75V9.25q.039-1.055.742-1.758T2.5 6.75' />
    </g>
    <defs>
      <clipPath id='16f9ac970d32b63039d96b26e4c515f0__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutLgBoldIcon);
export default ForwardRef;
