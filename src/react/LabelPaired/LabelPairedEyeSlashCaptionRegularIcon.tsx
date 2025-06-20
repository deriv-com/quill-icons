import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashCaptionRegularIcon = (
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
      <path d='m.586 3.594 14.273 11.25c.141.117.188.375.047.515a.35.35 0 0 1-.515.07L.14 4.18c-.164-.117-.211-.374-.07-.515.117-.164.374-.21.515-.07m13.594 6.21a8.8 8.8 0 0 1-1.266 2.087l-.586-.47A8.6 8.6 0 0 0 13.5 9.5a9 9 0 0 0-2.016-2.812C10.477 5.75 9.141 5 7.5 5c-.937 0-1.781.258-2.508.633l-.633-.516C5.25 4.602 6.281 4.25 7.5 4.25c1.875 0 3.398.867 4.5 1.898 1.102 1.008 1.828 2.227 2.18 3.07a.84.84 0 0 1 0 .587M2.063 7.134l.585.469A7.6 7.6 0 0 0 1.5 9.5c.305.75.984 1.875 1.992 2.813C4.5 13.25 5.836 14 7.5 14c.914 0 1.758-.234 2.484-.61l.633.516a6.06 6.06 0 0 1-3.117.844c-1.898 0-3.422-.844-4.523-1.875-1.102-1.031-1.829-2.25-2.18-3.07a.84.84 0 0 1 0-.586 8.8 8.8 0 0 1 1.265-2.086M7.5 12.5a2.99 2.99 0 0 1-3-3c0-.14 0-.281.023-.422l.727.563A2.24 2.24 0 0 0 7.5 11.75c.117 0 .258 0 .375-.023l.727.562A3 3 0 0 1 7.5 12.5m3-3v.023c0 .141-.023.282-.047.422l-.726-.562A2.22 2.22 0 0 0 7.5 7.273c-.14 0-.281 0-.398.024l-.727-.563c.352-.14.727-.234 1.125-.234 1.64 0 3 1.36 3 3' />
    </g>
    <defs>
      <clipPath id='ec3f3bdac5bca06553072f25f062c376__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashCaptionRegularIcon);
export default ForwardRef;
