import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarCaptionRegularIcon = (
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
      <path d='M5.547 7.46a.79.79 0 0 1-.563.423l-3.21.469 2.32 2.32a.69.69 0 0 1 .21.656l-.538 3.281 2.859-1.546a.8.8 0 0 1 .727 0l2.859 1.546-.54-3.28a.69.69 0 0 1 .212-.657l2.32-2.32-3.21-.47c-.259-.046-.47-.187-.563-.421L6.977 4.508zm4.64 7.993h.024L7 13.72l-3.21 1.734a.63.63 0 0 1-.61-.047.58.58 0 0 1-.211-.562l.61-3.633L.976 8.633a.55.55 0 0 1-.141-.586c.07-.188.234-.352.445-.375l3.586-.54 1.617-3.304a.57.57 0 0 1 .493-.328c.234 0 .421.14.515.328L9.11 7.133l3.586.539c.211.023.375.187.446.375.07.21.023.422-.141.586l-2.602 2.578.61 3.633a.58.58 0 0 1-.211.562.63.63 0 0 1-.61.047' />
    </g>
    <defs>
      <clipPath id='ac5ba481b8c1a59d77585046e4df2eea__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarCaptionRegularIcon);
export default ForwardRef;
