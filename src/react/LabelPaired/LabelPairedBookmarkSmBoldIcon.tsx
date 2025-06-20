import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5.063c0-.711.574-1.313 1.313-1.313v12.086l3.554-2.543c.219-.164.52-.164.766 0l3.555 2.543V5.063H1.561V3.75h7.876c.71 0 1.312.602 1.312 1.313v12.03a.68.68 0 0 1-.355.602.68.68 0 0 1-.684-.054L5.5 14.633 1.262 17.64a.63.63 0 0 1-.657.054.68.68 0 0 1-.355-.601z' />
    </g>
    <defs>
      <clipPath id='80b407351bd5f10ff3fee174ffa97728__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkSmBoldIcon);
export default ForwardRef;
