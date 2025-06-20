import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 4.25h5.672c.398 0 .797.164 1.078.445L10.305 6.5c.28.281.445.68.445 1.078v1.453l-3.727 3.727a1.5 1.5 0 0 0-.398.703l-.328 1.289H1.75a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5m0 2.25V8c0 .422.328.75.75.75H7c.398 0 .75-.328.75-.75V6.5A.77.77 0 0 0 7 5.75H2.5a.755.755 0 0 0-.75.75m3.75 3.75c-.54 0-1.031.305-1.312.75a1.55 1.55 0 0 0 0 1.5c.28.469.773.75 1.312.75.516 0 1.008-.281 1.29-.75a1.55 1.55 0 0 0 0-1.5c-.282-.445-.774-.75-1.29-.75m7.617-1.219.352.352a.95.95 0 0 1 0 1.312l-.703.703-1.664-1.664.703-.703a.95.95 0 0 1 1.312 0M7.54 13.297l3.047-3.047 1.664 1.664-3.047 3.047a.67.67 0 0 1-.328.187l-1.43.352a.39.39 0 0 1-.351-.094.39.39 0 0 1-.094-.351l.352-1.43a.67.67 0 0 1 .187-.328' />
    </g>
    <defs>
      <clipPath id='6fe7be3fb5b717f4c8aea6527d5895b9__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenCaptionFillIcon);
export default ForwardRef;
