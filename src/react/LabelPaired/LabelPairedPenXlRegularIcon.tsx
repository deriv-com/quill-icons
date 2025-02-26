import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenXlRegularIcon = (
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
      <path d='m18.516 7.875-2.532 2.578 3.563 3.563 2.578-2.532c.422-.468.422-1.171 0-1.593l-2.016-2.016c-.422-.422-1.125-.422-1.593 0m-3.61 3.61L3.891 22.546a2.8 2.8 0 0 0-.797 1.265l-1.266 4.36 4.36-1.313c.468-.14.937-.375 1.265-.75l11.063-11.015zm6.281-4.688 2.016 2.016a2.69 2.69 0 0 1 0 3.703L8.531 27.188c-.562.515-1.219.937-1.922 1.125L.938 30c-.282.047-.563 0-.75-.187-.188-.188-.235-.47-.188-.75l1.688-5.672c.187-.703.609-1.36 1.125-1.922L17.484 6.797a2.69 2.69 0 0 1 3.703 0' />
    </g>
    <defs>
      <clipPath id='00ea68886f7b973d5f6200c47e5faa13__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenXlRegularIcon);
export default ForwardRef;
