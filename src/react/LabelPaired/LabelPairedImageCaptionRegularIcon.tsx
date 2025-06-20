import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 5a.755.755 0 0 0-.75.75v5.484l1.57-1.593a.98.98 0 0 1 1.336 0l1.594 1.593 3.07-3.093a.98.98 0 0 1 1.336 0l1.594 1.593V5.75A.77.77 0 0 0 10.5 5zm-.75 7.29v.96c0 .422.328.75.75.75h.96l2.25-2.25-1.593-1.57a.184.184 0 0 0-.258 0zm8.367-3.61a.184.184 0 0 0-.258 0L3.516 14H10.5c.398 0 .75-.328.75-.75v-2.46zM0 5.75c0-.82.656-1.5 1.5-1.5h9c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5zm3.75 1.125a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375m-1.5 0c0-.398.21-.75.563-.96.328-.212.773-.212 1.124 0 .329.21.563.562.563.96 0 .422-.234.773-.562.984-.352.211-.797.211-1.126 0a1.12 1.12 0 0 1-.562-.984' />
    </g>
    <defs>
      <clipPath id='96f0066a91f5eef2650b97c5ef3cbfec__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageCaptionRegularIcon);
export default ForwardRef;
