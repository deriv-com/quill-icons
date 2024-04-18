import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 9.5A3.746 3.746 0 0 1 4 5.75h1.688a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H4A2.636 2.636 0 0 0 1.375 9.5 2.62 2.62 0 0 0 4 12.125h1.688a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H4A3.73 3.73 0 0 1 .25 9.5m13.5 0A3.746 3.746 0 0 1 10 13.25H8.313a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563H10A2.636 2.636 0 0 0 12.625 9.5c0-1.43-1.195-2.625-2.625-2.625H8.313a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563H10a3.76 3.76 0 0 1 3.75 3.75m-9.187-.562h4.875A.57.57 0 0 1 10 9.5a.555.555 0 0 1-.562.563H4.562A.54.54 0 0 1 4 9.5c0-.305.234-.562.563-.562' />
    </g>
    <defs>
      <clipPath id='452b59ea519ca278310b919fe9b51138__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleCaptionBoldIcon);
export default ForwardRef;
