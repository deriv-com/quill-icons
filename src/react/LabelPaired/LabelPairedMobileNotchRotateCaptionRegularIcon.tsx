import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchRotateCaptionRegularIcon = (
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
      <path d='M1 5c0-.82.656-1.5 1.5-1.5H7c.82 0 1.5.68 1.5 1.5v3.469c-.07.023-.117.047-.164.07a1.3 1.3 0 0 0-.586-.469V5A.77.77 0 0 0 7 4.25h-.75v.375c0 .422-.352.75-.75.75H4a.74.74 0 0 1-.75-.75V4.25H2.5a.755.755 0 0 0-.75.75v9c0 .422.328.75.75.75h4.664c.164.188.352.398.563.563-.211.117-.47.187-.75.187H2.5A1.48 1.48 0 0 1 1 14zm3-.75v.375h1.5V4.25zm3 4.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375v.89a3.31 3.31 0 0 1 2.625-1.265c1.406 0 2.625.89 3.117 2.11.07.21-.023.421-.21.492-.188.093-.4 0-.493-.211A2.585 2.585 0 0 0 10.375 9.5a2.62 2.62 0 0 0-2.156 1.125H9.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H7.375A.37.37 0 0 1 7 11zm.234 4.266a.364.364 0 0 1 .211-.47c.188-.093.399 0 .492.188.375.985 1.336 1.641 2.438 1.641.89 0 1.664-.445 2.133-1.125H11.5a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h1.875c.188 0 .375.188.375.375v1.875c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-.867a3.36 3.36 0 0 1-2.625 1.242 3.36 3.36 0 0 1-3.14-2.11' />
    </g>
    <defs>
      <clipPath id='a61bd99b418f2d6f192d0eb9aaf699e9__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchRotateCaptionRegularIcon);
export default ForwardRef;
