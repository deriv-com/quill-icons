import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSignalCaptionRegularIcon = (
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
      <path d='M0 6.125C0 5.094.82 4.25 1.875 4.25h9c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-9C1.242 5 .75 5.516.75 6.125v6.75A1.11 1.11 0 0 0 1.875 14H8.25v.75H1.875A1.85 1.85 0 0 1 0 12.875zm2.25 0c0-.187.164-.375.375-.375h7.5A1.88 1.88 0 0 1 12 7.625v1.64c-.258-.117-.492-.187-.75-.28V7.647c0-.632-.516-1.125-1.125-1.125h-7.5a.385.385 0 0 1-.375-.375zM9 9.875c0-.187.164-.375.375-.375C12.469 9.5 15 12.031 15 15.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375c0-2.672-2.203-4.875-4.875-4.875A.37.37 0 0 1 9 9.875m0 2.25c0-.187.164-.375.375-.375a3.39 3.39 0 0 1 3.375 3.375c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375c0-1.43-1.195-2.625-2.625-2.625A.37.37 0 0 1 9 12.125m0 2.625c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='6ded4371649c7c5f0c928de3a1ff5e48__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSignalCaptionRegularIcon);
export default ForwardRef;
