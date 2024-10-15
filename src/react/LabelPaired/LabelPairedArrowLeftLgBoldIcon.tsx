import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftLgBoldIcon = (
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
      <path d='M.523 16.203c-.195-.195-.273-.43-.273-.703 0-.234.078-.469.273-.664l6.875-6.563c.391-.351.977-.351 1.329.04a.93.93 0 0 1-.04 1.328l-5.195 4.922h13.32a.95.95 0 0 1 .938.937c0 .547-.43.938-.937.938H3.492l5.195 4.96c.39.352.39.938.039 1.329-.352.39-.938.39-1.329.039z' />
    </g>
    <defs>
      <clipPath id='9c20a7a048e986b897e5171a32ee7a81__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftLgBoldIcon);
export default ForwardRef;
