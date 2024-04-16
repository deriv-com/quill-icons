import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockCaptionFillIcon = (
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
      <path d='M3.625 6.875V8H9.25c.82 0 1.5.68 1.5 1.5V14c0 .844-.68 1.5-1.5 1.5h-7.5A1.48 1.48 0 0 1 .25 14V9.5c0-.82.656-1.5 1.5-1.5h.375V6.875c0-1.852 1.5-3.375 3.375-3.375a3.38 3.38 0 0 1 3.047 1.945c.164.375 0 .82-.375.985a.725.725 0 0 1-.985-.352C6.884 5.445 6.228 5 5.5 5a1.866 1.866 0 0 0-1.875 1.875' />
    </g>
    <defs>
      <clipPath id='cbc06955ddd4c6fb4431721c9687ada0__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockCaptionFillIcon);
export default ForwardRef;
