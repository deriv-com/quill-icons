import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoXlBoldIcon = (
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
      <path d='M12 8.25c-3.516 0-6.703 1.875-8.484 4.875-1.735 3.047-1.735 6.75 0 9.75C5.296 25.922 8.484 27.75 12 27.75c3.469 0 6.656-1.828 8.438-4.875 1.734-3 1.734-6.703 0-9.75-1.782-3-4.97-4.875-8.438-4.875M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m-1.594-15.328-1.125.844c-.469.375-1.172.28-1.547-.188-.421-.515-.28-1.219.188-1.594l1.125-.843c.75-.563 1.64-.891 2.578-.844h.188c2.156.047 3.937 1.781 3.937 3.984a4.05 4.05 0 0 1-1.266 2.907l-3.046 2.812h3.937c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 15.375 24h-6.75c-.469 0-.89-.281-1.078-.703-.14-.422-.047-.89.281-1.219l5.11-4.781c.328-.328.562-.797.562-1.266 0-.937-.797-1.734-1.734-1.734h-.141c-.469 0-.89.14-1.219.375' />
    </g>
    <defs>
      <clipPath id='ee8dd7c896a93255649d3a46b9ef9101__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoXlBoldIcon);
export default ForwardRef;
