import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchRotateXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 9.75C.75 7.688 2.39 6 4.5 6h9a3.76 3.76 0 0 1 3.75 3.75v5.813c-.234.093-.469.234-.703.328-.375-.47-.938-.75-1.547-.844V9.75c0-.797-.703-1.5-1.5-1.5H12V9c0 .422-.375.75-.75.75h-4.5A.74.74 0 0 1 6 9v-.75H4.5c-.844 0-1.5.703-1.5 1.5v16.5c0 .844.656 1.5 1.5 1.5h8.813a7.6 7.6 0 0 0 1.734 1.922c-.469.234-1.031.328-1.547.328h-9C2.39 30 .75 28.36.75 26.25zm12.75 7.875c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v.61a6.64 6.64 0 0 1 4.5-1.735c2.766 0 5.11 1.688 6.188 4.078a1.12 1.12 0 0 1-.61 1.453c-.562.282-1.219 0-1.453-.562-.703-1.594-2.297-2.719-4.125-2.719-1.36 0-2.531.61-3.375 1.5h1.5c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3.75c-.656 0-1.125-.469-1.125-1.125zm.563 8.344c-.282-.563 0-1.219.562-1.5.563-.235 1.219.047 1.5.61.656 1.593 2.25 2.671 4.125 2.671 1.313 0 2.531-.562 3.328-1.5h-1.453c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h3.75c.61 0 1.125.516 1.125 1.125v3.75A1.11 1.11 0 0 1 25.875 30c-.656 0-1.125-.469-1.125-1.125v-.562A6.78 6.78 0 0 1 20.25 30c-2.812 0-5.156-1.64-6.187-4.031' />
    </g>
    <defs>
      <clipPath id='b4a633a315e057d5ac49d9170f76de66__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchRotateXlBoldIcon);
export default ForwardRef;
