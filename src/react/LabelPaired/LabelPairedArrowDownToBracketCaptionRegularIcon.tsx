import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketCaptionRegularIcon = (
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
      <path d='m8.758 8.633-3 3q-.258.234-.516 0l-3-3q-.234-.258 0-.516.258-.234.516 0l2.367 2.344V3.875q.023-.352.375-.375.352.023.375.375v6.586l2.367-2.344q.258-.234.516 0 .234.258 0 .516M1 11.375v2.25q.024.469.328.797.328.304.797.328h6.75q.469-.024.797-.328.304-.329.328-.797v-2.25q.023-.352.375-.375.352.023.375.375v2.25q-.023.797-.54 1.336-.538.515-1.335.539h-6.75q-.797-.023-1.336-.54-.516-.538-.539-1.335v-2.25q.023-.352.375-.375.352.023.375.375' />
    </g>
    <defs>
      <clipPath id='22c80b7dcb3fe9317511c81dff1a2b31__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketCaptionRegularIcon);
export default ForwardRef;
