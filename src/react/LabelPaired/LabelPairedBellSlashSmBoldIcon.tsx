import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBellSlashSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m1.316 3.887 3.965 3.117c.657-1.04 1.604-1.668 2.844-1.887v-.492c0-.255.082-.465.246-.629A.852.852 0 0 1 9 3.75c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629v.492c1.02.182 1.85.647 2.488 1.395.657.747.994 1.65 1.012 2.707v.902a5.536 5.536 0 0 0 1.203 3.418l.41.52c.146.2.183.41.11.629l2.406 1.886c.292.274.328.584.11.93-.274.292-.584.328-.93.11L.496 4.925c-.292-.274-.328-.584-.11-.93.274-.292.584-.328.93-.11m5.004 3.91 6.262 4.922a6.611 6.611 0 0 1-.52-2.598V9.22c-.018-.802-.291-1.477-.82-2.024-.547-.528-1.221-.802-2.023-.82H8.78c-.528 0-1.011.128-1.449.383-.437.273-.775.62-1.012 1.039m5.032 7.328h-7.82a.694.694 0 0 1-.602-.383.71.71 0 0 1 .082-.683l.41-.52a5.499 5.499 0 0 0 1.203-3.39V9.82l1.285 1.012a6.987 6.987 0 0 1-1.066 2.98h4.84zM10.75 16c0 .474-.173.884-.52 1.23-.346.347-.756.52-1.23.52s-.884-.173-1.23-.52A1.682 1.682 0 0 1 7.25 16H9z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashSmBoldIcon);
export default ForwardRef;
