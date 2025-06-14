import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskSmRegularIcon = (
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
      <path d='M1.25 6.375v8.75c0 .492.383.875.875.875h8.75a.88.88 0 0 0 .875-.875v-6.7a.9.9 0 0 0-.273-.628L9.453 5.773c-.11-.109-.219-.164-.328-.218v2.57c0 .492-.41.875-.875.875H3a.864.864 0 0 1-.875-.875V5.5a.88.88 0 0 0-.875.875M3 5.5v2.625h5.25V5.5zm-2.625.875c0-.957.766-1.75 1.75-1.75h6.7c.464 0 .902.191 1.23.52l2.05 2.05c.329.328.52.766.52 1.23v6.7c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75zM7.813 12.5c0-.465-.274-.875-.657-1.121-.41-.246-.93-.246-1.312 0-.41.246-.657.656-.657 1.121 0 .492.247.902.657 1.148.383.247.902.247 1.312 0 .383-.246.657-.656.657-1.148M6.5 10.313c.766 0 1.477.437 1.887 1.093.383.684.383 1.531 0 2.188-.41.683-1.121 1.094-1.887 1.094-.793 0-1.504-.41-1.914-1.094-.383-.656-.383-1.504 0-2.188.41-.656 1.121-1.094 1.914-1.094' />
    </g>
    <defs>
      <clipPath id='8dfd87870caaceb51c569c1135cc2023__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskSmRegularIcon);
export default ForwardRef;
