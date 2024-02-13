import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroLgBoldIcon = (
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
      <path d='M18.125 15.5q0-2.226-1.094-4.062-1.054-1.837-2.968-2.97A8.06 8.06 0 0 0 10 7.376a8.06 8.06 0 0 0-4.062 1.094q-1.915 1.133-2.97 2.969-1.092 1.835-1.093 4.062t1.094 4.063q1.054 1.836 2.969 2.968A8.06 8.06 0 0 0 10 23.625a8.06 8.06 0 0 0 4.063-1.094q1.913-1.132 2.968-2.968 1.095-1.837 1.094-4.063M0 15.5q.04-2.735 1.328-5Q2.657 8.235 5 6.828 7.383 5.5 10 5.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q2.657 22.765 1.328 20.5.038 18.235 0 15.5m5 .625h.625a5 5 0 0 1-.04-.586q0-.351.04-.664H5q-.585-.039-.625-.625.039-.585.625-.625h.977q.586-1.406 1.796-2.266 1.25-.82 2.852-.859h1.602q.859.078.937.938-.078.858-.937.937h-1.602q-1.602.04-2.5 1.25h3.125q.585.039.625.625-.039.585-.625.625H7.54a2.7 2.7 0 0 0-.08.664q0 .312.08.586h3.71q.585.039.625.625-.039.585-.625.625H8.047q.937 1.25 2.578 1.328h1.602q.859.078.937.938-.078.82-.937.937h-1.602q-1.64-.039-2.852-.898a5.3 5.3 0 0 1-1.835-2.305H5q-.585-.039-.625-.625.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='283945b3a7e4760af039ab1d968f62af__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroLgBoldIcon);
export default ForwardRef;
