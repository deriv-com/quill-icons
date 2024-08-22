import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleOneXlFillIcon = (
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
      <path d='M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12.563-5.812c-.376-.235-.797-.235-1.126 0l-2.624 1.5c-.563.28-.75.984-.422 1.5.28.562.984.75 1.5.421l.984-.515v6.656H9a1.11 1.11 0 0 0-1.125 1.125C7.875 23.531 8.344 24 9 24h6a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 15 21.75h-1.875v-8.625c0-.375-.234-.75-.562-.937' />
    </g>
    <defs>
      <clipPath id='9cbab18e3728c55e64852cfa066203b4__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleOneXlFillIcon);
export default ForwardRef;
