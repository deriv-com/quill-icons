import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenXlBoldIcon = (
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
      <path d='M18 28.5H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3h5.484c.797 0 1.547.328 2.11.89l1.265 1.266c.563.563 1.313.844 2.11.844H19.5c1.64 0 3 1.36 3 3V15h-2.25v-1.5c0-.375-.375-.75-.75-.75h-5.531c-1.406 0-2.719-.516-3.703-1.5L9 9.984a.75.75 0 0 0-.516-.234H3c-.422 0-.75.375-.75.75v12.281l3.188-5.531c.28-.469.75-.75 1.312-.75H25.5c.516 0 1.031.281 1.266.75a1.52 1.52 0 0 1 0 1.547l-5.25 9c-.282.422-.75.703-1.266.703z' />
    </g>
    <defs>
      <clipPath id='ec346c099908e94df3f613d2f7a73a08__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenXlBoldIcon);
export default ForwardRef;
