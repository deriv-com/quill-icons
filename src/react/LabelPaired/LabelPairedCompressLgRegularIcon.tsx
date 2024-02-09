import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressLgRegularIcon = (
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
      <path d='M6.5 7.375v5q-.039.585-.625.625h-5q-.585-.039-.625-.625.039-.585.625-.625H5.25V7.375q.039-.585.625-.625.585.039.625.625M.875 18h5q.585.039.625.625v5q-.039.585-.625.625-.585-.039-.625-.625V19.25H.875q-.585-.039-.625-.625.039-.585.625-.625M12.75 7.375v4.375h4.375q.585.039.625.625-.039.585-.625.625h-5q-.585-.039-.625-.625v-5q.039-.585.625-.625.585.039.625.625M12.125 18h5q.585.039.625.625-.039.585-.625.625H12.75v4.375q-.039.585-.625.625-.585-.039-.625-.625v-5q.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='ae13ce3f9df250f43cd13148e77034ad__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressLgRegularIcon);
export default ForwardRef;
