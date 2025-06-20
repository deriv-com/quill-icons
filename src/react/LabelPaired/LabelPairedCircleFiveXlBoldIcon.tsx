import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveXlBoldIcon = (
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
      <path d='M12 8.25c-3.516 0-6.703 1.875-8.484 4.875-1.735 3.047-1.735 6.75 0 9.75C5.296 25.922 8.484 27.75 12 27.75c3.469 0 6.656-1.828 8.438-4.875 1.734-3 1.734-6.703 0-9.75-1.782-3-4.97-4.875-8.438-4.875M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M9.75 12h4.875c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3.937l-.376 2.016 2.86.328c1.875.234 3.328 1.828 3.328 3.703a3.76 3.76 0 0 1-3.75 3.75h-1.687a3.84 3.84 0 0 1-3.188-1.735l-.187-.28a1.076 1.076 0 0 1 .28-1.548 1.076 1.076 0 0 1 1.548.282l.234.28c.281.47.797.704 1.313.704h1.687c.844 0 1.5-.656 1.5-1.453 0-.75-.562-1.36-1.312-1.453l-4.079-.469c-.328 0-.609-.187-.796-.422-.188-.281-.235-.562-.188-.89l.75-4.125A1.16 1.16 0 0 1 9.75 12' />
    </g>
    <defs>
      <clipPath id='4744652cdd9527490a62a10592177918__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveXlBoldIcon);
export default ForwardRef;
