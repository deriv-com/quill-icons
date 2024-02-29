import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftLgRegularIcon = (
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
      <path d='M.445 15.07 7.32 8.195q.43-.39.86 0 .39.43 0 .86l-5.782 5.82h14.727q.585.039.625.625-.039.585-.625.625H2.398l5.782 5.82q.39.43 0 .86-.43.39-.86 0L.445 15.93q-.39-.43 0-.86' />
    </g>
    <defs>
      <clipPath id='b34cde1eba5fcdba831e1213403e1133__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftLgRegularIcon);
export default ForwardRef;
