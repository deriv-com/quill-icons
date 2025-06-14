import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroXlRegularIcon = (
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
      <path d='M22.5 18c0-3.75-2.016-7.172-5.25-9.047-3.281-1.922-7.266-1.922-10.5 0A10.36 10.36 0 0 0 1.5 18c0 3.797 1.969 7.219 5.25 9.094 3.234 1.922 7.219 1.922 10.5 0A10.48 10.48 0 0 0 22.5 18M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m6 .75h1.125c-.047-.234-.047-.469-.047-.703 0-.235 0-.516.047-.797H6a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h1.594c.843-1.734 2.672-3 4.734-3h1.969c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-1.969c-1.219 0-2.297.61-3 1.5H13.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H8.625c-.047.281-.047.516-.047.797 0 .234 0 .515.047.703H13.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H9.281c.703.984 1.781 1.594 3.047 1.594h1.969c.375 0 .75.328.75.75s-.375.75-.75.75h-1.969c-2.11 0-3.937-1.266-4.781-3.094H6a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='21201c7436e02396dd94d7da91c6a21e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroXlRegularIcon);
export default ForwardRef;
