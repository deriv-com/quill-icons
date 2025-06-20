import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 6.375v8.75c0 .492.383.875.875.875h5.523l-.218.875H1.875c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75h6.7c.464 0 .902.191 1.23.52l2.05 2.05c.329.328.52.766.52 1.23v1.368l-.875.875V8.426a.9.9 0 0 0-.273-.63L9.203 5.774c-.11-.109-.219-.164-.328-.218v2.57c0 .492-.41.875-.875.875H2.75a.864.864 0 0 1-.875-.875V5.5A.88.88 0 0 0 1 6.375M2.75 5.5v2.625H8V5.5zm2.188 7c0 .492.246.902.656 1.148.383.247.902.247 1.312 0 .383-.246.657-.656.657-1.148 0-.465-.274-.875-.657-1.121-.41-.246-.93-.246-1.312 0-.41.246-.657.656-.657 1.121m1.312 2.188c-.793 0-1.504-.41-1.914-1.094-.383-.656-.383-1.504 0-2.188.41-.656 1.121-1.094 1.914-1.094.766 0 1.477.438 1.887 1.094.383.684.383 1.531 0 2.188-.41.683-1.121 1.094-1.887 1.094m8.04-3.692a.387.387 0 0 0-.602 0l-.684.656 1.094 1.094.683-.656c.164-.192.164-.465 0-.63zM9.476 15.18a.55.55 0 0 0-.11.218l-.328 1.34 1.34-.355c.055 0 .137-.055.191-.11l2.899-2.898-1.094-1.094zm3.582-4.813c.52-.52 1.34-.52 1.859 0l.465.465c.52.52.52 1.34 0 1.86l-4.184 4.21a1.8 1.8 0 0 1-.629.356l-2.05.492c-.137.055-.301 0-.41-.11-.11-.109-.137-.273-.11-.41l.52-2.05c.054-.22.164-.438.328-.602z' />
    </g>
    <defs>
      <clipPath id='77c834b7d9c350a04980ab46d5d8a477__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenSmRegularIcon);
export default ForwardRef;
