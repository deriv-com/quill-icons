import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightCaptionBoldIcon = (
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
      <path d='M10.875 9.5c0-1.734-.937-3.328-2.437-4.219a4.89 4.89 0 0 0-4.876 0A4.87 4.87 0 0 0 1.126 9.5a4.88 4.88 0 0 0 2.438 4.242c1.5.867 3.351.867 4.874 0 1.5-.89 2.438-2.484 2.438-4.242M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6.188-3c.914 0 1.687.773 1.687 1.688 0 .374-.117.726-.328.984.422.351.703.867.703 1.453A1.866 1.866 0 0 1 6.375 12.5h-.75a1.85 1.85 0 0 1-1.875-1.875c0-.586.258-1.102.68-1.453a1.7 1.7 0 0 1-.305-.985c0-.914.75-1.687 1.688-1.687zm-.375 2.25h.375a.555.555 0 0 0 .562-.562.57.57 0 0 0-.562-.563h-.375a.555.555 0 0 0-.563.563c0 .328.234.562.563.562m.375 1.125h-.563a.755.755 0 0 0-.75.75c0 .422.328.75.75.75h.75c.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75z' />
    </g>
    <defs>
      <clipPath id='75a4c2cf2e7d74048d7dfa5afbeb607c__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightCaptionBoldIcon);
export default ForwardRef;
