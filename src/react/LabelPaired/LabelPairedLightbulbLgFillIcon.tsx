import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.625 20.5h-6.25a11.3 11.3 0 0 0-1.914-3.36v-.038a23 23 0 0 1-.625-.82Q.664 14.601.625 12.374q.079-2.93 2.031-4.844Q4.57 5.578 7.5 5.5q2.93.079 4.844 2.031 1.953 1.913 2.031 4.844-.04 2.227-1.21 3.906l-.626.86v.039a11.5 11.5 0 0 0-1.914 3.32m-3.125 5q-1.328-.04-2.227-.898-.859-.9-.898-2.227v-.625h6.25v.625q-.039 1.328-.898 2.227-.9.858-2.227.898M4.375 12.375q.04-1.328.898-2.227.9-.858 2.227-.898.585-.039.625-.625Q8.086 8.04 7.5 8q-1.875.039-3.086 1.29-1.25 1.21-1.289 3.085.039.585.625.625.585-.039.625-.625' />
    </g>
    <defs>
      <clipPath id='faea7abd0fd74af7f796ebf06042e07c__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbLgFillIcon);
export default ForwardRef;
