import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeXlBoldIcon = (
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
      <path d='M12 8.25c-3.516 0-6.703 1.875-8.484 4.875-1.735 3.047-1.735 6.75 0 9.75C5.296 25.922 8.484 27.75 12 27.75c3.469 0 6.656-1.828 8.438-4.875 1.734-3 1.734-6.703 0-9.75-1.782-3-4.97-4.875-8.438-4.875M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M8.625 12h6c.422 0 .844.328 1.031.75.14.422.047.89-.281 1.219l-2.39 2.203c1.968.187 3.515 1.875 3.515 3.89 0 2.204-1.781 3.938-3.984 3.938H11.25c-1.453 0-2.719-.703-3.469-1.922l-.14-.187c-.328-.516-.141-1.22.375-1.547.515-.328 1.218-.14 1.547.375l.14.187c.328.563.89.89 1.547.89h1.266c.937 0 1.734-.796 1.734-1.733s-.797-1.688-1.734-1.688h-2.391c-.469.047-.89-.234-1.078-.703-.14-.422-.047-.938.281-1.219l2.39-2.203H8.626c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='4676dacd625b01000074df1c4eb6a344__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeXlBoldIcon);
export default ForwardRef;
