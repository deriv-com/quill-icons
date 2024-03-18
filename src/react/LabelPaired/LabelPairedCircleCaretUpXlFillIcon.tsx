import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCaretUpXlFillIcon = (
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
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m0-17.25c-.328 0-.656.14-.844.375l-4.875 5.25c-.328.328-.375.797-.187 1.219.14.422.562.656 1.031.656h9.75c.422 0 .844-.234 1.031-.656.14-.422.094-.89-.234-1.219l-4.875-5.25A1.07 1.07 0 0 0 12 12.75' />
    </g>
    <defs>
      <clipPath id='46a832a1493a77bece7c3e21a6dc41a3__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCaretUpXlFillIcon);
export default ForwardRef;
