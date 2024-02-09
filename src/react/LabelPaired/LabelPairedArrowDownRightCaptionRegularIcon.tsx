import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.875 13.25h-5.25q-.352-.023-.375-.375.023-.352.375-.375h4.336L.867 6.383q-.234-.258 0-.516.258-.234.516 0L7.5 11.961V7.625q.023-.352.375-.375.352.023.375.375v5.25q-.023.352-.375.375' />
    </g>
    <defs>
      <clipPath id='45db9910266001922908dc7e713c1ebb__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightCaptionRegularIcon);
export default ForwardRef;
