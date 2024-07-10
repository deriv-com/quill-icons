import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 18c0-.375.328-.75.75-.75H4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75A.74.74 0 0 1 0 18m8.25 0c0-.375.328-.75.75-.75h3.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H9a.74.74 0 0 1-.75-.75m8.25 0c0-.375.328-.75.75-.75H21c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-3.75a.74.74 0 0 1-.75-.75m8.25 0c0-.375.328-.75.75-.75h3.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H25.5a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='44318dc2f471415d7ce967897ad3df50__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedXlRegularIcon);
export default ForwardRef;
