import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeXlFillIcon = (
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
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M8.625 12A1.11 1.11 0 0 0 7.5 13.125c0 .656.469 1.125 1.125 1.125h3.094l-2.39 2.203a1.08 1.08 0 0 0-.282 1.219c.187.422.61.703 1.078.703h2.39c.938 0 1.688.75 1.688 1.688a1.68 1.68 0 0 1-1.687 1.687h-1.313c-.61 0-1.172-.281-1.547-.844l-.094-.187c-.328-.516-1.03-.703-1.546-.375s-.703 1.031-.375 1.547l.14.187C8.484 23.297 9.797 24 11.25 24h1.266c2.203 0 3.984-1.734 3.984-3.937 0-2.016-1.547-3.704-3.516-3.891l2.391-2.203c.328-.328.469-.797.281-1.219s-.61-.75-1.031-.75z' />
    </g>
    <defs>
      <clipPath id='d17a82f7287fad7f500499fdf9c02fa0__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeXlFillIcon);
export default ForwardRef;
