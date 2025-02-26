import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareCaptionRegularIcon = (
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
      <path d='M9.625 10.063c0 .117.07.187.188.187.046 0 .093 0 .117-.047l3.023-2.86c.024-.023.024-.046.024-.093 0-.023 0-.047-.024-.07L9.93 4.32a.13.13 0 0 0-.117-.07.185.185 0 0 0-.188.188V5.75c0 .21-.187.375-.375.375H7c-1.664 0-3 1.36-3 3 0 .844.352 1.453.773 1.898-.023-.117-.023-.234-.023-.351a2.28 2.28 0 0 1 2.273-2.297H9.25c.188 0 .375.188.375.375v1.313m-.75-.938H7.023c-.843 0-1.523.703-1.523 1.547 0 .351.328.726.54.937.116.094.21.235.21.399v.023c0 .258-.234.469-.492.469-.047 0-.117 0-.164-.023-.422-.188-2.344-1.149-2.344-3.352A3.746 3.746 0 0 1 7 5.375h1.875v-.937a.94.94 0 0 1 .938-.938c.234 0 .468.094.632.258l3.024 2.86a.93.93 0 0 1 .281.632.89.89 0 0 1-.281.633l-3.024 2.86c-.164.187-.398.257-.633.257a.925.925 0 0 1-.937-.937v-.938M1.75 4.25h1.125c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H1.75a.755.755 0 0 0-.75.75V14c0 .422.328.75.75.75H10c.398 0 .75-.328.75-.75v-1.125c0-.187.164-.375.375-.375.188 0 .375.188.375.375V14c0 .844-.68 1.5-1.5 1.5H1.75A1.48 1.48 0 0 1 .25 14V5.75c0-.82.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='badfc645a1da50953b9905be91ed48b6__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareCaptionRegularIcon);
export default ForwardRef;
