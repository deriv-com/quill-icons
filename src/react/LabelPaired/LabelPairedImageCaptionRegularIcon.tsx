import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageCaptionRegularIcon = (
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
      <path d='M1.5 5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v5.46l1.594-1.57A.9.9 0 0 1 3 9.36a.9.9 0 0 1 .656.28l1.594 1.57 3.094-3.07A.9.9 0 0 1 9 7.86a.9.9 0 0 1 .656.28l1.594 1.57V5.75a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm-.75 7.29v.96q0 .328.21.54.212.21.54.21h.96l2.25-2.25-1.57-1.594a.235.235 0 0 0-.28 0zm8.39-3.634a.234.234 0 0 0-.28 0L3.54 14h6.96a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-2.46zM0 5.75q.024-.632.445-1.055.423-.421 1.055-.445h9q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-9a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 13.25zm3.75 1.125q-.023-.352-.375-.375-.352.023-.375.375.023.352.375.375.352-.023.375-.375m-1.5 0q.024-.633.563-.984.562-.282 1.124 0 .54.351.563.984-.024.633-.562.984-.563.282-1.126 0a1.17 1.17 0 0 1-.562-.984' />
    </g>
    <defs>
      <clipPath id='a6f255be9a931b2881197879e5bbe935__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageCaptionRegularIcon);
export default ForwardRef;
