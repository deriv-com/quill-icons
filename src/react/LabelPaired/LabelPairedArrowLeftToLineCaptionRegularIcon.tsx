import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineCaptionRegularIcon = (
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
      <path d='M.25 13.625v-8.25Q.273 5.023.625 5q.352.023.375.375v8.25q-.023.352-.375.375-.352-.023-.375-.375m2.367-4.383 3-3q.258-.234.516 0 .234.258 0 .516L3.789 9.125h6.586q.352.023.375.375-.023.352-.375.375H3.79l2.343 2.367q.234.258 0 .516-.258.234-.516 0l-3-3q-.234-.258 0-.516' />
    </g>
    <defs>
      <clipPath id='aad34455676c723220737f2036c3bdfb__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineCaptionRegularIcon);
export default ForwardRef;
