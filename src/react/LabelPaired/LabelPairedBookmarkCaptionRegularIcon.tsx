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
      <path d='M0 4.625C0 4.015.492 3.5 1.125 3.5h6.75C8.485 3.5 9 4.016 9 4.625v10.36c0 .304-.234.515-.54.515a.6.6 0 0 1-.28-.07L4.5 12.969l-3.703 2.46a.6.6 0 0 1-.281.071.49.49 0 0 1-.516-.516zm1.125-.375a.385.385 0 0 0-.375.375v9.938l3.54-2.368a.4.4 0 0 1 .397 0l3.563 2.367V4.626a.4.4 0 0 0-.375-.375z' />
    </g>
    <defs>
      <clipPath id='22b94c4a039c735cdd4a8219d2643038__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkCaptionRegularIcon);
export default ForwardRef;
