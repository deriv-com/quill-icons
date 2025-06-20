import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.156 7.344A.347.347 0 0 0 14.812 7H13.5v.688h1.313a.347.347 0 0 0 .343-.344m0 1.312c0-.156-.156-.312-.344-.312H13.5V9h1.313a.347.347 0 0 0 .343-.344m-8.031 3.219 2.719-2.719a3.5 3.5 0 0 1-.125-1C9.719 5.875 11.563 4 13.844 4S18 5.875 18 8.156v9.188C18 18.812 16.781 20 15.313 20H6.124A4.12 4.12 0 0 1 2 15.875a4.12 4.12 0 0 1 4.125-4.125c.344 0 .688.031 1 .125m9.375-.531a4.17 4.17 0 0 1-2.656.937 4.1 4.1 0 0 1-3.313-1.687l-1.969 1.969a4.1 4.1 0 0 1 1.688 3.312c0 1-.344 1.938-.937 2.625h6c.656 0 1.187-.531 1.187-1.156zm-3-5.688h-.687v.688h-.657V7h.656v2h-.656v.688h.656v.656h.688v-.656h.656v.656h.656v-.656c.532 0 1-.438 1-1a.97.97 0 0 0-.28-.688.99.99 0 0 0-.063-1.406.95.95 0 0 0-.656-.25v-.688h-.657v.688H13.5zM6.406 13.5h-.843v.375c-.532.156-.875.656-.875 1.219 0 .719.562 1.312 1.28 1.312.282 0 .5.219.5.5 0 .25-.218.469-.5.469a.48.48 0 0 1-.468-.469v-.125h-.812v.125c0 .563.343 1.063.875 1.219v.375h.843v-.375c.532-.156.875-.656.875-1.219a1.32 1.32 0 0 0-1.312-1.312c-.25 0-.469-.219-.469-.5a.48.48 0 0 1 .469-.469c.281 0 .5.219.5.469v.125h.812v-.125c0-.563-.343-1.063-.875-1.219zM4.844 7.656a.76.76 0 0 1 .75-.75H8.53c.313 0 .594.188.688.469a.72.72 0 0 1-.156.813l-2.907 2.906c-.281.281-.75.281-1.062 0a.775.775 0 0 1 0-1.063l1.625-1.625H5.594a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='61d06caf128344604f88c7a1a9fb863a__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampMdFillIcon);
export default ForwardRef;
