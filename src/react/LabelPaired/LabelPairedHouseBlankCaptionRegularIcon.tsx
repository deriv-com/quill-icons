import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.742 3.594q.258-.187.516 0l6.375 5.625q.234.258.023.539-.258.234-.539.023l-.867-.773v4.617q-.023.797-.54 1.336-.538.515-1.335.539h-6.75q-.797-.023-1.336-.54-.515-.538-.539-1.335V9.008l-.867.773q-.281.21-.54-.023-.21-.281.024-.54zM2.5 8.352v5.273q.024.469.328.797.329.304.797.328h6.75q.469-.024.797-.328.304-.329.328-.797V8.352L7 4.367z' />
    </g>
    <defs>
      <clipPath id='519e9167925448d122442de3b69fe597__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankCaptionRegularIcon);
export default ForwardRef;
