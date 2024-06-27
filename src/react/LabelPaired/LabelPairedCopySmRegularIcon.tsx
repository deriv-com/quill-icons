import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopySmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.875 13.375a.88.88 0 0 0 .875-.875V6.922a.44.44 0 0 0-.137-.3l-1.86-1.86a.44.44 0 0 0-.3-.137H6.5a.88.88 0 0 0-.875.875v7c0 .492.383.875.875.875zm1.34-7.383c.246.246.41.602.41.93V12.5c0 .984-.793 1.75-1.75 1.75H6.5c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75h2.953c.328 0 .684.164.93.41zM2.125 7.25h1.75v.875h-1.75A.88.88 0 0 0 1.25 9v7c0 .492.383.875.875.875H6.5A.88.88 0 0 0 7.375 16v-.875h.875V16c0 .984-.793 1.75-1.75 1.75H2.125c-.984 0-1.75-.766-1.75-1.75V9c0-.957.766-1.75 1.75-1.75' />
    </g>
    <defs>
      <clipPath id='19fb7523eb3fad5cc3789242124bd2f3__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopySmRegularIcon);
export default ForwardRef;
