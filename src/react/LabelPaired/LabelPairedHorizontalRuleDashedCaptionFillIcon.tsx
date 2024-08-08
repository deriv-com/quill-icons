import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9.5c0-.398.328-.75.75-.75h1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H.75A.74.74 0 0 1 0 9.5m3.984 0c0-.398.352-.75.75-.75h1.5c.422 0 .75.352.75.75a.74.74 0 0 1-.75.75h-1.5a.755.755 0 0 1-.75-.75m4.008 0c0-.398.328-.75.75-.75h1.5c.422 0 .75.352.75.75a.74.74 0 0 1-.75.75h-1.5a.74.74 0 0 1-.75-.75M12 9.5c0-.398.328-.75.75-.75h1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-1.5A.74.74 0 0 1 12 9.5' />
    </g>
    <defs>
      <clipPath id='ef4a8461ccf194cee16089afff8b3098__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedCaptionFillIcon);
export default ForwardRef;
