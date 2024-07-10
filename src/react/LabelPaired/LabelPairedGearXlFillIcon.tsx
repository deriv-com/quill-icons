import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearXlFillIcon = (
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
      <path d='M23.203 13.828c.188.422.047.844-.281 1.172l-2.016 1.828c.047.375.047.797.047 1.172 0 .422 0 .844-.047 1.219l2.016 1.828c.328.281.469.75.281 1.172a9.7 9.7 0 0 1-.703 1.593l-.234.375c-.328.516-.657 1.032-1.032 1.454-.28.375-.75.468-1.172.328l-2.578-.797c-.656.469-1.359.844-2.062 1.172l-.61 2.672a1.11 1.11 0 0 1-.843.843 14 14 0 0 1-3.985 0 1.11 1.11 0 0 1-.843-.843l-.61-2.672a11 11 0 0 1-2.062-1.172l-2.578.797c-.422.14-.891.047-1.172-.282-.375-.468-.703-.984-1.031-1.5l-.235-.375A9.7 9.7 0 0 1 .75 22.22c-.187-.422-.047-.844.281-1.172l2.016-1.828C3 18.844 3 18.422 3 18c0-.375 0-.797.047-1.172L1.03 15c-.328-.328-.468-.75-.281-1.172a9.7 9.7 0 0 1 .703-1.594l.234-.375c.329-.515.657-1.03 1.032-1.5.281-.328.75-.421 1.172-.28l2.578.796c.656-.469 1.36-.89 2.062-1.172l.61-2.672a1.11 1.11 0 0 1 .843-.843C10.641 6.094 11.297 6 12 6c.656 0 1.313.094 1.969.188.422.046.75.421.844.843l.609 2.672c.75.281 1.406.703 2.062 1.172l2.578-.797c.422-.14.891-.047 1.172.281.375.47.703.985 1.032 1.5l.234.375c.281.516.516 1.032.75 1.594zM12 21.75c1.313 0 2.531-.703 3.234-1.875.657-1.125.657-2.578 0-3.75C14.531 15 13.313 14.25 12 14.25c-1.36 0-2.578.75-3.281 1.875-.656 1.172-.656 2.625 0 3.75.703 1.172 1.922 1.875 3.281 1.875' />
    </g>
    <defs>
      <clipPath id='de2d5dd5fc4109f16e3f5566225aa09c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearXlFillIcon);
export default ForwardRef;
