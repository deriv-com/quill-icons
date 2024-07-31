import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopySmBoldIcon = (
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
      <path d='M10.875 12.938a.45.45 0 0 0 .438-.438V6.922l-1.86-1.86H5.625a.45.45 0 0 0-.437.438v7c0 .246.19.438.437.438zm-5.25 1.312c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75h3.828c.328 0 .684.164.93.41l1.832 1.832c.246.246.41.602.41.93V12.5c0 .984-.793 1.75-1.75 1.75zm-3.5-7H3v1.313h-.875A.45.45 0 0 0 1.688 9v7c0 .246.19.438.437.438h5.25A.45.45 0 0 0 7.813 16v-.875h1.312V16c0 .984-.793 1.75-1.75 1.75h-5.25c-.984 0-1.75-.766-1.75-1.75V9c0-.957.766-1.75 1.75-1.75' />
    </g>
    <defs>
      <clipPath id='11ff7d14db6fb8f2ec8153ba758c9dde__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopySmBoldIcon);
export default ForwardRef;
