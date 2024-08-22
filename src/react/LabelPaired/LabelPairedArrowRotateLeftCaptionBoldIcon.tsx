import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftCaptionBoldIcon = (
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
      <path d='M.938 8.75a.54.54 0 0 1-.563-.562V4.812c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563V6.71l.469-.563C2.929 5 4.359 4.25 6 4.25c2.883 0 5.25 2.367 5.25 5.25A5.256 5.256 0 0 1 6 14.75a5.27 5.27 0 0 1-3.164-1.031.586.586 0 0 1-.117-.797.564.564 0 0 1 .797-.117c.68.515 1.547.82 2.484.82A4.116 4.116 0 0 0 10.125 9.5 4.13 4.13 0 0 0 6 5.375c-1.29 0-2.414.586-3.187 1.5l-.633.75h2.133a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562z' />
    </g>
    <defs>
      <clipPath id='92a4b5ebf072abb8fb0dea6c80276854__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftCaptionBoldIcon);
export default ForwardRef;
