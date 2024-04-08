import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 4.555c.047-.188.188-.305.375-.305h4.875c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H2.031l-.937 3.75H4.75c1.64 0 3 1.36 3 3 0 1.664-1.36 3-3 3H2.219c-.774 0-1.5-.422-1.852-1.125l-.094-.187c-.093-.188 0-.422.164-.516a.385.385 0 0 1 .516.164l.094.21c.234.446.68.727 1.172.727H4.75a2.25 2.25 0 0 0 0-4.5H.625A.4.4 0 0 1 .32 9.36c-.07-.093-.093-.21-.07-.304z' />
    </g>
    <defs>
      <clipPath id='0fbe6f481ef26322a6a81e73a5278c1f__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveCaptionRegularIcon);
export default ForwardRef;
