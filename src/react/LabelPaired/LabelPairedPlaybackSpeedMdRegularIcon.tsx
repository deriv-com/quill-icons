import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaybackSpeedMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.5 12c0 3.813-2.844 6.969-6.5 7.438v-1c3.094-.47 5.5-3.188 5.5-6.438S12.094 6.063 9 5.594v-1c3.656.468 6.5 3.625 6.5 7.406M4.156 6.75l-.718-.687A7.1 7.1 0 0 1 7 4.593v1A6.4 6.4 0 0 0 4.156 6.75M2.75 8.188A6.1 6.1 0 0 0 1.563 11h-1A7.1 7.1 0 0 1 2.03 7.469zm0 7.656-.719.719A7.1 7.1 0 0 1 .562 13h1a6.1 6.1 0 0 0 1.188 2.844M7 18.438v1a7.1 7.1 0 0 1-3.562-1.47l.718-.718A6.1 6.1 0 0 0 7 18.438M6.25 8.063c.156-.094.375-.063.531.03l5 3.5c.125.095.219.25.219.407a.55.55 0 0 1-.219.438l-5 3.5a.64.64 0 0 1-.531.03A.55.55 0 0 1 6 15.5v-7c0-.187.094-.344.25-.437M7 9.469v5.094L10.625 12z' />
    </g>
    <defs>
      <clipPath id='a9aafe7a52d58c44210a6803a77b4253__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaybackSpeedMdRegularIcon);
export default ForwardRef;
