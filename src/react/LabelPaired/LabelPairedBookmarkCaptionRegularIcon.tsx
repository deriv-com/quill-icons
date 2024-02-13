import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkCaptionRegularIcon = (
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
      <path d='M0 4.625q.024-.468.328-.797.329-.304.797-.328h6.75q.469.024.797.328.304.329.328.797v10.36q-.046.468-.516.515a.44.44 0 0 1-.28-.094L4.5 12.946l-3.703 2.46a.44.44 0 0 1-.281.094q-.47-.046-.516-.516zm1.125-.375q-.352.023-.375.375v9.914l3.54-2.344a.35.35 0 0 1 .42 0l3.54 2.344V4.625q-.023-.352-.375-.375z' />
    </g>
    <defs>
      <clipPath id='ab45a207434a813919b9f07aca075e8f__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkCaptionRegularIcon);
export default ForwardRef;
