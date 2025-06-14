import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M6 18.75c-.422 0-.75.375-.75.75 0 .422.328.75.75.75h1.125a5.97 5.97 0 0 0 5.578 3.844h1.969a1.14 1.14 0 0 0 1.125-1.125 1.14 1.14 0 0 0-1.125-1.125h-1.969c-1.265 0-2.344-.61-3.047-1.594H13.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75H9c-.047-.187-.047-.469-.047-.703 0-.281 0-.516.047-.797h4.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75H9.703c.703-.89 1.781-1.5 3-1.5h1.969a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 14.672 12h-1.969c-2.484 0-4.687 1.594-5.578 3.75H6c-.422 0-.75.375-.75.75 0 .422.328.75.75.75h.75c-.047.281-.047.563-.047.797s0 .469.047.703z' />
    </g>
    <defs>
      <clipPath id='62acd25fe52cfdb04e151632a6c9a55e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroXlFillIcon);
export default ForwardRef;
