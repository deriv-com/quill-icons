import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckCaptionBoldIcon = (
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
      <path d='M1.71 6.477c-.14.07-.21.187-.21.304 0 2.157.89 5.836 4.36 7.5.07.047.187.047.257 0 3.469-1.64 4.36-5.344 4.383-7.5 0-.117-.094-.234-.21-.304L6 4.672zm9-1.032c.517.235.915.727.915 1.336-.023 2.344-.984 6.586-5.016 8.532a1.44 1.44 0 0 1-1.242 0C1.336 13.367.375 9.125.375 6.78c-.023-.61.375-1.101.89-1.336L5.673 3.57a.75.75 0 0 1 .633 0zm-3.398 2.93c0 .54-.328.984-.75 1.195v1.617A.555.555 0 0 1 6 11.75a.54.54 0 0 1-.562-.562V9.57a1.31 1.31 0 0 1-.75-1.195c0-.703.585-1.312 1.312-1.312.703 0 1.313.609 1.313 1.312' />
    </g>
    <defs>
      <clipPath id='12f82fba8cd8735257a6ce278370c21e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckCaptionBoldIcon);
export default ForwardRef;
