import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternCaptionBoldIcon = (
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
      <path d='M1.688 5c0-.703.585-1.312 1.312-1.312.516 0 .96.328 1.172.75h2.133c.21-.422.656-.75 1.195-.75.516 0 .96.328 1.172.75h2.133c.21-.422.656-.75 1.195-.75.703 0 1.313.609 1.313 1.312a1.326 1.326 0 0 1-1.758 1.242L8.719 9.078c.047.14.094.281.094.422a1.326 1.326 0 0 1-1.758 1.242l-2.72 2.695h1.97c.21-.421.656-.75 1.195-.75.516 0 .96.329 1.172.75h2.133c.21-.421.656-.75 1.195-.75.703 0 1.313.61 1.313 1.313 0 .727-.61 1.313-1.313 1.313-.54 0-.984-.305-1.195-.75H8.672c-.211.445-.656.75-1.172.75-.54 0-.984-.305-1.195-.75H4.172c-.211.445-.656.75-1.172.75A1.31 1.31 0 0 1 1.688 14c0-.703.585-1.312 1.312-1.312.14 0 .281.046.422.093l2.836-2.836A1.326 1.326 0 0 1 7.5 8.187c.14 0 .281.047.422.094l2.719-2.719H8.67c-.21.446-.655.75-1.171.75-.54 0-.984-.304-1.195-.75H4.172c-.211.446-.656.75-1.172.75A1.31 1.31 0 0 1 1.688 5m0 4.5c0 .492.234.914.656 1.148a1.313 1.313 0 1 0 0-2.273A1.26 1.26 0 0 0 1.688 9.5m9 0c0 .492.234.914.656 1.148a1.312 1.312 0 1 0 0-2.273 1.26 1.26 0 0 0-.656 1.125' />
    </g>
    <defs>
      <clipPath id='547d6799016aabc671c69e1bd9ecb900__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternCaptionBoldIcon);
export default ForwardRef;
