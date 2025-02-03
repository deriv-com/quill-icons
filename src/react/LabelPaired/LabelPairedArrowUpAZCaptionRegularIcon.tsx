import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZCaptionRegularIcon = (
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
      <path d='m4.258 4.367 2.25 2.25c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L4.376 5.538v8.836c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V5.539L2.008 7.156a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l2.25-2.25c.141-.14.4-.14.54 0M8.5 10.25h3c.14 0 .258.094.328.234a.32.32 0 0 1-.047.375L9.273 14H11.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3a.36.36 0 0 1-.352-.21c-.07-.118-.046-.282.047-.4L10.703 11H8.5a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375m1.5-6c.14 0 .258.094.328.21l1.5 3v.024l.375.727a.385.385 0 0 1-.164.516.385.385 0 0 1-.516-.165L11.266 8H8.71l-.258.563a.385.385 0 0 1-.515.164c-.165-.094-.258-.329-.165-.516l.375-.727v-.023l1.5-3A.4.4 0 0 1 10 4.25m-.914 3h1.805L10 5.469z' />
    </g>
    <defs>
      <clipPath id='db3411ef1fab0058ddfa68f9ca2e27d3__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZCaptionRegularIcon);
export default ForwardRef;
