import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.625 8.375q0-1.008-.492-1.875A3.9 3.9 0 0 0 6.75 5.117a3.82 3.82 0 0 0-3.75 0A3.9 3.9 0 0 0 1.617 6.5a3.74 3.74 0 0 0-.492 1.875q0 1.008.492 1.875.516.868 1.383 1.383a3.82 3.82 0 0 0 3.75 0 3.9 3.9 0 0 0 1.383-1.383 3.74 3.74 0 0 0 .492-1.875m-.727 3.82q-1.265 1.032-3.023 1.055-2.062-.047-3.445-1.43T0 8.375Q.047 6.313 1.43 4.93T4.875 3.5q2.062.047 3.445 1.43t1.43 3.445q-.024 1.758-1.055 3.023l3.14 3.141q.33.399 0 .797-.397.328-.796 0z' />
    </g>
    <defs>
      <clipPath id='acec6af658003e54969da353f3540db5__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchCaptionBoldIcon);
export default ForwardRef;
