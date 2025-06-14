import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZCaptionRegularIcon = (
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
      <path d='m6.508 12.406-2.25 2.25a.397.397 0 0 1-.54 0l-2.25-2.25a.397.397 0 0 1 0-.539c.141-.14.4-.14.54 0l1.617 1.617V4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375v8.86l1.594-1.618c.14-.14.398-.14.539 0 .14.14.14.399 0 .54m3.82-7.945 1.5 3v.023l.375.727a.385.385 0 0 1-.164.516c-.187.093-.422 0-.516-.165L11.266 8H8.71l-.258.563a.385.385 0 0 1-.515.164.385.385 0 0 1-.165-.516l.375-.727v-.023l1.5-3A.4.4 0 0 1 10 4.25c.14 0 .258.094.328.21M10 5.469 9.086 7.25h1.805zM8.5 10.25h3c.14 0 .258.094.328.234a.32.32 0 0 1-.047.375L9.273 14H11.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3a.36.36 0 0 1-.352-.21.41.41 0 0 1 .047-.4L10.703 11H8.5a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='729c49f35fd2728bbcfc91afc55ffa77__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZCaptionRegularIcon);
export default ForwardRef;
