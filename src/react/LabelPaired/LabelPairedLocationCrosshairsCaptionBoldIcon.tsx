import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsCaptionBoldIcon = (
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
      <path d='M6 3.5a.57.57 0 0 1 .563.563v.984a4.525 4.525 0 0 1 3.89 3.89h.985A.57.57 0 0 1 12 9.5a.555.555 0 0 1-.562.563h-.985c-.258 2.039-1.875 3.656-3.89 3.914v.96A.555.555 0 0 1 6 15.5a.54.54 0 0 1-.562-.562v-.961a4.53 4.53 0 0 1-3.915-3.915h-.96A.54.54 0 0 1 0 9.5c0-.305.234-.562.563-.562h.96c.258-2.016 1.875-3.633 3.915-3.891v-.984c0-.305.234-.563.562-.563m-3.375 6c0 1.219.633 2.32 1.688 2.93 1.03.61 2.32.61 3.375 0A3.4 3.4 0 0 0 9.375 9.5c0-1.195-.656-2.297-1.687-2.906a3.34 3.34 0 0 0-3.375 0A3.35 3.35 0 0 0 2.625 9.5m4.5 0c0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.125 0 1.122 1.122 0 0 0 0 1.945c.328.21.773.21 1.125 0 .328-.212.562-.563.562-.985m-3.375 0c0-.797.422-1.523 1.125-1.945a2.27 2.27 0 0 1 2.25 0c.68.422 1.125 1.148 1.125 1.945 0 .82-.445 1.547-1.125 1.969a2.27 2.27 0 0 1-2.25 0A2.27 2.27 0 0 1 3.75 9.5' />
    </g>
    <defs>
      <clipPath id='64134821fbe95d1cfcfc6cc8ff760dcf__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsCaptionBoldIcon);
export default ForwardRef;
