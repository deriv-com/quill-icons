import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyBasketIndicesIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M15.333 16.667A1.333 1.333 0 0 1 14 15.334v-8C14 6.598 14.597 6 15.333 6h1.334C17.403 6 18 6.597 18 7.334v8c0 .736-.597 1.333-1.333 1.333zm0-1.333v-8h1.334v8z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M19.333 13.334H27a1 1 0 0 0 1-1v-.667a1 1 0 0 0-1-1h-7.667zM12.667 10.667H5a1 1 0 0 0-1 1v.667a1 1 0 0 0 1 1h7.667z'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M15.337 17.935a3.334 3.334 0 0 1-2.67-3.268H5.333l3.114 9.965a1 1 0 0 0 .955.702h13.196a1 1 0 0 0 .955-.702l3.114-9.965h-7.334a3.334 3.334 0 0 1-2.67 3.268l.004.066v4a.667.667 0 0 1-1.334 0v-4q0-.034.004-.067M11.333 18a.667.667 0 0 1 1.334 0v4a.667.667 0 0 1-1.334 0zm8 0a.667.667 0 0 1 1.334 0v4a.667.667 0 0 1-1.334 0z'
      clipRule='evenodd'
    />
    <path
      fill='#33658A'
      d='M15.333 7.334v8h1.334v-8zM12 17.334a.667.667 0 0 0-.667.666v4a.667.667 0 0 0 1.334 0v-4a.667.667 0 0 0-.667-.666M20 17.334a.667.667 0 0 0-.667.666v4a.667.667 0 0 0 1.334 0v-4a.667.667 0 0 0-.667-.666'
    />
    <path
      fill='#33658A'
      fillRule='evenodd'
      d='M6 0a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6zm8 15.334c0 .736.597 1.333 1.333 1.333h1.334c.736 0 1.333-.597 1.333-1.333v-8C18 6.598 17.403 6 16.667 6h-1.334C14.597 6 14 6.597 14 7.334zm13-2h-7.667v-2.667H27a1 1 0 0 1 1 1v.667a1 1 0 0 1-1 1m-14.333-2.667H5a1 1 0 0 0-1 1v.667a1 1 0 0 0 1 1h7.667zm0 4a3.334 3.334 0 0 0 2.67 3.268l-.004.066v4a.667.667 0 0 0 1.334 0v-4l-.004-.067a3.334 3.334 0 0 0 2.67-3.267h7.334l-3.114 9.965a1 1 0 0 1-.955.702H9.402a1 1 0 0 1-.955-.702l-3.114-9.965z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyBasketIndicesIcon);
export default ForwardRef;
