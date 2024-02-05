import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.633 7.813q-.258.234-.516 0-.234-.258 0-.516A10.3 10.3 0 0 1 3.445 5.07Q5.32 4.274 7.5 4.25q2.18.024 4.055.82a10.3 10.3 0 0 1 3.328 2.227q.234.258 0 .516-.258.234-.516 0a9.9 9.9 0 0 0-3.094-2.063A10.1 10.1 0 0 0 7.5 5a10.1 10.1 0 0 0-3.773.75A9.9 9.9 0 0 0 .633 7.813M7.5 8.75q-1.243 0-2.32.469a6 6 0 0 0-1.922 1.289q-.258.21-.516 0-.234-.281 0-.54A6.65 6.65 0 0 1 4.875 8.54 6.4 6.4 0 0 1 7.5 8q1.407 0 2.625.54 1.219.515 2.133 1.429.234.258 0 .539-.258.21-.516 0a6 6 0 0 0-1.922-1.29A5.8 5.8 0 0 0 7.5 8.75m0 3.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54q0 .328.21.54.212.21.54.21a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21m0 2.25q-.843-.024-1.29-.75-.42-.75 0-1.5.447-.726 1.29-.75.844.024 1.29.75.42.75 0 1.5-.446.726-1.29.75' />
    </g>
    <defs>
      <clipPath id='0ee7226267b4b5a84b2c5155e913a78c__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiCaptionRegularIcon);
export default ForwardRef;
