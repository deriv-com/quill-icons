import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpCaptionRegularIcon = (
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
      <path d='m4.758 4.367 4.125 4.125q.234.258 0 .516-.258.234-.516 0L4.875 5.539v8.836q-.023.352-.375.375-.352-.023-.375-.375V5.539L.633 9.008q-.258.234-.516 0-.234-.258 0-.516l4.125-4.125q.258-.234.516 0' />
    </g>
    <defs>
      <clipPath id='b279b46614059b56b9b383f7637af88f__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpCaptionRegularIcon);
export default ForwardRef;
