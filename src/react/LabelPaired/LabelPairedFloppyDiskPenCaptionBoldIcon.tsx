import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenCaptionBoldIcon = (
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
      <path d='M1.375 5.75v7.5c0 .21.164.375.375.375h4.828l-.281 1.125H1.75a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5h5.742c.399 0 .774.164 1.055.445l1.758 1.758-.797.797L7.75 5.492V5.47v2.343a.555.555 0 0 1-.562.563h-4.5a.54.54 0 0 1-.563-.562V5.374H1.75a.385.385 0 0 0-.375.375m8.93.703c.28.281.445.656.445 1.055V9.03l-1.125 1.125V7.508a.38.38 0 0 0-.117-.258zM3.25 5.375V7.25h3.375V5.375zM4 11c0-.516.281-1.008.75-1.29a1.55 1.55 0 0 1 1.5 0c.445.282.75.774.75 1.29 0 .54-.305 1.031-.75 1.313a1.55 1.55 0 0 1-1.5 0A1.52 1.52 0 0 1 4 11m9.117-1.969.352.352a.95.95 0 0 1 0 1.312l-.703.703-1.664-1.664.703-.703a.95.95 0 0 1 1.312 0M7.54 13.297l3.047-3.047 1.664 1.664-3.047 3.047a.67.67 0 0 1-.328.187l-1.43.352a.39.39 0 0 1-.351-.094.39.39 0 0 1-.094-.351l.352-1.43a.67.67 0 0 1 .187-.328' />
    </g>
    <defs>
      <clipPath id='11fad6858a254aa239f5fdcc4db18b2c__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenCaptionBoldIcon);
export default ForwardRef;
