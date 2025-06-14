import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClapperboardPlayCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 8H.75v5.25c0 .422.328.75.75.75h9c.398 0 .75-.328.75-.75zm0-.75v-1.5a.7.7 0 0 0-.258-.54L8.953 7.25zm-5.86 0h2.508L10.148 5H7.641zm-1.054 0L6.586 5H4.078l-2.25 2.25zM1.5 5a.755.755 0 0 0-.75.75v1.5h.023L3.023 5zM12 7.25v6c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5h9c.82 0 1.5.68 1.5 1.5zM5.063 8.82l3.187 1.875c.117.07.188.188.188.305 0 .14-.07.258-.188.328l-3.187 1.875a.36.36 0 0 1-.375 0c-.118-.07-.211-.187-.211-.328v-3.75c0-.117.093-.258.21-.305a.36.36 0 0 1 .375 0M7.313 11 5.25 9.781v2.438z' />
    </g>
    <defs>
      <clipPath id='a6020274868f7009a16c000ace13414e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClapperboardPlayCaptionRegularIcon);
export default ForwardRef;
