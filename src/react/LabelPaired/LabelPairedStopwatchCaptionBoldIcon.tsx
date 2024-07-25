import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.625 4.063c0-.305.234-.563.563-.563h2.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-.75v1.172A4.75 4.75 0 0 1 8.71 6.992l.703-.703c.211-.21.563-.21.774 0 .234.234.234.586 0 .797l-.727.726c.562.797.914 1.782.914 2.813 0 2.695-2.203 4.875-4.875 4.875a4.868 4.868 0 0 1-.562-9.703V4.625h-.75a.54.54 0 0 1-.563-.562M5.5 14.375A3.72 3.72 0 0 0 8.734 12.5a3.7 3.7 0 0 0 0-3.75C8.054 7.602 6.836 6.875 5.5 6.875A3.78 3.78 0 0 0 2.242 8.75a3.7 3.7 0 0 0 0 3.75A3.73 3.73 0 0 0 5.5 14.375m.563-5.812V11a.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563V8.563c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563' />
    </g>
    <defs>
      <clipPath id='31c46ae0d72658d999858c16e02ce849__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchCaptionBoldIcon);
export default ForwardRef;
