import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateXlFillIcon = (
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
      <path d='M4.922 15.516c-.281.797-1.172 1.218-1.922.937-.797-.281-1.219-1.125-.937-1.922a10.6 10.6 0 0 1 2.484-3.937 10.553 10.553 0 0 1 14.86 0l.796.844V9.75c0-.797.703-1.5 1.5-1.5.844 0 1.5.703 1.5 1.5V15c0 .844-.656 1.5-1.5 1.5H16.5A1.48 1.48 0 0 1 15 15c0-.797.656-1.5 1.5-1.5h1.594l-.797-.797a7.583 7.583 0 0 0-10.64 0c-.798.844-1.407 1.781-1.735 2.813m-3.094 4.078c.047-.047.14-.047.188-.047.093 0 .14-.047.234-.047H7.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H5.86l.796.844a7.583 7.583 0 0 0 10.64 0c.798-.844 1.407-1.782 1.735-2.813.282-.797 1.172-1.218 1.922-.937.797.281 1.219 1.125.938 1.922-.516 1.453-1.36 2.765-2.485 3.937a10.553 10.553 0 0 1-14.86 0l-.796-.844v1.641c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-5.438c0-.093 0-.14.047-.187.047-.234.187-.469.375-.656.187-.188.422-.328.656-.375' />
    </g>
    <defs>
      <clipPath id='69d1f85254cfc2f798a7015e40193a60__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateXlFillIcon);
export default ForwardRef;
