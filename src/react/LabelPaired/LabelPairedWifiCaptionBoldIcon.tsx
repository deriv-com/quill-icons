import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.938 7.86q-.422.304-.797-.048-.305-.42.047-.796a11 11 0 0 1 3.328-2.04A10.9 10.9 0 0 1 7.5 4.25q2.109 0 3.984.727a11 11 0 0 1 3.329 2.039q.351.375.046.797-.375.351-.796.046a9.8 9.8 0 0 0-3-1.828A9.6 9.6 0 0 0 7.5 5.375a9.6 9.6 0 0 0-3.562.656 9.8 9.8 0 0 0-3 1.828M7.5 9.5q-2.321.047-3.937 1.523-.4.329-.797-.023-.305-.422.046-.797a6.7 6.7 0 0 1 2.133-1.336A6.6 6.6 0 0 1 7.5 8.375q1.36 0 2.555.492a6.7 6.7 0 0 1 2.133 1.336q.351.375.046.797-.397.351-.796.023Q9.82 9.547 7.5 9.5m1.313 3.938q-.024.75-.657 1.124-.656.375-1.312 0-.632-.374-.657-1.124.024-.75.657-1.126.656-.375 1.312 0 .633.376.656 1.126' />
    </g>
    <defs>
      <clipPath id='2f2bf1c3cec28ff9059119db010b460a__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiCaptionBoldIcon);
export default ForwardRef;
