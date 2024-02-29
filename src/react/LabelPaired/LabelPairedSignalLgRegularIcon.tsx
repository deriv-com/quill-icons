import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalLgRegularIcon = (
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
      <path d='M23.125 6.125v18.75q-.039.585-.625.625-.585-.039-.625-.625V6.125q.039-.585.625-.625.585.039.625.625M17.5 9.25q.585.039.625.625v15q-.039.585-.625.625-.585-.039-.625-.625v-15q.039-.585.625-.625m-4.375 4.375v11.25q-.039.585-.625.625-.585-.039-.625-.625v-11.25q.039-.585.625-.625.585.039.625.625M7.5 16.75q.585.039.625.625v7.5q-.039.585-.625.625-.585-.039-.625-.625v-7.5q.039-.585.625-.625m-5 3.75q.586.039.625.625v3.75q-.039.585-.625.625-.585-.039-.625-.625v-3.75q.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='a9304416efb2f63551952cfbd3fbae60__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalLgRegularIcon);
export default ForwardRef;
