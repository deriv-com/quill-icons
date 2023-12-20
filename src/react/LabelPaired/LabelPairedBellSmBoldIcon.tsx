import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBellSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.5 3.75c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629v.492c1.02.182 1.85.647 2.488 1.395.657.747.994 1.65 1.012 2.707v.902a5.536 5.536 0 0 0 1.203 3.418l.41.52a.71.71 0 0 1 .082.683.694.694 0 0 1-.601.383H1.03a.694.694 0 0 1-.601-.383c-.11-.237-.082-.465.082-.683l.41-.52a5.536 5.536 0 0 0 1.203-3.418V9.22c.018-1.058.355-1.96 1.012-2.707.638-.748 1.467-1.213 2.488-1.395v-.492c0-.255.082-.465.246-.629A.852.852 0 0 1 6.5 3.75m0 2.625h-.219c-.802.018-1.476.292-2.023.82-.529.547-.802 1.222-.82 2.024v.902a6.891 6.891 0 0 1-1.094 3.691h8.312a6.59 6.59 0 0 1-1.094-3.69v-.903c-.018-.802-.291-1.477-.82-2.024-.547-.528-1.221-.802-2.023-.82zM8.25 16c0 .474-.173.884-.52 1.23-.346.347-.756.52-1.23.52s-.884-.173-1.23-.52A1.682 1.682 0 0 1 4.75 16H6.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSmBoldIcon);
export default ForwardRef;
