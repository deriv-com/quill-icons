import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSlashXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.14 6.328c.235-.328.75-.422 1.032-.14l28.5 22.5c.328.234.422.703.14 1.03-.234.329-.703.376-1.03.141L.281 7.36c-.329-.234-.376-.75-.141-1.03m3.844 6.844 1.22.984C4.733 15.328 4.5 16.641 4.5 18c0 2.953 1.219 5.625 3.14 7.547C8.298 22.969 10.689 21 13.5 21h.422l1.922 1.5H13.5c-2.39 0-4.312 1.828-4.5 4.172 1.688 1.172 3.75 1.828 6 1.828 2.203 0 4.266-.656 5.953-1.875v.047-.094l1.266.985C20.203 29.156 17.625 30 15 30c-4.312 0-8.25-2.25-10.406-6-1.922-3.328-2.11-7.36-.61-10.828m3.75-4.688C9.75 6.891 12.328 6 15 6c4.266 0 8.25 2.297 10.36 6 1.921 3.375 2.156 7.406.609 10.875l-1.219-.984c.469-1.172.75-2.485.75-3.891 0-5.766-4.734-10.5-10.5-10.5-2.25 0-4.36.75-6.047 1.922zm5.25 4.125c.047-.046.094-.046.141-.093 1.125-.657 2.578-.657 3.75 0 1.125.656 1.875 1.922 1.875 3.234 0 .422-.094.844-.234 1.266l-1.313-1.032a2.3 2.3 0 0 0-.281-1.359C16.547 13.969 15.797 13.5 15 13.5c-.281 0-.516.047-.75.14z' />
    </g>
    <defs>
      <clipPath id='77e4a759b3cc6a43166b6e10d1c5c9c6__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSlashXlRegularIcon);
export default ForwardRef;
