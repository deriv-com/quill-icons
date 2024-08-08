import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.5 5h11c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5m5.844 3.156 4 4a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L6.5 9.719V18.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V9.719l-3.156 3.156a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l4-4a.53.53 0 0 1 .719 0' />
    </g>
    <defs>
      <clipPath id='a42e5dabf30e526ebb9b1baa207a8020__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineMdRegularIcon);
export default ForwardRef;
