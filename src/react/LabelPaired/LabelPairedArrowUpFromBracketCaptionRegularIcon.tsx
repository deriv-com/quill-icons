import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketCaptionRegularIcon = (
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
      <path d='m5.758 3.617 3 3q.234.258 0 .516-.258.234-.516 0L5.875 4.789v6.586q-.023.352-.375.375-.352-.023-.375-.375V4.789L2.758 7.133q-.258.234-.516 0-.234-.258 0-.516l3-3q.258-.234.516 0M1 11.375v2.25q.024.469.328.797.328.304.797.328h6.75q.469-.024.797-.328.304-.329.328-.797v-2.25q.023-.352.375-.375.352.023.375.375v2.25q-.023.797-.54 1.336-.538.515-1.335.539h-6.75q-.797-.023-1.336-.54-.516-.538-.539-1.335v-2.25q.023-.352.375-.375.352.023.375.375' />
    </g>
    <defs>
      <clipPath id='b10496588b709ad2834ce9f17a3a1173__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketCaptionRegularIcon);
export default ForwardRef;
